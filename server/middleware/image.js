const Multer = require('multer');
const { Article } = require('../models');
var path = require('path');


const multer = Multer({
  storage: Multer.MemoryStorage,
  limits: {
    fileSize: 5 * 1024 * 1024
  }
})




module.exports = {
  multer
}