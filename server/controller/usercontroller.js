const {User} = require('../models');
const bcrypt = require('bcrypt');


class UserController {

    static register (req, res) {
        User
          .create(req.body)
          .then((users) => {
              res.status(200).json(users)
          })
          .catch((err) => {
              res.status(500).json(err)
          })
    }

    static login (req, res) {
        User
         .findOne ( {email : req.body.email} )
         .then((users) => {
            if(!users){
               res.status(500).json({message : `Email isn't registered yet`})
            } 
         })
         .catch((err) => {
             res.status(500).json(err)
         })
    }

}

module.exports = UserController