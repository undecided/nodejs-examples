var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test/:some_param', function(req, res, next) {
  res.render('index', { title: "Test: " + req.params.some_param });
});


module.exports = router;
