const user = require('express').Router();
const {UserController} = require('../controller');

user.get('/', UserController.findAll);
user.post('/', UserController.register);


module.exports = user