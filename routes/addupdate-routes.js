var path = require("path");
var db = require("../models");


module.exports = function(app) {


  app.get("/add", function(req, res) {

    res.sendFile(path.join(__dirname, "../public/addupdate.html") );
    // var merch = {};
    // if (req.merch.body.userid) {
    //   merch.userId = req.merch.userid;
    // }
    
    // db.Post.findOne({
    //   include: [db.Merchtbls],
    //   where: merch
    // }).then(function(dbMerch) {
    //   res.json(dbMerch);
    // });
   
  });

  
  app.get("/update", function(req, res) {
    
    db.Post.findOne({
      where: {
        id: req.body.userid
      },
      include: [db.Merchtbls]
    }).then(function(dbMerch) {
      console.log(dbMerch);
      res.json(dbMerch);
    });
  });

  // POST route for saving a new merch
  app.post("/api/new", function(req, res) {
    db.Merch.create(req.body).then(function(dbMerch) {
      res.json(dbMerch);
    });
  });



  // PUT route for updating merch
  app.put("/api/update/:id", function(req, res) {
    db.Merch.update(
      req.body,
      {
        where: {
          id: req.body.userid
        }
      }).then(function(dbMerch) {
        res.json(dbMerch);
      });
  });
};