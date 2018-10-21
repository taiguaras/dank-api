const express = require('express');
const cors = require ('cors');
const mongoose = require ('mongoose');
const requireDir = require('require-dir');

//Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o DB
mongoose.connect(
    "mongodb://localhost:27017/danknodeapi",
    { useNewUrlParser: true }
);

requireDir("./src/models");

// const Strain = mongoose.model('Strain');


// Rotas
app.use('/api', require("./src/routes"));


app.listen(3001);