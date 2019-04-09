const {Article} = require('../models');


class ArticleController {

    static allArticle (req, res) {
        Article
          .find({})
          .then((articles) => {
              res.status(200).json(articles)
          })
          .catch((err) => {
              res.status(500).json(err)
          })
    }

    static getOneArticle (req, res) {
        Article
          .findOne({_id : req.params.id})
          .then((articles) => {
              res.status(200).json(articles)
          })
          .catch((err) => {
              res.status(500).json(err)
          })
    }

    static createArticle(req, res) {
        let obj = {
            title : req.body.title,
            content : req.body.content,
            createdAt : new Date().toLocaleDateString(),
            author : req.decoded.username,
            featureImage : req.body.featureImage,
            UserId : req.decoded.id
        }
        Article
          .create(obj)
          .then((articles) => {
              res.status(201).json(articles)
          })
          .catch((err) => {
              res.status(500).json(err)
          })
    }

    static deleteArticle (req, res) {
        Article
          .findByIdAndDelete(req.params.id)
          .then((articles) => {
              res.status(200).json(articles)
          })
          .catch((err) => {
              res.status(500).json(err)
          })
    }

}

module.exports = ArticleController