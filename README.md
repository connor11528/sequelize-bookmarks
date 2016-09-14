# Sequelize bookmarks application

A Javascript (Node.js) application with a MySQL database.

![](http://docs.sequelizejs.com/en/v3/images/logo-small.png)
![](https://pbs.twimg.com/profile_images/713496146790977536/tZowsPX9.jpg)
![](https://avatars0.githubusercontent.com/webpack?&s=256)

## Models

There are two database models, **Author** and **Book**. Each is represented by a MySQL table.

### Author

- name:string

- bio:text

*Has Many Books*

### Book

- name:string

- isbn:integer

- publication_date:date

- description:text

- author_id:integer

## API Endpoints

All responses will be in JSON format.

| Method      | URL         | Description  |
| ------------- |-------------| -----|
| GET     | **/authors** | get all the authors and all the books associated with all the authors |
| GET | **/authors/:id** | get an author by id and also get all the books associated with that author |
| POST | **/authors** | create a new author (name:string, bio:text) |
| PUT | **/authors** | update a new author (name:string, bio:text) |
| DELETE | **/authors** | delete author by passing given id field. Also deletes all books associated with that author |
| GET | **/books** | get all the books |
| GET | **/books/:id** | get a single book by passing id to params |
| POST | **/books** | create a new book (name:string, isbn:integer, publication_date:date, description:text, author_id:integer)|
| DELETE | **/books** | delete a book by passing id to params |

## Getting started

First clone the repo and change directories into it.

Workflow is run `webpack` to build out client side and `node index` or `npm start` to fire up the server. The app will run on **localhost:8000**

The webpack command will compile the javascripts and Vue templates into bundle.js that is in turn called by index.html. The next command will start the server and server index.html to the browser.

## Sequelize Notes

Below are some helper commands to get started and work around Sequelize and SQL databases with Javascript.

Define a model and migration in one command with [Sequelize CLI](https://github.com/sequelize/cli):

```
$ sequelize model:create --name=Author --attributes name:string,bio:text --underscored
```

Run migrations (creates tables): 

```
$ sequelize db:migrate
```

### MySQL helper commands
Log in to MySQL with password:

```
$ mysql -u root -p
```
**Note to self:** login creds are root/root for local machine

Reset the password if it needs updating:

```
mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY 'myNewPassword'
```

Create new user and give them all privileges:

```
mysql> CREATE USER 'admin'@'localhost';
Query OK, 0 rows affected (0.01 sec)

mysql> GRANT ALL PRIVILEGES ON *.* TO 'admin'@'localhost';
Query OK, 0 rows affected (0.01 sec)
```

Create a MySQL database:

```
CREATE DATABASE bookmarks;
```

Winning formula for database connection is: 
```
new Sequelize('database_name', 'database_user', 'database_password', config);
```
