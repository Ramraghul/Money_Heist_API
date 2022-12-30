//Require
const mongoose = require('mongoose');

//Schema
const Heist = new mongoose.Schema({
    Name: {
        type: String,
        collection: String
    },
    Alias: {
        type: Array,
    },
    Occupation: {
        type: Array,
    },
    Gender: {
        type: String,
    },
    Weapon: {
        type: Array,
    },
    Nationality: {
        type: String,
    },
    Status: {
        type: String,
    },
    Romance: {
        type: Array,
    },
    Family: {
        type: Array,
    },
    Relatives:{
        type:String,
    },
    Children: {
        type: String,
    },
    First_appearance: {
        type: String,
    },
    Last_appearance: {
        type: String,
    },
    Played_by: {
        type: String,
    },
    Image: {
        type: String,
    }

}, { timestamps: true })

//Export;
module.exports = mongoose.model('Users', Heist, "Heist_Data");

