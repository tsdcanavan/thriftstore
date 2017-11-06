  module.exports = function(sequelize, DataTypes) {
    // Create thriftstore tables DB
    var Usertbl = sequelize.define("usertbl", {
      username: {
        type: Sequelize.STRING,
        allownull: false
      },
      email: {
        type: Sequelize.STRING,
        allownull: false
      },
      address1: {
        type: Sequelize.STRING
      },
      address2: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      zip: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.PASSWORD,
        allownull: false
      },
      rating: {
        type: Sequelize.STRING
      }, 
      buyer: {
        type: Sequelize.BOOLEAN
      },
      seller: {
        type: Sequelize.BOOLEAN
      },
      admin: {
        type: Sequelize.BOOLEAN
      }
    }, {
      timestamps: false
    });
    
      return Usertbl;
    };
  