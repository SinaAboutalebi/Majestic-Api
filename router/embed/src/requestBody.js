//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages 

const embedBody = require('./embedBody');

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Export Request Body

module.exports = async (reqBody) => {

    const embed = await embedBody(reqBody)

    let body = {
        embeds: [embed],
    };

    if (reqBody.role != "none") {
        if (reqBody.role === "@everyone") {
            body.content = "@everyone";
        } else {
            body.content = `<@&${reqBody.role}>`;
        }
    }

    return body;

}

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//