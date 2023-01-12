//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages 

const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const requestBody = require('../src/requestBody');

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Routes

router.post('/', async (req, res) => {

    //Get Request Body========================================================//

    const rqbody = await requestBody(req.body)

    //Send Embed W/ Discord===================================================//

    let data = await fetch(
        `https://discord.com/api/v10/channels/${req.body.channelid}/messages`,
        {
            method: "POST",
            headers: {
                Authorization: `Bot ${req.body.tkn}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(rqbody),
        }
    ).then((res) => res.json())
        .then((json) => {
            if (!json.errors) {
                res.status(200).send({
                    status: 200,
                    message: "server sent the embed request as expected"
                });
            } else return res.status(500).send({
                status: 500,
                error: "a generic error occurred on the server",
                message: json.errors,
            })

        });
});

module.exports = router;
//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//