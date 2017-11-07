module.exports = function(sequelize, DataTypes) {
    var Merchtbl = sequelize.define("merchtbl", {
    userid: {
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING,
      allownull: false
    },
    description: {
      type: DataTypes.STRING
    },
    photolink: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.INTEGER
    },
    category: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: false
  });
  
  Merchtbl.associate = function(models) {
    Merchtbl.belongsTo(models.usertbl, {
      foreignKey: {
        allowNull: false
      }
    }),
        Merchtbl.belongsTo(models.categorytbl, {
            foreignKey: {
                allowNull: false
            }
        })
    } 
  return Merchtbl;
};
