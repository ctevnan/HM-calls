var express = require("express");
var app = express();
var logger = require("morgan");
/*var formidable = require("formidable");
var http = require("http");
var util = require("util");
var fs = require("fs-extra"); //file system- needed for renaming file
var path = require("path"); //used for file path
var textBody = require("body");
var jsonBody = require("body/json");
var formBody = require("body/form");
var anyBody = require("body/any");
var sendJson = require("send-data/json");
var mongojs = require("mongojs");
var mongoose = require("mongoose");
var db = mongojs('apicallsdb', ['mycollection']);*/
var server = require("node-http-server");

var PORT = process.env.PORT || 3000;

/*mongoose.connect('mongodb://localhost/apicallsdb');*/
/*
http.createServer(function (req, res) {
  if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
  //parse a file upload  
  var form = new formidable.IncomingForm();
  
  form.uploadDir = "C:/Users/Carolyn/apiCalls/uploadDir"; //set upload dir
  form.parse(req, function (err, fields, files) {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.write('Received upload:\n\n');
    res.end(util.inspect({fields: fields, files: files}));
  });

  form.on('progress', function (bytesRecieved, bytesExpected) {
    var percent_complete = (bytesRecieved / bytesExpected) * 100;
    console.log(percent_complete.toFixed(2));
  });
  
  form.on('end', function (fields, files) {
    //temp location of our uploaded file
    var temp_path = this.openedFiles[0].path;
    //file name of the uploaded file
    var file_name = this.openedFiles[0].name;
    //location where we want to copy the uploaded file
    var new_location = 'C:/Users/Carolyn/apiCalls/uploadDir';

    fs.copy(temp_path, new_location + file_name, function(err) {
      if (err) {
        console.error(err);
      } else {
        console.log("success!");
      }
    });
  });

  return;
}*/
  
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static('public'));

app.use(express.static('images'));

app.use("/js", express.static("public/js"));

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/views/home.html");
});

app.get('/userIDs/:folderName', function(req, res) {
  matchapi.halberdtechnologies.search(req.params.folderName, function(err, folders) {
    console.log(folders);
    var firstFolder = folders[0];

    res.send(JSON.stringify(firstFolder));
  });
});

function setHeaders (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
};

app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});