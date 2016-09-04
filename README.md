# Sequelize bookmarks application

A Javascript (Node.js) application with a MySQL database.


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