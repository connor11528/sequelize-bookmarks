'use strict';
module.exports = function(sequelize, DataTypes) {
  var Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    isbn: DataTypes.INTEGER,
    publication_date: DataTypes.DATE,
    description: DataTypes.TEXT,
    author_id: DataTypes.INTEGER
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Book.belongsTo(models.Author, {});
      }
    }
  });
  return Book;
};