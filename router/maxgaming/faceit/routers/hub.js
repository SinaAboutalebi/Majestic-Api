//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages 

const express = require("express");
const router = express.Router();

const getData = require('../src/getData');

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Router 

router.get('/', async (req, res) => {

    gameplayerid = req.query.id

    if (gameplayerid.length == 17) {

        try {

            const playerData = await getData.getByID(gameplayerid)
            const hubs = await getData.getHubs(playerData.player_id)

            if (hubs.length < 1) return res.status(200).send({ status: 200, message: "this player donsen't joined any hub" })
            else return res.status(200).send({ hubs })


        } catch (error) {

            return res.status(408).json({ status: 408, error: error, message: "api is currently down" });
        }

    }

    else {
        return res.status(400).json({ status: 400, error: "Bad Request", message: "invalid query" });
    }


})


module.exports = router;
//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//