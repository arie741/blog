exports.postpage = function(req, res, next) {
	res.render('post', { title: 'Post Your Article!' });
};