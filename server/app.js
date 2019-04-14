require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');


mongoose.connect('mongodb://localhost:27017/mini-wp', {useNewUrlParser: true, useCreateIndex: true});


app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use('/', routes);



app.listen(port, () => {
    console.log(`Port listening to ${port}`)
})


