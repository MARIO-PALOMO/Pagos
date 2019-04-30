var Connection = require("tedious").Connection;
var config = require(".././database/database.js");
module.exports = {
  Conexion: function(req, res, next) {
    var connection = new Connection(config);
    connection.on("connect", function(err) {
      console.log("Connected");
    });
  }
};
