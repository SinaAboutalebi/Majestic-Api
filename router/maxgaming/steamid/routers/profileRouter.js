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
    else {
        if (url) {
            if (url.includes("steamcommunity.com") && url.includes("steamcommunity.com/id")) { //Basic Url Validator
                steamidResolver.customUrlToFullInfo(url, async function (err, res) {

                    if (err) return res.status(500).json({ status: 500, error: "Internal Server Error", message: "a generic error occurred on the server" });
                    if (!res) return res.status(404).json({ status: 404, error: "Not Found", message: "the requested profile not found" });

                })
            }
        }
    }
})