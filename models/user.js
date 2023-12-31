const mongoose = require('mongoose')
const validator = require('validator')


const userShema = new mongoose.Schema({
    name : {
        type : String,
        required : true 
    },
    email : {
        type: String,
        required: true,
        unique: [true, "Email id is already exit."],
        validate(value) {
        if (!validator.isEmail(value)) {
            throw new Error("Invalid Email");
            }
        }
    }, 
    phone : {
        type : Number,
        required : true,
        unique : true

    },
    password : {
        type : String,
        minlength : 8,
        required : true
    } 
})

module.exports = mongoose.model('Navgurukul', userShema)