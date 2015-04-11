var express = require('express');
var router = express.Router();

router.getNumOfPosts = 	function (req, res) 
				{
					res.json({numofpostsx: "77"});
				};

module.exports = router;
