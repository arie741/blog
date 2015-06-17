exports.acpost = function(req, res) {
	function postart(judul, isi) {
		cl = new database.cloudant();
		cl.postArticle ( judul , isi);
	};
	postart(req.body.judul, req.body.isi);
	
	res.render('viewer', { view: 'Posted: ' + req.body.isi });
};