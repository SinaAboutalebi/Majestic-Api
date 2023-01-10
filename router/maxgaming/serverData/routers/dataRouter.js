//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages 

const express = require("express");
const router = express.Router();

const getServerData = require('../src/getServerData');
//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Router 

router.get("/", async (req, res) => {

    var ip = req.query.ip;
    var port = req.query.port;

    if (!ip || !port) {
        return res.status(400).json({ status: 400, error: "Bad Request", message: "invalid query" });
    } else {
        try {
            let data = await getServerData.getServerDataByPort(ip, port);
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