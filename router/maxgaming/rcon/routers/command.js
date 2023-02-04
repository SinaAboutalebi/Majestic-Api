//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages

const express = require("express");
const router = express.Router();
const rcon = require('rcon');

const logger = require('../src/logger');

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

        if (!req.body.sv || !req.body.port || !req.body.cmd || !req.body.pass) {

            return res.status(400).json({
                status: 400,
                error: "Bad Request",
                message: "invalid query"
            });

        } else {
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
                        logger(`[${req.body.sv}:${req.body.port}](${command})::${str}`)
                        return res.status(200).send({
                            status: 200,
                            server: req.body.sv,
                            port: req.body.port,
                            cmd: req.body.cmd,
                            response: str
                        })
                    }

                }).on('error', async function (err) {
                    logger(`[${req.body.sv}:${req.body.port}](${command})::${err}`)
                    return res.status(500).send({
                        status: 500,
                        error: "a generic error occurred on the server",
                        message: err.toString(),
                        server: req.body.sv,
                        port: req.body.port
                    })

                })

            } catch (error) {
                logger(`[${req.body.sv}:${req.body.port}](${command})::${error}`)
                return res.status(500).send({
                    status: 500,
                    error: "a generic error occurred on the server",
                    message: error,
                    server: req.body.sv,
                    port: req.body.port,
                })
            }

        }
    }

});
//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Exports Router

module.exports = router;