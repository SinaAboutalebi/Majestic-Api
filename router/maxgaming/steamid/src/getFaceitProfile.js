//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages 

const axios = require("axios");

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Get Faceit Profile By ID

module.exports = async function (id) {

    const options = {
        method: "get",
        url:
            `http://api.0powerdev.ir/maxgaming/faceit/player?id=${id}`
    };

    try {
        let faceitProfile = await axios(options);

        if (faceitProfile.data) {
            return faceitProfile.data;
        } else {
            return;
        }
    } catch (error) {
        return error;
    }
}
//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//