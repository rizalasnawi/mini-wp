const {User} = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET
const {gooogleAuthentication} = require('../helpers/googleAuthentication');


class UserController {

    static register (req, res, next) {
        User
          .create(req.body)
          .then((users) => {
              res.status(201).json(users)
          })
          .catch(next)
    }

    static signInLocal ({body}, res, next) {
        User
          .findOne({
            $or:[
              {'username': body.username },
              {'email': body.username }
            ] 
          })
          .then(function(user) {
            if(!user) {
              res.status(400).json({
                warning: 'Username/Password is wrong.'
              })
            } else {
              if(!bcrypt.compareSync(body.password, user.password)) {
                res.status(400).json({
                  warning: 'Username/Password is wrong.'
                })
              } else {
                const {_id, email, fullname } = user
                const token = jwt.sign({ 
                  id: _id, email, fullname
                }, JWT_SECRET);
                res.status(200).json({ email, fullname, token })
              }
            }
          })
          .catch(next)
      }

      static signInGoogle ({ body }, res, next) {
        googleAuth(body.id_token)
        .then((ticket) => {
          const { name, email } = ticket.getPayload();
          User
            .findOne({ email })
            .then(user => {
              if(!user) {
                let newUser = new User({
                  fullname: name,
                  username: name,
                  password: '12345678',
                  email: email
                });
    
                newUser
                  .save()
                  .then(user => {
                    const token = jwt.sign({ id: user._id, email: user.email, fullname: user.fullname }, JWT_SECRET);
    
                    res.status(200).json({ email: user.email, fullname: user.fullname, token })
                  })
              } else {
                const token = jwt.sign({ id: user._id, email: user.email, fullname: user.fullname }, JWT_SECRET);
    
                res.status(200).json({ email: user.email, fullname: user.fullname, token })
              }
            }).catch(next)
        })
        .catch(next)
      }

    static findAll (req, res, next) {
        User
          .find()
          .then((users) => {
              res.status(200).json(users)
          })
          .catch(next)
    }

    static findOne(req, res, next) {
        User
          .findById(params.id)
          .then((users) => {
              if(users){
                res.status(200).json(users)
              } else {
                  res.status(404).json({message : `User not found`})
              }
          })
          .catch(next)
    }

}

module.exports = UserController