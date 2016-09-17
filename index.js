
var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	methodOverride = require('method-override'),
	authors = require('./server/controllers/authors'),
	books = require('./server/controllers/books');

// express config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));
app.set('port', process.env.PORT || 8000);

// authors routes
app.get('/authors', authors.index);
app.get('/authors/:id', authors.show);
app.post('/authors', authors.create);
app.put('/authors', authors.update);
app.delete('/authors', authors.delete);

// books routes
app.get('/books', books.index);
app.get('/books/:id', books.show);
app.post('/books', books.create);
app.delete('/books', books.delete);

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