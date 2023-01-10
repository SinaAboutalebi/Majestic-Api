//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages 

const express = require("express");
const router = express.Router();
const axios = require("axios");

const config = require("./config.json");

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Functions

async function getServerData(ip, port) {
    const options = {
        method: "get",
        url:
            `https://api.steampowered.com/IGameServersService/GetServerList/v1/?key=${config.api
            }&filter=addr${"\\"}` + ip,
    };

    let serverList = await axios(options);
    var svListArray = serverList.data.response.servers;
    var found = svListArray.find((item) => item.gameport == port);
    return found;
}

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Router 

router.get("/", async (req, res) => {

    var ip = req.query.ip;
    var port = req.query.port;

    if (!ip || !port) {
        return res.status(400).json({ status: 400, error: "Bad Request", message: "invalid query" });
    } else {

        try {
            let data = await getServerData(ip, port);

            if (data) res.status(200).json(data);
            else {
                return res.status(404).json({ status: 404, error: "Not Found", message: "the requested server not found" });
            }
        } catch (error) {
            return res.status(408).json({ status: 408, error: error, message: "api is currently down" });
        }

    }
});

module.exports = router;
//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//