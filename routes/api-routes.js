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
  app.get("/api/user/:id", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Merchtbl.findAll({}, {
      where: {
        userid: req.param.id
      }
    }).then(function(dbMerchtbl) {
      // We have access to the list as an argument inside of the callback function
      console.log(dbMerchtbl);
      res.json("userpage", dbMerchtbl);
    });

  });
}
