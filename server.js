var http = require('http');

var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send("Hi All");
})

var server = http.createServer(app);

app.listen(3000);