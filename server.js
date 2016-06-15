var express = require('express');
var morgan = require('morgan');
var app = express();
var port = process.env.PORT || 3000;

app.use("/js", express.static("public/js"));

app.get("/", function(req,res) {
  res.sendFile(process.cwd() + "/views/home.html");
});

app.get('/name/:ngtableaddingpagination.PNG'), function(req, res) {
  matchapi.halberdtechnologies.search(req.params.ngtable adding pagination.PNG, function(err, name) {
    console.log(names);
  var firstName = names[0];

  res.send(JSON.stringify(firstName));  
  });
});

app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});