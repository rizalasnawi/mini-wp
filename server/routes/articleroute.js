const article = require('express').Router();
const {ArticleController} = require('../controller');
const {Authentication} = require('../middleware/authentication');
const {Authorization} = require('../middleware/authorization');
const {multer} = require('../middleware/image');

article.use('/', Authentication);


article.get('/', ArticleController.findAll);
article.get('/:id', ArticleController.findOne);
article.get('/user', ArticleController.findByUser);

article.post('/', Authorization , multer.single('image'), ArticleController.createArticle);
article.delete('/:id', Authorization, ArticleController.deleteArticle);
article.put('/:id', Authorization, ArticleController.deleteArticle);

module.exports = article