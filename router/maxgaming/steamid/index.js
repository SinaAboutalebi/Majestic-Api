//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages 

const express = require('express');
const router = express.Router();

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Set Routes

const profileRouter = require('./routers/profileRouter'); //Profile Data Route
router.use('/profile', profileRouter)

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//