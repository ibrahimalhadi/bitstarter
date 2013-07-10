var express = require('express');

var app = express.createServer(express.logger());

var buf = fs.readFileSync("index.html");
var json = JSON.stringify(buf);

app.get('/', function(request, response) {
  response.send(json);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});