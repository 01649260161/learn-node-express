var express = require('express');

var controller = require('../controllers/user.controller');

var router = express.Router();

router.get('/', controller.index)
router.get('/search', controller.search)
router.get('/create', controller.create)
router.post('/create', controller.Postcreate)
router.get('/:user_id', controller.view)

module.exports = router;