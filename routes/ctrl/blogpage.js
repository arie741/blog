exports.brender = function(req, res) {

	function getTitleByIdCallBack(err, doc) {
		// executed after cloudant's get finished
		dtitle = doc.title;
		disi = doc.isi;
		foo(dtitle, disi);
	};

	function foo(ttl, ct) {
		res.render('content', { title: ttl, content: ct } );
	};
	

	function render(id) {
		cl = new database.cloudant();
		cl.getTitleById ( id , getTitleByIdCallBack);
	};

	render(req.params.id);
};