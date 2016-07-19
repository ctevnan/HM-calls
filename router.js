var express = require('express');
var router = express.Router();

/* get homepage */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/upload', function(req, res) {
  console.log('req.files');
});

module.exports = router;