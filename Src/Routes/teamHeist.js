//Require
const express = require('express');
const Data = require('../Model/teamModel')
const Path = express.Router();


//Conform to working;
Path.get('/', (req, res) => {
    try {
        res.status(200).send('<h1>LA CASA DE PAPEL</h1>')
    } catch (error) {
        res.send(error)
    }
})


//All Members Data; 
Path.get('/All', (req, res) => {
    try {
        Data.find().then((data) => {
            res.status(201).json(data)
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

//Read Data; 
Path.get('/:id',async(req, res) => {
    try {
        let value = req.params.id;
        let final =await Data.findOne({Member:value})
        res.status(200).json(final)
    } catch (error) {
        res.status(500).json(error)
    }
})

//Read Data; 
Path.get('/Alias/:Person',async(req, res) => {
    try {
        let value = req.params.Person;
        let final =await Data.findOne({Alias:value})
        res.status(200).json(final)
    } catch (error) {
        res.status(500).json(error)
    }
})


//Export express Router;
module.exports = Path;