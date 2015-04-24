var express = require('express');
var router = express.Router();

router.get('/posts', 
			function (req, res) 
			{
				req.connection.query('select count(*) AS solution from world.country ', 
					function(err, rows, fields) 
					{
						if (err) throw err;

						console.log('The solution is: ', rows[0].solution);
						res.json({coolNumber: rows[0].solution});
					});
				
				/*
				var db = req.db;
				var collection = db.get('games');
				collection.find({},{},function(e,docs){
					console.log(docs);
					res.json({coolNumber: docs.length});
					
				});*/
			}
);

module.exports = router;