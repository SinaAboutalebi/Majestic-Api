//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages 

const express = require('express');
const router = express.Router();

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Set Routes

const serverRouter = require('./routers/serversRouter'); //all servers Data Route
router.use('/servers', serverRouter)

const countsRouter = require('./routers/countsRouter'); //servers Count Route
router.use('/counts', countsRouter)

const portsRouter = require('./routers/portsRouter'); //server ports Route 
router.use('/ports', portsRouter)

const dataRouter = require('./routers/dataRouter'); //get Data By ip 
router.use('/getData', dataRouter)

module.exports = router;
//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//