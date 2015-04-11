var express = require('express');
var router = express.Router();

/* GET Game list page. */
router.get('/', function(req, res) {
    
	var db = req.db;
    var collection = db.get('games');
    collection.find({},{},function(e,docs){
        res.render('game', {
            "gamelist" : docs
        });
    });
});

router.post('/', function(req, res) {
    
	var db = req.db;
    var collection = db.get('games');
    collection.insert({ playerA: '123', playerB: '234' }, function (err, doc) {
        res.render('game', {
            "gamelist" : doc
        });
    });
});



module.exports = router;
