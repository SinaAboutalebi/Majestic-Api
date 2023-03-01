//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages

const express = require("express");
const router = express.Router();
const rcon = require('rcon');

const embed = require('../src/embed');
const logger = require('../src/logger');
const getServer = require('../src/getServer');

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Routes

router.post("/", async (req, res) => {

    if (req.headers.authorization != process.env.AUTH_TOKEN) {
        return res.status(401).send({
            status: 401,
            error: 'Unauthorized.',
            message: "client failed to authenticate with the server"
        });
    }

    else {
        //Check Request Body Params=================================================//
        if (!req.body.sv || !req.body.port || !req.body.cmd || !req.body.pass || !req.body.channelid ) {

            return res.status(400).json({
                status: 400,
                error: "Bad Request",
                message: "invalid query"
            });
        } else {
            //Get Server Data=======================================================//
            const server = getServer(req.body.channelid);
            if (server.error) {
                return res.status(400).send({
                    status: 400,
                    error: "Bad Request",
                    message: server.error
                })
            }

            //Try To Connect Server Rcon ===========================================//
            try {

                connection = new rcon(req.body.sv, req.body.port, req.body.pass, {
                    "tcp": true,
                    "challenge": false
                })
                connection.connect()

                if (!req.body.cmd.startsWith("sm_")) {
                    command = req.body.cmd.replace(/sm /g, 'sm_')
                }
                else { command = req.body.cmd }

                connection.on("auth", async () => {
                    
                    connection.send(command)


                }).on('response', async function (str) {
                    if (str.length > 1) {
                        logger(`[${server.label} - ${server.ip}:${server.port}](${req.body.user} - ${command})::${str.toString()}`)
                        embed.response(str, req.body.channelid, server)
                        embed.logs(req.body.user, command, server, str.toString())
                        return res.status(200).send({
                            status: 200,
                            label: server.label,
                            server: server.ip,
                            port: server.port,
                            cmd: req.body.cmd,
                            response: str.toString()
                        })
                    }

                }).on('error', async function (err) {
                    logger(`[${server.label} - ${server.ip}:${server.port}](${req.body.user} - ${command})::${err}`)
                    embed.error(err, req.body.channelid, server)
                    embed.logs(req.body.user, command, server, err)

                    return res.status(500).send({
                        status: 500,
                        error: "a generic error occurred on the server",
                        message: err.toString(),
                        label: server.label,
                        server: server.sv,
                        port: server.port
                    })

                })

            } catch (error) {
                logger(`[${server.label} - ${server.ip}:${server.port}](${req.body.user} - ${command})::${error}`)
                embed.error(err, req.body.channelid, server)
                embed.logs(req.body.user, command, server, err)

                return res.status(500).send({
                    status: 500,
                    error: "a generic error occurred on the server",
                    message: error,
                    label: server.label,
                    server: req.body.sv,
                    port: req.body.port,
                })
            }


        }
    }
});

module.exports = router;
//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//