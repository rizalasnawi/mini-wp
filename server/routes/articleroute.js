const router = require('express').Router();
const articleController = require('../controller/articlecontroller')


router.get('/', articleController.allArticle);
router.get('/:id', articleController.getOneArticle);
router.post('/', articleController.createArticle);
router.delete('/', articleController.deleteArticle);

module.exports = router