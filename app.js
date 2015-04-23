var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// New Code
var mongo = require('mongodb');
var monk = require('monk');
//var db = monk('localhost:27017/nodetest1');


//MY SQL
var db      = require('mysql');
var connection = db.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1234567'
});




var x= 8;

//var routes = require('./routes/index');
//var game = require('./routes/game');
//var gameapi = require('./routes/gameapi');
//var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});

app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.get('/gem', function(req, res) {
    res.render('gem', { title: 'Hello, World!' })
});

app.get('/api/posts', 
			function (req, res) 
			{
				connection.connect();

				connection.query('SELECT 25 + 25 AS solution', 
					function(err, rows, fields) 
					{
						if (err) throw err;

						console.log('The solution is: ', rows[0].solution);
						res.json({coolNumber: rows[0].solution});
					});
				
				connection.end();
				
				/*
				var db = req.db;
				var collection = db.get('games');
				collection.find({},{},function(e,docs){
					console.log(docs);
					res.json({coolNumber: docs.length});
					
				});*/
			}
);


//app.use('/', routes);
//app.use('/users', users);
//app.use('/game', game);
//app.use('/gameapi', gameapi);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
