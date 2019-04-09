const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');


const userSchema = new Schema({
    username : {
        type : String,
        required : true,
        min : [3, `Minimum name length is 3`]
    },
    email : {
        type : String,
        required : true,

    },
    password : {
        type : String,
        required : true,
        min : [6, `Minimum character of password is 6`]
    }
})


const User = mongoose.model('User', userSchema);

module.exports = User