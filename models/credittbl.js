module.exports = function(sequelize, DataTypes) {
var Credittbl = sequelize.define("credittbl", {
    userid: {
      type: Sequelize.INTEGER
    },
    ccnumber: {
      type: Sequelize.BIGINT
    },
    ccexp: {
      type: Sequelize.INTEGER
    },
    cccode: {
      type: Sequelize.INTEGER
    },
    ccname: {
      type: Sequelize.STRING,
      allownull: false
    },
    cczip: {
      type: Sequelize.STRING,
      allownull: false
    }
  }, {
    timestamps: false
  });

    Credittbl.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Credittbl.belongsTo(models.Usertbl, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Credittbl;
  };
  