const {Article} = require('../models');


class ArticleController {

    static findAll ({ query }, res, next) {
        q = {}
        if(query && query.q) {
            q = q.split('+').join(' ')
        }

        Article
          .find({q})
          .then((articles) => {
              res.status(200).json(articles)
          })
          .catch(next)
    }

    static findOne ( {params}, res, next) {
        Article
          .findById(params.id)
          .then((articles) => {
              if(articles) {
                res.status(200).json(articles)
              } else {
                  res.status(400).json({message : 'No article found'})
              }
          })
          .catch(next)
    }

    static findByUser ({query, decoded}, res, next) {
        let q = {userId : decoded.id}
        if(query && query.title) {
            q,title = new RegExp(query.title, 'i')
        }
        Article
          .find(q)
          .then(articles => {
              res.status(200).json(articles)
          })
          .catch(next)
    }

    static createArticle( {file, body, decoded} , res, next) {
        body.userId = decoded.id
        body.featured_image = file
        Article
          .create( {... body} )
          .then((articles) => {
              res.status(201).json(articles)
          })
          .catch(next)
    }

    static deleteArticle ( {params} , res, next) {
        Article
          .findOneAndDelete({_id : params.id})
          .then((articles) => {
              if(articles) {
                res.status(200).json(articles)
              } else {
                  res.status(404).json({message : 'Artilce not found'})
              }
          })
          .catch(next)
    }

    static updateArtilce ({}, res, next) {
        Article
        .findByIdAndUpdate({_id : params.id}, {... body}, Option)
        .then((articles) => {
            if(articles.userId != body.userId){
                res.status(200)
            } 
            if(articles) {
                res.status(200).json(articles)
            } else {
                res.status(404).json({message : 'Article not found'})
            }
        })
        .catch(next)
    }

}

module.exports = ArticleController