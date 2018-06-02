// Import MySQL connection.
var connection = require("./connection.js");

var orm = {
  all: function(tableInput, cb){
    connection.query('SELECT * FROM Scores ORDER by score DESC, ts ASC LIMIT 10', function(err,
      result){
      if(err) throw err;
      cb(result)
    })
  },

}

module.exports = orm;
