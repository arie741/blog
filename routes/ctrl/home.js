exports.index = function(req, res) {

	function view(vw) {
		cl = new database.cloudant();
		cl.getView ( vw , function(err, doc) {
			var dat = doc;
			render(dat.reverse());
		});
	};

	function render(dt){
		res.render('index', { title: 'Zenblog', docontents: dt })
	};

	view('rating/rating');
};