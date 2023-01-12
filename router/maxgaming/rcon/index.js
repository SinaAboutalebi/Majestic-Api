//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages 

const express = require('express');
const router = express.Router();

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Set Routes

const commandRouter = require('./routers/command'); //Execute Rcon Commands via API
router.use('/command', commandRouter)

module.exports = router;
//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//