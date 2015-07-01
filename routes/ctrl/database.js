exports.cloudant = function() {
	var cradle = require('cradle');
	var db = new (cradle.Connection)("jaquelton.cloudant.com", {
		auth:{username:"jaquelton", password:"sarcasm7412335"}
	}).database('nodeblog');

	this.getTitleById = function (id, getTitleByIdCallBack){
		db.get(id, getTitleByIdCallBack);
	};

	this.getView = function (vw, getViewCallBack){
		db.view(vw, getViewCallBack);
	};

	function guid() {
  		function s4() {
    		return Math.floor((1 + Math.random()) * 0x10000)
      			.toString(16)
      			.substring(1);
		  	}
  			return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    			s4() + '-' + s4() + s4() + s4();
	};

	var uuid = guid();

	this.postArticle = function (judul, isi) {
		db.save(uuid, {
			title: judul,
			isi: isi,
			rating: 0,
			date: Date.now()
		});
	};
};


