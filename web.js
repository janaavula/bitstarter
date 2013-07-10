var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
var fs = require ('fs');
var buffer = new buffer ();
  response.send(buffer.tostring('utc 8', fs.readfileSync("index.html")));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
