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
        type: DataTypes.BOOLEAN
      },
      seller: {
        type: DataTypes.BOOLEAN
      },
      admin: {
        type: DataTypes.BOOLEAN
      }
    }, {
      timestamps: false
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
  