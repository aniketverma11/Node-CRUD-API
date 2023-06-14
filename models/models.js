const mongoose = require('mongoose')


const appscema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    tech: {
        type: String,
        required: false
    },
    sub: {
        type: Boolean,
        required: true,
        default: false
    }

})

module.exports = mongoose.model('App', appscema)