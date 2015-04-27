var express = require('express');
var router = express.Router();

router.get('/GetPhoneForAddress/:id', 
			function (req, res) 
			{
				var id = req.params.id;
				var command = 'SELECT phone AS phone from sakila.address WHERE address_id=' + id;
				console.log('api.js: ' + command);
				
				req.connection.query(command,
					function(err, rows, fields) 
					{
						if (err) throw err;
						
						var result = rows[0].phone;

						console.log('api.js address_id: ', result);
						res.json({coolNumber: result});
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

router.put('/UpdatePhoneForAddress/:id', 
			function (req, res) 
			{
				var id = req.params.id;
				var newPhoneNumber =  req.body.NewPhoneNumber;
				var command = 'UPDATE sakila.address SET phone = ' + newPhoneNumber + ' WHERE address_id=' + id;
				console.log('api.js: ' + command);
				
				req.connection.query(command, 
					function(err, rows, fields) 
					{
						if (err) throw err;

						var result = rows[0];
						
						console.log('The solution is: ', result);
						res.json(true);
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