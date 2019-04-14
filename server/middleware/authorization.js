const { Article } = require('../models');

module.exports = {
  Authorization({ params, decoded }, res, next) {
    Article
      .findById(params.id)
      .then(article => {
        if(decoded.id === String(article.userId)) {
          next()
        } else {
          res.status(401).json({ message: 'You do not have an authorize to access this data!'})
        }
      })
      .catch(err => {
        res.status(500).json({ message: err })
      })
  }
}