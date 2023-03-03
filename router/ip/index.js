//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages 

const express = require('express');
const router = express.Router();

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Set Routes

const getRouter = require('./routers/get');
router.use('/get', getRouter);

module.exports = router;
//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//