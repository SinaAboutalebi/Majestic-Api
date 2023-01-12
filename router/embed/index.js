//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages 

const express = require('express');
const router = express.Router();

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Set Routes

const sendRouter = require('./routers/send');
router.use('/send', sendRouter);

module.exports = router;
//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//