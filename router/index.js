//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages 

const express = require('express');
const router = express.Router();

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Set Routes

const maxgamingRoutes = require('./maxgaming');
router.use('/maxgaming', maxgamingRoutes);

module.exports = router;
//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//