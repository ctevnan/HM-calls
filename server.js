var express = require('express');
var app = express();
var logger = require('morgan');
var formidable = require("formidable");
var path = require('path'); //used for file path
var fs = require('fs-extra'); //file system- needed for renaming file
var http = require('http');
var textBody = require("body");
var jsonBody = require("body/json");
var formBody = require("body/form");
var anyBody = require("body/any");
var sendJson = require("send-data/json");

var PORT = 8080;

http.createServer(function handleRequest(req, res) {
  function send(err, body) {
    sendJson(req, res, body)
  }
  if (req.url === "/body") {
    //all functions cann be called with (req, cb)
    textBody(req, send)
  } else if (req.url === "/form") {
    //all funct can be called w (req, opts, cb)
    formBody(req, {}, send)
  } else if (req.url === "/json") {
    //all funct can be called w (req, res, cb)
    jsonBody(req, res, send)
  } else if (req.url === "/any") {
    //all funct can be called w (req, res, opts, cb)
    anyBody(req, res, {}, send)
  }
})

//body parses the request body and returns it in the cb. jsonBody and formBody
//call json.parse and querystring.parse resp. on the body. anyBody will detect
//the content type of the req and use the approp body method

app.use(express.static(path.join(__dirname, 'public')));

var form = new formidable.IncomingForm();
//formidable uploads to OS's tmp dir by default
form.uploadDir = "./img"; //set upload dir
form.keepExtensions = true; //keep file extension

/*form.parse(function(err, fields, files) {
  res.writeHead(200, {'content-type': 'text/plain'});
  res.write('recieved upload: \n\n');
  console.log("form.bytesReceived");
  //for testing
  console.log("file size: "+JSON.stringify(files.fileUploaded.size));
  console.log("file path: "+JSON.stringify(files.fileUploaded.path));
  console.log("file name: "+JSON.stringify(files.fileUploaded.name));
  console.log("file type: "+JSON.stringify(files.fileUploaded.type));
  console.log("lastModifiedDate: "+JSON.stringify(files.fileUploaded.lastModifiedDate));*/

  //formidable changes name of uploaded file
  //rename file
  fs.rename(files.fileUploaded.path, './img/'+files.fileUploaded.name, function (err) {
    if (err)
      throw err;
    console.log('rename complete');
  });
  res.end();
});

/*var server = http.createServer(function (req, res) {
  if (req.method.toLowerCase() == 'get') {
    displayForm(res);
  } else if (req.method.toLowerCase() == 'post') {
    processFormFieldsIndividual(req, res);
  }
});*/

function displayForm(res) {
  fs.readFile('./views/layouts/form.html', function (err, data) {
    res.writeHead(200, {
      'Content-Type': 'text/html',
        'Content-Length': data.length
    });
    res.write(data);
    res.end();
  });
}

function processAllFieldsOfTheForm(req, res) {
  var form = new formidable.IncomingForm();

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

function processFormFieldsIndividual(req, res) {
  //store data from the fields in data store ie file/db
  var fields = [];
  var form = new formidable.IncomingForm();
  form.on('field', function (field, value) {
    console.log('field');
    console.log('value');
    fields[field] = value;
  });
  //bc when ea file in form is parsed
  form.on('file', function (name, file) {
    console.log(name);
    console.log(file);
    fields[name] = file; //storing the files meta in fields array
  });
  //db for file upload progress
  form.on('progress', function (bytesRecieved, bytesExpected) {
    var progress = {
      type: 'progress',
      bytesRecieved: bytesRecieved,
      bytesExpected: bytesExpected
    };
    console.log(progress); //logging progress in console.
  });
  //cb at the end of the form
  form.on('end', function() {
    res.writeHead(200, {
      'content-type': 'text/plain'
    });
    res.write('recieved the data:\n\n');
    res.end(util.inspect({
      fields: fields
    }));
  });
  form.parse(req);
}

function setHeaders (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
};

/*app.use(express.static('public'));*/

/*app.use(express.static('images'));*/

/*app.use("/js", express.static("public/js"));*/

//to get /style.css
/*app.use('/static', express.static(__dirname + '/public'));*/

/*app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/public/index.html");
});

app.post("/", function(req, res) {
  res.sendFile(process.cwd() + "/public/index.html");
});

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/layouts/form.html");
});

app.post("/", function(req, res) {
  res.sendFile(process.cwd() + "/layouts/form.html");
});
*/
app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
;