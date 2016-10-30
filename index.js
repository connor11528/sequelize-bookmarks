const express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	methodOverride = require('method-override'),
	router = express.Router(),
	path = require('path'),
	authors = require('./server/controllers/authors'),
	books = require('./server/controllers/books');

// express config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(cookieParser());
app.set('port', process.env.PORT || 8000);

app.use(express.static(__dirname + '/public'));

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
require('./server/seeders');

// start server
app.listen(app.get('port'), function () {
  console.log("Server started on port", app.get('port'));
});

