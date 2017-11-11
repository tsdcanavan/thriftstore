var db = require("../models");

module.exports = function(app) {
  app.get("/api/credit", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.credittbls.findAll({
      include: [db.Post]
    }).then(function(dbCredit) {
      res.json(dbCredit);
    });
  });

  app.get("/api/credit/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Credit.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then(function(dbCredit) {
      res.json(dbCredit);
    });
  });

  app.post("/api/credit", function(req, res) {
    db.Credit.create(req.body).then(function(dbCredit) {
      res.json(dbCredit);
    });
  });

  app.delete("/api/credit/:id", function(req, res) {
    db.Credit.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbCredit) {
      res.json(dbCredit);
    });
  });

};
