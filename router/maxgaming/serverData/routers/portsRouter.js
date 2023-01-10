//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages 

const express = require("express");
const router = express.Router();

const config = require('../src/config.json');
const getServerData = require('../src/getServerData');

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Router 

router.get("/", async (req, res) => {

    const data = {};

    //Server1============================================================//

    const sv1Data = await getServerData.getServerData(config.server1); //Get Data From SteamApi

    if (!sv1Data.servers)

        return res.status(500).json({ status: 500, error: "Internal Server Error", message: "a generic error occurred on the server" });

    const response1 = sv1Data.servers.map((server) => {
        const sv1 = {};
        sv1.port = server.gameport;
        return sv1;
    });
    const result1 = [];
    response1.forEach((server) => result1.push(server.port));

    //Server2============================================================//

    const sv2Data = await getServerData.getServerData(config.server2);
    if (!sv2Data.servers)

        return res.status(500).json({ status: 500, error: "Internal Server Error", message: "a generic error occurred on the server" });

    const response2 = sv2Data.servers.map((server) => {
        const sv2 = {};
        sv2.port = server.gameport;
        return sv2;
    });
    const result2 = [];
    response2.forEach((server) => result2.push(server.port));

    //ResponseData=======================================================//
    
    data.vps1Ports = result1;
    data.vps2Ports = result2;

    res.status(200).json(data);
});

module.exports = router;
//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//