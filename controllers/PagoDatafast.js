var https = require("https");
var querystring = require("querystring");

function request(callback) {

  var data = querystring.stringify({
    entityId: "8a829418533cf31d01533d06f2ee06fa",
    amount: "92.00",
    currency: "USD",
    paymentType: "DB"
  });
  var options = {
    host: "https://test.oppwa.com",
    port: 443,
    path: "/v1/checkouts",
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Content-Length": data.length,
      Authorization:
        "Bearer OGE4Mjk0MTg1MzNjZjMxZDAxNTMzZDA2ZmQwNDA3NDh8WHQ3RjIyUUVOWA=="
    }
  };
  var postRequest = https.request(options, function(res) {
    res.setEncoding("utf8");
    res.on("data", function(chunk) {
      jsonRes = JSON.parse(chunk);
      return callback(jsonRes);
    });
  });
  postRequest.write(data);
  postRequest.end();
}


module.exports = {
  Conexion: function(req_, res_, next_) {
    request(function(responseData) {
      res_.send(responseData);
      //console.log(responseData);
    });
  }
};
/**    var data = querystring.stringify({
      userId: "8a8294185a65bf5e015a6c8c728c0d95",
      password: "bfqGqwQ32X",
      entityId: "8ac7a4c766c57ba40166caa2e2db0b6b",
      mid: "1000000505",
      tip: "PD100406",
      amount: "92.00",
      currency: "USD",
      paymentType: "DB"
    }); */