// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    if (req.user) {
        res.redirect("/api/merch")
    }
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
       
    if (req.user) {
      res.json("/user/:id");
    }else{
    res.sendFile(path.join(__dirname, "../public/auth.html"));
    }
    
  });


  app.get("/api/signup", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/user/:id");
    }
    res.sendFile(path.join(__dirname, "../public/auth.html"));
  });


  

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/checkout", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/checkout.html"));
  });

//getting the oder page
  app.get("/order", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/order.html"));
  });


  //user's page
  // app.get("/user/:id", isAuthenticated, function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/userpage.html"));
  // });

  //adding a new merch
  app.get("/api/merch", function(){
    res.sendFile(path.join(__dirname, "../public/addupdate.html"));
  });

};
