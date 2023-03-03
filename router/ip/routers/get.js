//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages 

const express = require('express');
const router = express.Router();

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Route

router.get('/', async (req, res) => {
    return res.status(200).send({
        status: 200,
        ip: req.headers['x-forwarded-for']
    })
 })

module.exports = router;
//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//