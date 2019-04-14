const jwt = require('jsonwebtoken');
const { User } = require('../models');
const secret = process.env.JWT_SECRET

module.exports = {
  Authentication (req, res, next) {
    console.log(req.headers.token)
    jwt.verify(req.headers.token, secret, (err, decoded) => {
      if (!err) {
        User.findById(decoded.id, (err, user) => {
          if (!err) {
            if (user) {
              req.decoded = decoded
              next()
            } else {
              res.status(500).json({
                warning: 'Invalid token!'
              })
            }
          } else {
            res.status(500).json({
              msg: err
            })
          }
        })
      } else {
        res.status(500).json({
          msg: err
        })
      }
    });
  }
}