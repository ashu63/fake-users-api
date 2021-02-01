const mongoose = require('mongoose');

const demoDataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },



})

const PeopleData = new mongoose.model("PeopleData", demoDataSchema);
module.exports = PeopleData;
