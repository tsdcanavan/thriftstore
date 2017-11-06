module.exports = function(sequelize, DataTypes) {
    var Categorytbl = sequelize.define("categorytbl", {
    primarycat: {
      type: Sequelize.STRING,
      allownull: false
    },
    secondarycat: {
      type: Sequelize.STRING
    },
    tertiarycat: {
      type: Sequelize.STRING
    }
  }, {
    timestamps: false
  });

  return Credittbl;
};