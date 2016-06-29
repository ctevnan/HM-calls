var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var morgan = require('morgan');
var http = require('http');
var PORT = process.env.PORT || 3000;
var server = require('node-http-server');

app.use(bodyParser.urlencoded({ extended: false}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('public'));

app.use("/js", express.static("public/js"));

//to get /style.css
app.use('/static', express.static(__dirname + '/public'));

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/views/home.html");
});

app.get("/userID/:folderName", function(req, res) {
  matchapi.halberdtechnologies.search(req.params.folderName, function(err, folders) {
    console.log(folders);
    var firstFolder = folders[0];

    res.send(JSON.stringify(firstFolder));  
  });
});

app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});