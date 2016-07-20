var http = require("http");
var express = require('express');
var Router = require("routes-router");
var jsonBody = require("body/json");
var formBody = require("body/form");
//use body with generators. you must pass a cb
//async turns a generator into an async function taking a cb
var async= require("gens");

var app = Router({
  //add call. jsonBody err goes here
  errorHandler: function (req, res, err) {
    res.statusCode = 500
    res.end(err.message)
  }
})

app.addRoute("/json", async(function* (req, res) {
  //if jsonBody has an error it goes to the cb
  var body = yield jsonBody(req, res)

  res.setHeader("content-type", "application/json")
  res.end(Json.stringify(body))
}))

app.addRoute("/form", async(function* (req, res) {
  var body = yield formBody(req, res)

  res.setHeader("content-type", "application/json")
  res.end(JSON.stringify(body))
}))

/* get homepage */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/upload', function(req, res) {
  console.log('req.files');
});

module.exports = router;