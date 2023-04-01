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
                steamidResolver.customUrlToFullInfo(url, async function (err, result) {

                    if (err) return res.status(500).json({ status: 500, error: "Internal Server Error", message: "a generic error occurred on the server" });
                    if (!result) return res.status(404).json({ status: 404, error: "Not Found", message: "the requested profile not found" });

                    let sid = new SteamIDpack(result.steamID64.toString()); //SteamID Pack

                    return res.status(200).json({ //Return Profile Data
                        status: 200,
                        nickname: result.steamID,
                        avatarUrl: result.avatarFull,
                        memberSince: result.memberSince,
                        onlineState: result.onlineState,
                        privacyState: result.privacyState,
                        fullUrl: `https://steamcommunity.com/profiles/${result.steamID64}`,
                        steam64id: result.steamID64,
                        steam2id: sid.getSteam2RenderedID(true),
                        steam3id: sid.getSteam3RenderedID()


                    })
                })
            }
        }
    }
})

module.exports = router;
//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//