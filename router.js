var express = require('express');
var app = express();
var fs = require('fs-plus');

//respond with "hello world" when a get request is made
app.get('/', function(req, res) {
  res.send('hello world');
});

app.post('/file-upload', function(req, res, next) {
  console.log(req.body);
  console.log(req.files);
});

app.post('/file-upload', function(req, res) {
  //get temp location of file
  var tmp_path = req.files.thumbnail.path;
  //setting where the file should exist(images dir)
  var target_path = './public/images/' + req.files.thumbnail.name;
  //move file from temp locaation to intended location
  fs.rename(tmp_path, target_path, function(err) {
    if (err) throw err;
    //del temp file so it doesnt fill with unwanted files
    fs.unlink(tmp_path, function() {
      if(err) throw err;
      res.send('File uploaded to: ' + target_path + ' - ' + req.files.thumbnail.size + ' bytes');
    });
  });
};