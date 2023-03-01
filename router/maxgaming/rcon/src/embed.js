//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages

const axios = require('axios');
const config = require('./config.json');

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
        url: "http://api.0powerdev.ir/embed/send",
        headers: {
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
        url: "http://api.0powerdev.ir/embed/send",
        headers: {
            'Content-Type': 'application/json'
        },
        data: data

    }

    await axios(options)

}

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Logs

exports.logs = async (userid, command, server, str) => {

    let data = JSON.stringify({
        tkn: process.env.RCON_BOT,
        channelid: config.logchannelid,
        title: ":warning: Log :",
        description: `**:bust_in_silhouette: Admin :** <@${userid}> (${userid})\n\n**:page_with_curl: Command :** ${command}\n\n **:satellite: Server : **  ${server.label} (${server.ip}:${server.port}) \n\n **:gear: Response :** ` + "```" + str.toString() + "```",
        footer: `${server.ip}:${server.port} - ${server.label}`,
        role: "none",
        color: "#8c6de7"
    })

    const options = {
        method: 'POST',
        url: "http://api.0powerdev.ir/embed/send",
        headers: {
            'Content-Type': 'application/json'
        },
        data: data

    }

    await axios(options)

}
//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//