//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages 

const express = require('express');
const router = express.Router();

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Set Routes

const maxgamingRoutes = require('./maxgaming');
router.use('/maxgaming', maxgamingRoutes);

const embedRoutes = require('./embed');
router.use('/embed', embedRoutes);

const ipRoutes = require('./ip');
router.use('/ip', ipRoutes);

module.exports = router;
//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
