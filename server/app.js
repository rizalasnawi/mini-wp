require('dotenv').config();

const express = require('express');
const app = express();
const port = 3000

const mongoose = require('mongoose');
const cors = require('cors');


app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.listen(port, () => {
    console.log(`Port listening to ${port}`)
})


