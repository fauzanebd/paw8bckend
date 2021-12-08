const mongoose = require('mongoose')

const animalSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true
    },

    species : {
        type : String,
        required : true
    },

    age : {
        type : String,
        required : false,
        default : null
    },

    adopted : {
        type : Boolean,
        required : true,
        default : false
    }

},

{timestamps : true}

)

module.exports = mongoose.model('Animal', animalSchema)

