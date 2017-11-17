
// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
    // Create thriftstore tables DB
    var Usertbl = sequelize.define("usertbl", {
      username: {
        type: DataTypes.STRING,
        allownull: false
      },
      email: {
        type: DataTypes.STRING,
        allownull: false
      },
      address1: {
        type: DataTypes.STRING
      },
      address2: {
        type: DataTypes.STRING
      },
      city: {
        type: DataTypes.STRING
      },
      state: {
        type: DataTypes.STRING
      },
      zip: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING,
        allownull: false
      },
      rating: {
        type: DataTypes.STRING
      }, 
      buyer: {
        type: DataTypes.BOOLEAN,
        default: 1
      },
      seller: {
        type: DataTypes.BOOLEAN,
        default: 0
      },
      admin: {
        type: DataTypes.BOOLEAN,
        default: 0
      }
    }, {
      timestamps: false
    });
    
    // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  Usertbl.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  Usertbl.hook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });


    Usertbl.associate = function(models) {
      Usertbl.hasMany(models.credittbl, {
        onDelete: "cascade"
        })
      };
    Usertbl.associate = function(models) {
        Usertbl.hasMany(models.merchtbl, {
          onDelete: "cascade"
          })
        };
      
     
      return Usertbl;
    };
  