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

module.exports = router;
//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//