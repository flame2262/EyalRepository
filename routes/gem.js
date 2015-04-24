var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('gem', { title: 'This is from routes gem.js' });
});

//app.get('/gem', function(req, res) {
//    res.render('gem', { title: 'Hello, World!' })
//});

module.exports = router;
