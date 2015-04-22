var express = require('express');
	home = require('./ctrl/home.js');
	homehot = require('./ctrl/homehot.js');
	homefresh = require('./ctrl/homefresh.js');
	postpage = require('./ctrl/post.js');
	blogpage = require('./ctrl/blogpage.js');
var router = express.Router();

/* GET home page. */
router.get('/', home.index);

router.get('/hot', homehot.index);

router.get('/fresh', homefresh.index);

router.get('/post', postpage.postpage);

router.get('/blog/:id', blogpage.blogpage);

module.exports = router;
