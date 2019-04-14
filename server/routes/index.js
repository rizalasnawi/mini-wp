const router = require('express').Router();
const article = require('./articleroute');
const user = require('./userroute');
const signin = require('./signin');

router.use('/article', article);
router.use('/user', user);
router.use('/signin', signin);


module.exports = router