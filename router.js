var express = require('express');
var app = express();

//respond with "hello world" when a get request is made
app.get('/', function(req, res) {
  res.send('hello world');
});

app.post('/', function(req, res) {
  res.send('POST');
});