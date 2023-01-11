//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages 

const axios = require("axios");

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Get Players Faceit Data By ID 

exports.getByID = async (gameplayerid) => {

    const options = {
        method: 'get',
        url: `https://open.faceit.com/data/v4/players?game=csgo&game_player_id=${gameplayerid}`,
        headers: { 'Authorization': 'Bearer 390bc3bc-24a3-4aa8-8c92-5005ca3fc638' } //Faceit APi Authorization 
    }

    let faceitdata = await axios(options).catch((reason) => {

        if (reason.response.status === 400)
            res.status(404).json({ status: 404, error: "the requested player does not exist", message: "faceit account not found" })
    })

    if (!faceitdata)
        res.status(404).json({ status: 404, error: "the requested player does not exist", message: "faceit account not found" })
    else {
        return faceitdata.data;
    }
}
//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//