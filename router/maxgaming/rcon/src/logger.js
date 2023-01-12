//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages

const fs = require('fs');
const time = require('node-get-time');
const util = require('util');
const path = require('path')



//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Logger Function


let date = new Date()
let formatedDate = date.toISOString().split('T')[0]

var commandLogStream = fs.createWriteStream(path.join(__dirname, '..', '..', '..', '..', 'logs', 'rcon', `${formatedDate}-commands.log`), { flags: 'a', interval: '1d' });

module.exports = async (d) => {

    commandLogStream.write("[" + time.now() + "] " + util.format(d) + '\n');

}
//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//