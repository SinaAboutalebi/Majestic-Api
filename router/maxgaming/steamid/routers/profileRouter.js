//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages 

const express = require("express");
const router = express.Router();

const steamidResolver = require("steamid-resolver");
const SteamIDpack = require("steamid");

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Router 

router.get("/", async (req, res) => {

    var url = req.query.url; //Url Query Param ?url=
    var id = req.query.id; //id Query Param ?id= 

    if (!url && !id) { //Check Query Params
        return res.status(400).json({ status: 400, error: "Bad Request", message: "invalid query" });
    }
    else { }
})