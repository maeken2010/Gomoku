## Setup
Amon2とcartonを使います

```
$ cpanm Amon2 Carton
$ carton install
```

MySQLも使っています
```
$ brew install mysql
$ mysql -u root
mysql> create database gomoku;
mysql> quit;
$ mysql -uroot gomoku < ./sql/mysql.sql
```

起動してみましょう
```
$ carton exec perl -Ilib script/gomokuserver-server
```
