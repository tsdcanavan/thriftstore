var path = require("path");
var db = require("../models");


module.exports = function(app) {
	app.get("/api/item", function(req, res) {

		db.Merchtbls.findAll({
			include: [db.Merchtbls]
		}).then(function(dbItems) {
			res.json(dbItems);
		});
	});

	app.get("/api/item/:id", function(req,res) {

		db.Merchtbls.findOne({
			where: {
				id: req.params.id
			},
			include: [db.Merchtbls]
		}).then(function(dbItems) {
			res.json(dbItems);
		});
	});
}