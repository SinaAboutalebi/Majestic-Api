//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages 

const express = require('express');
const router = express.Router();

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Set Routes

const serverData = require('./serverData'); //Server Data Router 
router.use('/serverData', serverData)

const faceitRouter = require('./faceit'); //Faceit API Router
router.use('/faceit', faceitRouter)

const rconRouter = require('./rcon'); //Rcon API Router
router.use('/rcon', rconRouter);

const steamidRouter = require('./steamid'); //SteamID API Router
router.use('/steamid', steamidRouter);

module.exports = router;
//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//