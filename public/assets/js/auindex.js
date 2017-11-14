var LoginModalController = {
    tabsElementName: ".logmod__tabs li",
    tabElementName: ".logmod__tab",
    inputElementsName: ".logmod__form .input",
    hidePasswordName: ".hide-password",
    
    inputElements: null,
    tabsElement: null,
    tabElement: null,
    hidePassword: null,
    
    activeTab: null,
    tabSelection: 0, // 0 - first, 1 - second
    
    findElements: function () {
        var base = this;
        
        base.tabsElement = $(base.tabsElementName);
        base.tabElement = $(base.tabElementName);
        base.inputElements = $(base.inputElementsName);
        base.hidePassword = $(base.hidePasswordName);
        
        return base;
    },
    
    setState: function (state) {
    	var base = this,
            elem = null;
        
        if (!state) {
            state = 0;
        }
        
        if (base.tabsElement) {
        	elem = $(base.tabsElement[state]);
            elem.addClass("current");
            $("." + elem.attr("data-tabtar")).addClass("show");
        }
  
        return base;
    },
    
    getActiveTab: function () {
        var base = this;
        
        base.tabsElement.each(function (i, el) {
           if ($(el).hasClass("current")) {
               base.activeTab = $(el);
           }
        });
        
        return base;
    },
   
    addClickEvents: function () {
    	var base = this;
        
        base.hidePassword.on("click", function (e) {
            var $this = $(this),
                $pwInput = $this.prev("input");
            
            if ($pwInput.attr("type") == "password") {
                $pwInput.attr("type", "text");
                $this.text("Hide");
            } else {
                $pwInput.attr("type", "password");
                $this.text("Show");
            }
        });
 
        base.tabsElement.on("click", function (e) {
            var targetTab = $(this).attr("data-tabtar");
            
            e.preventDefault();
            base.activeTab.removeClass("current");
            base.activeTab = $(this);
            base.activeTab.addClass("current");
            
            base.tabElement.each(function (i, el) {
                el = $(el);
                el.removeClass("show");
                if (el.hasClass(targetTab)) {
                    el.addClass("show");
                }
            });
        });
        
        base.inputElements.find("label").on("click", function (e) {
           var $this = $(this),
               $input = $this.next("input");
            
            $input.focus();
        });
        
        return base;
    },
    
    initialize: function () {
        var base = this;
        
        base.findElements().setState().getActiveTab().addClickEvents();
    }
};

$(document).ready(function() {
    LoginModalController.initialize();
    var loginForm = $("form#login-form");
    var emailInput = $("input#login-email");
    var passwordInput = $("input#login-pw");
  
    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("submit", function(event) {
      event.preventDefault();
      var userData = {

        email: emailInput.val().trim(),
        password: passwordInput.val().trim()
      };
  
      console.log(userData);
      if (!userData.email || !userData.password) {
        return;
      }
  
      // If we have an email and password we run the loginUser function and clear the form
      loginUser(userData.email, userData.password);
      emailInput.val("");
      passwordInput.val("");
    });
  
    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginUser(email, password) {
      $.post("/login", {
        email: email,
        password: password
      }).then(function(data) {
        window.location.replace(data);
        // If there's an error, log the error
      }).catch(function(err) {
        console.log(err);
      });
    }


 // Getting references to our signup form and input
  var signUpForm = $("form#signup-form");
  var nameInput = $("input#user-name");
  var email2Input = $("input#user-email");
  var address1Input = $("input#user-address1");
  var address2Input = $("input#user-address2");
  var cityInput = $("input#user-city");
  var stateInput = $("input#user-state");
  var zipInput = $("input#user-zip");
  var password2Input = $("input#user-pw");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var user2Data = {
        username: nameInput.val().trim(),
        email: email2Input.val().trim(),
        address1: address1Input.val().trim(),
        address2: address2Input.val().trim(),
        city: cityInput.val().trim(),
        state: stateInput.val().trim(),
        zip: zipInput.val().trim(),
        password: password2Input.val().trim()
    };
    console.log(user2Data);

    if (!user2Data.email || !user2Data.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(user2Data.email, user2Data.password, user2Data.password, user2Data.address1, user2Data.address2, user2Data.city, user2Data.state, user2Data.zip);

    nameInput.val("");
    email2Input.val("");
    address1Input.val("");
    address2Input.val("");
    cityInput.val("");
    stateInput.val("");
    zipInput.val("");
    password2Input.val("");
  });

  // Does a post to the signup route. If succesful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password, username, address1, address2, city, state, zip) {
    $.post("/api/signup", {
      email: email,
      password: password,
      username: username,
      address1: address1,
      address2: address2,
      city: city,
      state: state,
      zip: zip
    }).then(function(data) {
      window.location.replace(data);
      // If there's an error, handle it by throwing up a boostrap alert
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }




















});