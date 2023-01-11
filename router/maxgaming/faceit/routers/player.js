//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages 

const express = require("express");
const router = express.Router();

const getData = require('../src/getData');

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Router 

router.get('/', async (req, res) => {

    gameplayerid = req.query.id

    try {

        const data = await getData.getByID(gameplayerid)
        if (data) res.status(200).send({ data })

    } catch (error) {

        return res.status(408).json({ status: 408, error: error, message: "api is currently down" });
    }
})


module.exports = router;
//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//