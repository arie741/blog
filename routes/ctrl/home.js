exports.index = function(req, res) {
	this.docontents = {1:'one',2:'two'};

	function view(vw) {
		cl = new database.cloudant();
		cl.getView ( vw , function(err, doc) {
			var dat = doc;
			render(dat[0]);
		});
	};

	function render(dt){
		res.render('index', { title: 'Zenblog', docontents: dt })
	};

	view('title/title');
};