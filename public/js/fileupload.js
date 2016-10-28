var express = require('express');
var busboy = require('connect-busboy');
app.use(busboy());

app.post("/img", function(req, res){
  req.busboy.on('file', function (fieldname, file, filename, encoding, mimetype){

  });
});