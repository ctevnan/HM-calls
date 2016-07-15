var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer(); //parses multipart/ form-data
var app = express();
var morgan = require('morgan');
var http = require('http');
var PORT = process.env.PORT || 8080;
var server = require('node-http-server');

app.use(bodyParser.json()); //parses application/json
app.use(bodyParser.urlencoded({ extended: true })); //parses application/x-www-form-urlencoded

app.post('/profile', upload.array(), function (req, res, next) {
  console.log(req.body);
  res.json(req.body);
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('public'));

app.use(express.static('images'));

app.use("/js", express.static("public/js"));

//to get /style.css
app.use('/static', express.static(__dirname + '/public'));

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/views/home.html");
});


app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});