//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages 

const express = require('express');
const router = express.Router();

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Set Routes

const faceitidRouter = require('./routers/faceitid.js'); //check player faceit id 
router.use('/faceitid', faceitidRouter)

const playerRouter = require('./routers/player.js'); //Print Player Datas
router.use('/player', playerRouter)

const hubRouter = require('./routers/hub.js'); //Check Player Hub
router.use('/hub', hubRouter)


module.exports = router;
//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//