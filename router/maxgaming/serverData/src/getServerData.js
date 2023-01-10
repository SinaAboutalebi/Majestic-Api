//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages 

const axios = require("axios");

const config = require("./config.json");

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Get Server Data By Port 

exports.getServerDataByPort = async (ip, port) => {

    const options = {
        method: "get",
        url:
            `https://api.steampowered.com/IGameServersService/GetServerList/v1/?key=${config.api
            }&filter=addr${"\\"}` + ip,
    };
    try {
        let serverList = await axios(options);
        var svListArray = serverList.data.response.servers;
        var found = svListArray.find((item) => item.gameport == port);
        return found;

    } catch (err) {
        return err;
    }
}
//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//