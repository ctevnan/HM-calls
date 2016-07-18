var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' }); //parses multipart/ form-data
var app = express();
var morgan = require('morgan');
var fs = require('fs-plus');
var formidible = require("formidible");
var http = require('http');
var util = require('util');
var MultipartPoster = require('multipart-poster');
var myObj = eval( '(' + jsontext + ')'); //json output txt compiled
var PORT = process.env.PORT || 8080;

var server = http.createServer(function (req, res) {
  if (req.method.toLowerCase() == 'get') {
    displayForm(res);
  } else if (req.method.toLowerCase() == 'post') {
    processAllFieldsOfTheForm(req, res);
  }
});

function displayForm(res) {
  fs.readFile('form.html', function (err, data) {
    res.writeHead(200, {
      'Content-Type': 'text/html',
        'Content-Length': data.length
    });
    res.write(data);
    res.end();
  });
}

function processAllFieldsOfTheForm(req, res) {
  var form = new formidible.IncomingForm();

  form.parse(req, function (err, fields, files) {
    //store the data from the fields in data store
    res.writeHead(200, {
      'content-type': 'text/plain'
    });
    res.write('recieved the data:\n\n');
    res.end(util.inspect({
      fields: fields,
      files: files
    }));
  });
}

/*app.use[express.json(), express.urlecoded()]; //for json and urlencoded endpoint*/

app.post('/profile', upload.array(), function (req, res, next) {
  console.log(req.body);
  res.json(req.body);
});

app.post('/file-upload', function (req, res, next) {
  console.log(req.body);
  console.log(req.files);
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

app.post("/", function(req, res) {
  res.sendFile(process.cwd() + "/views/home.html");
});


app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});