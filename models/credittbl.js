module.exports = function(sequelize, DataTypes) {
var Credittbl = sequelize.define("credittbl", {
    userid: {
      type: DataTypes.INTEGER
    },
    ccnumber: {
      type: DataTypes.BIGINT
    },
    ccexp: {
      type: DataTypes.INTEGER
    },
    cccode: {
      type: DataTypes.INTEGER
    },
    ccname: {
      type: DataTypes.STRING,
      allownull: false
    },
    cczip: {
      type: DataTypes.STRING,
      allownull: false
    }
  }, {
    timestamps: false
  });

    Credittbl.associate = function(models) {
      Credittbl.belongsTo(models.usertbl, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Credittbl;
  };
  