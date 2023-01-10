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

    //Server 1============================================================//

    const sv1Data = await getServerData.getServerData(config.server1); //Get Data From SteamApi
    
    if (!sv1Data.servers)
        return res.status(500).json({ status: 500, error: "Internal Server Error", message: "a generic error occurred on the server" });

    const response1 = sv1Data.servers.map((server) => {
        const sv1 = {};
        sv1.port = server.gameport;
        sv1.name = server.name;
        sv1.players = server.players;
        return sv1;
    });

    const sv1players = response1
        .map((server) => server.players)
        .reduce((prev, curr) => prev + curr, 0);

    //Server 2============================================================//

    const sv2Data = await getServerData.getServerData(config.server2); //Get Data From SteamApi

    if (!sv2Data.servers)
        return res.status(500).json({ status: 500, error: "Internal Server Error", message: "a generic error occurred on the server" });

    const response2 = sv2Data.servers.map((server) => {
        const sv2 = {};
        sv2.port = server.gameport;
        sv2.name = server.name;
        sv2.players = server.players;
        return sv2;
    });
    const sv2players = response2
        .map((server) => server.players)
        .reduce((prev, curr) => prev + curr, 0);

    //ResponseData=======================================================//

    data.totalServers = response1.length + response2.length;
    data.vps1Onlines = response1.length;
    data.vps2Onlines = response2.length;
    data.totalPlayers = sv1players + sv2players;
    data.vps1Players = sv1players;
    data.vps2Players = sv2players;
    data.vps1Servers = response1;
    data.vps2Servers = response2;

    res.status(200).json(data);
});

module.exports = router;
//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
