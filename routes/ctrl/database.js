exports.cloudant = function() {
	var cradle = require('cradle');
	var db = new (cradle.Connection)("jaquelton.cloudant.com", {
		auth:{username:"jaquelton", password:"sarcasm7412335"}
	}).database('zenblog');

	this.getTitleById = function (id, getTitleByIdCallBack){
		db.get(id, getTitleByIdCallBack);
	};
};


