var models = require('./server/models/');
models.sequelize
  .authenticate()
  .then(function() {
    console.log('Connection successful');
  })
  .catch(function(error) {
    console.log("Error creating connection:", error);
  });