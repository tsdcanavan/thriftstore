var path = require("path");
var db = require("../models");

module.exports = function(app) {
	app.get("/api/search/all", function(req, res) {

		db.Merchtbls.findAll({
			include: [db.Merchtbls]
		}).then(function(dbItems) {
			res.json(dbItems);
		});
	});


	app.get("/api/search/item", function(req, res) {

		db.Merchtbls.findOne({
			where: {
				id: req.params.id
			},
			include: [db.Merchtbls]
		}).then(function(dbItems) {
			res.json(dbItems);
		});
	});

	app.get("/api/search/user", function(req, res) {

		db.Merchtbls.findAll({
			where: {
				id: req.params.id
			},
			include: [db.Merchtbls]
		}).then(function(dbItems) {
			res.json(dbItems);
		});
	};
}