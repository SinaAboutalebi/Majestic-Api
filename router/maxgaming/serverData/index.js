//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages 

const express = require('express');
const router = express.Router();

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Set Routes

// const serverRouter = require('./serversRouter'); //all servers Data Route
// router.use('/servers', serverRouter)

// const countsRouter = require('./countsRouter'); //servers Count Route
// router.use('/counts', countsRouter)

// const portsRouter = require('./portsRouter'); //server ports Route 
// router.use('/ports', portsRouter)

const dataRouter = require('./dataRouter'); //get Data By ip 
router.use('/getData', dataRouter)

module.exports = router;
//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//