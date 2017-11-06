module.exports = function(sequelize, DataTypes) {
    var Merchtbl = sequelize.define("merchtbl", {
    userid: {
      type: Sequelize.INTEGER
    },
    title: {
      type: Sequelize.STRING,
      allownull: false
    },
    description: {
      type: Sequelize.STRING
    },
    photolink: {
      type: Sequelize.STRING
    },
    price: {
      type: Sequelize.INTEGER
    },
    category: {
      type: Sequelize.STRING
    }
  }, {
    timestamps: false
  });
  
  Merchtbl.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Merchtbl.belongsTo(models.Usertbl, {
      foreignKey: {
        allowNull: false
      }
    }),
        Merchtbl.belongsTo(models.Categorytbl, {
            foreignKey: {
                allowNull: false
            }
        })
    }
}; 
  return Credittbl;
});
