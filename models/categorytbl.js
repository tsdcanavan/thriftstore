module.exports = function(sequelize, DataTypes) {
    var Categorytbl = sequelize.define("categorytbl", {
    primarycat: {
      type: DataTypes.STRING,
      allownull: false
    },
    secondarycat: {
      type: DataTypes.STRING
    },
    tertiarycat: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: false
  });

  Categorytbl.associate = function(models) {
    Categorytbl.hasMany(models.merchtbl, {
      onDelete: "cascade"
    });
    };
  

  return Categorytbl;
};