const mongoose = require('mongoose');

module.exports =  new mongoose.Schema({
    type: {
        type: String,
        enum:  ['Point'],
        required: true
    },
    coordinates: {
        type: [Number],
        required: true
    }
});