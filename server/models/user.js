const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');


const userSchema = new Schema({
    fullname : {
        type : String,
        required : [true, 'Name must not be empty'],
        minlength : [3, 'More than 3 characters please']
    },
    username : {
        type : String,
        required : true,
        min : [3, `Minimum name length is 3`]
    },
    password : {
        type : String,
        required : true,
        min : [6, `Minimum character of password is 6`]
    },
    email: {
        type: String,
        required: [true, 'Email must be filled.'],
        unique: true,
        validate: {
          validator: function(value) {
            return /^[^@]+@[^@].+[^@]/.test(value);
          },
          message: function() {`email is not valid!`}
        }
    },
},{ 
    timestamps: { 
      createdAt: 'created_at',
      updatedAt: 'updated_at' 
    }
  })


userSchema.pre('save', function (next) {
    const saltRound = 10;
    const salt = bcrypt.genSaltSync(saltRound)
    const hash = bcrypt.hashSync(this.password, salt)
    this.password = hash
    next()
})

const User = mongoose.model('User', userSchema);

module.exports = User