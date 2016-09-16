var express = require("express");
var app = express();
var logger = require("morgan");
var server = require("node-http-server");
var formidable = require("formidable");
var http = require("http");
var util = require("util");

var PORT = process.env.PORT || 3000;

app.post('/upload', function(req, res, next){
  res.send(req.files.file.path);
});
http.createServer(function(req, res) {
  if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
    //parse file upload
    var form = new formidable.IncomingForm();

    form.parse(req, function(err, fields, files) {
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received upload:\n\n');
      res.end(util.inspect({fields: fields, files: files}));
    });
    return;
  }
  //show file upload form
  res.writeHead(200, {'content-type':'text/html'});
  res.end(
    '<form action="/upload" enctype="multipart/form-data" method="post">'+
    '<input type="text" name="title"><br>'+
    '<input type="file" name="upload" multiple="multiple"><br>'+
    '<input type="submit" value="Upload">'+
    '</form>'
  );
}).listen(3000, '127.0.0.1');

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

function setHeaders (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
};

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