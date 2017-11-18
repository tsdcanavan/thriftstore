// *****************************************************************************
// **** api-routes.js - this file offers a set of routes for displaying and
// saving data to the db
// ******************************************************************************
// *** Dependencies

// Requiring our models
var db = require("../models");
var passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");

// Routes =============================================================
module.exports = function(app) {


  app.post("/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    console.log(res.body);
    //edit the members route to 
    res.json("/user/:id");
  });

  // GET route for getting all of the posts
  app.get("/api/merch", function(req, res) {
    var query = {};
    if (req.query.credit_id) {
      query.CreditId = req.query.credit_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.merchtbl.findAll({
      where: query,
      include: [db.Credit]
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // Get rotue for retrieving a single post
  app.get("/api/merch/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.merchtbl.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Credit]
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // POST route for saving a new post
  app.post("/api/merch", function(req, res) {
    db.merchtbl.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    }).then(function(){
      res.json("/user/:id");
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/merch/:id", function(req, res) {
    db.merchtbl.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // PUT route for updating posts
  app.put("/api/merch", function(req, res) {
    db.merchtbl.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbPost) {
        res.json(dbPost);
      });
  });

//Signup Rouote
  app.post("/api/signup", function(req, res) {
    
    db.usertbl.create({
      email: req.body.email,
      password: req.body.password,
      username: req.body.username,
      address1: req.body.address1,
      address2: req.body.address2,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip
    }).then(isAuthenticated, function() {
      // res.json(true)
      alert("Registration Successful. Please Login if you are not automatically redirected");
      res.json("/user/:id");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });




  // GET route for getting all of the merch
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
  }).then( function(dbMerchtbl) {
    // res.sendFile(path.join(__dirname, "../public/userpage.html"));
    console.log("user id from address bar " +req.params.id);
    console.log("\n\n==========")
    console.log(dbMerchtbl[0].usertbl.username);
    console.log("==========\n\n")
    console.log(dbMerchtbl)
    res.render('userpage', {merch:dbMerchtbl});
  })
  
});

// app.del("merch/:id", function(req,res) {
//   db.merchtbl.destroy()
// });
 };
