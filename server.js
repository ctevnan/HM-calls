var express = require("express");
var app = express();
var logger = require("morgan");
var server = require("node-http-server");

var PORT = process.env.PORT || 4000;

Access-Control-Allow-Origin: *

app.use(express.static('public'));

app.use(express.static('images'));

app.use("/js", express.static("public/js"));

function setHeaders (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("GET,POST,OPTIONS,DELETE,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
};

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

app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});