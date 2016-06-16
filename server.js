var express = require('express');
var morgan = require('morgan');
var app = express();
var PORT = process.env.PORT || 3000;
var server = require('node-http-server');

app.use("/js", express.static("public/js"));

app.get("/", function(req,res) {
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