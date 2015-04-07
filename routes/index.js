var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Zenblog' });
});

router.get('/test', function(req, res, next) {
	res.render('test', { testa: 'Tasdadas'});
});

module.exports = router;
