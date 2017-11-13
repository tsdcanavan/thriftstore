var path = require("path");
var db = require("../models");


module.exports = function(app) {


	app.get("/api/merch", function(req, res) {
		var query = {};
		if (req.query.merch_id) {
			query.id = req.query.merch_id;
		}

		db.Merchtbls.findAll({
			include: [db.Merchtbls],
			where: query
		}).then(function(dbMerch) {
			res.json(dbMerch);
		});
	});



	app.get("/api/posts/:id", function(req, res) {
   
	    db.Merch.findOne({
	      where: {
	        id: req.params.id
	      },
	      include: [db.Usertbls]
	    }).then(function(dbMerch) {
	      console.log(dbMerch);
	      res.json(dbMerch);
	    });
	  });




	 app.post("/api/merch", function(req, res) {
	    db.Merchtbls.create(req.body).then(function(dbMerch) {
	      res.json(dbMerch);
	    });
	  });


	app.delete("/api/Merch/:id", function(req, res) {
	    db.Merchtbls.destroy({
	      where: {
	        id: req.params.id
	      }
	    }).then(function(dbMerch) {
	      res.json(dbMerch);
	    });
	  });

  // PUT route for updating merch
  	app.put("/api/Merch", function(req, res) {
	    db.Merchtbls.update(
	      req.body,
	      {
	        where: {
	          id: req.body.id
	        }
	      }).then(function(dbMerch) {
	        res.json(dbMerch);
	      });
	  });




}