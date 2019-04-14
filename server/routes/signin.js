const user = require('express').Router();
const {UserController} = require('../controller');


user.post('/local', UserController.signInLocal);
user.post('/google', UserController.signInGoogle);


module.exports = user