
var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	methodOverride = require('method-override'),
	router = express.Router(),
	authors = require('./server/controllers/authors'),
	books = require('./server/controllers/books');

// express config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));
app.set('port', process.env.PORT || 8000);

// define authors routes
router.get('/authors', authors.index);
router.get('/authors/:id', authors.show);
router.post('/authors', authors.create);
router.put('/authors', authors.update);
router.delete('/authors', authors.delete);

// define books routes
router.get('/books', books.index);
router.get('/books/:id', books.show);
router.post('/books', books.create);
router.delete('/books', books.delete);

// register api routes
app.use('/api', router);

// seed the database
require('./server/seeders')


app.listen(app.get('port'), function () {
  console.log("Server started on port", app.get('port'));
});







// Tests database connection
// var models = require('./server/models/');
// models.sequelize
//   .authenticate()
//   .then(function() {
//     console.log('Connection successful');
//   })
//   .catch(function(error) {
//     console.log("Error creating connection:", error);
//   });