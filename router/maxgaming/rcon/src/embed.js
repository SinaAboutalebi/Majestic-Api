//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages

const axios = require('axios');

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Error 

exports.error = async (error, channelid, server) => {

    let data = JSON.stringify({
        tkn: process.env.RCON_BOT,
        channelid: channelid,
        title: "Error :",
        description: `**${server.label}** : \n\n ${error.toString()}`,
        footer: `${server.ip}:${server.port} - ${server.label}`,
        role: "none",
        color: "#FD0000"
    })

    const options = {
        method: 'POST',
        url: "http://127.0.0.1:64220/embed/send",
        headers: {
            'authorization': '123456',
            'Content-Type': 'application/json'
        },
        data: data

    }

    await axios(options)

}
//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Response

exports.response = async (str, channelid, server) => {

    let data = JSON.stringify({
        tkn: process.env.RCON_BOT,
        channelid: channelid,
        title: "Response :",
        description: `**${server.label}** : \n\n ${str.toString()}`,
        footer: `${server.ip}:${server.port} - ${server.label}`,
        role: "none",
        color: "#35fc03"
    })

    const options = {
        method: 'POST',
        url: "http://127.0.0.1:64220/embed/send",
        headers: {
            'authorization': '123456',
            'Content-Type': 'application/json'
        },
        data: data

    }

    await axios(options)

}
//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//