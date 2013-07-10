var express = require('express');
var fs = require('fs');

var app = express();

var buf = fs.readFileSync("index.html", "utf-8");
var json = JSON.stringify(buf);

app.get('/', function(request, response) {
  response.send(json);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});