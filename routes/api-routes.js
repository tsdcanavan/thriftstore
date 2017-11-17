// *****************************************************************************
// **** api-routes.js - this file offers a set of routes for displaying and
// saving data to the db
// ******************************************************************************
// *** Dependencies

// Requiring our models
var db = require("../models");

// Routes =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/user/:id", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.merchtbl.findAll({
      where: {
        userid: req.params.id
    },
    include: [{
      model: db.usertbl,
      required: false
    }]
  }).then(function(dbMerchtbl) {
    // console.log("user id from address bar " +req.params.id);
    // console.log("\n\n==========")
    // console.log(dbMerchtbl[0].usertbl.username);
    // console.log("==========\n\n")
    // console.log(dbMerchtbl)
    res.render('userpage', {merch:dbMerchtbl});
  })
  
});

// app.del("merch/:id", function(req,res) {
//   db.merchtbl.destroy()
// });
 };
