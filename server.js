var express = require("express");
var app = express();
var logger = require("morgan");
var server = require("node-http-server");

var PORT = process.env.PORT || 3000;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/views/home.html");
});

app.use("/js", express.static("public/js"));

app.use(express.static("public"));

app.use(express.static("images"));

app.get("/userIDs/:folderName", function(req, res) {
  matchapi.halberdtechnologies.search(req.params.folderName, function(err, folders) {
    console.log(folders);
    var firstFolder = folders[0];

    res.send(JSON.stringify(firstFolder));
  });
});

app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});