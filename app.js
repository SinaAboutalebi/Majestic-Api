//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages

const cors = require("cors");
const morgan = require('morgan');
const express = require("express");
const dotenv = require("dotenv").config();

const router = require('./router');

const app = express();

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Colors

magenta = "\x1b[35m";
cyan = "\x1b[36m";
blue = "\x1b[34m";

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//MiddleWares 

app.use(cors({ methods: ['GET', 'POST'] }));
app.use(morgan("common"))
app.use(router)
app.use("*", (req, res) => {
    res.status(401).send({ status: 401, error: 'Unauthorized', message:"client failed to authenticate with the server" });
});

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Server StartUP

app.listen(process.env.PORT, async () => {
    console.log(
        magenta,
        "[📶]Server Is Running Properly ....\n [⚙️]Port : ",
        process.env.PORT
    );
});
