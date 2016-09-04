module.exports = {
  development: {
    url: 'bookmarks', // database name
    database: 'bookmarks',
    dialect: 'mysql',
    username: 'root',
    password: 'root',
    port: 3306
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'mysql'
  },
  staging: {
    url: process.env.DATABASE_URL,
    dialect: 'mysql'
  },
  test: {
    url: process.env.DATABASE_URL || '',
    dialect: 'mysql'
  }
};