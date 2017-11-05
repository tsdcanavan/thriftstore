// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

module.exports = function(thrifttbls) {
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

// Syncs with DB
Usertbl.sync();
Credittbl.sync();
Categorytbl.sync();
Merchtbl.sync();

};
