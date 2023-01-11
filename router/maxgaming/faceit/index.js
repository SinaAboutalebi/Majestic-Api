//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages 

const express = require('express');
const router = express.Router();

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Set Routes

const faceitidRouter = require('./routers/faceitid.js'); //check player faceit id 
router.use('/faceitid', faceitidRouter)


module.exports = router;
//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//