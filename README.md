# [YouTube, Theodore Anderson] ReactJS and PostgreSQL: Full Stack Application [ENG, 2017]

Project Updatable.

**[YouTube]**  
https://www.youtube.com/watch?v=2oAS7MtMwqA

---

I am working on ubuntu 18.04.1

    $ npm install -g npx
    $ npx create-react-app countries

    $ mkdir pg-api && cd pg-api
    $ npm init -y
    $ touch server.js
    $ npm install --save body-parser morgan pg express cors

<br/>

### PostgreSQL

    # su - postgres
    $ psql
    postgres=# create database countriesdb;
    CREATE DATABASE

    postgres=# \c countriesdb;
    You are now connected to database "countries" as user "postgres".

<br/>

**UPD: I deceided use free postgres cloud service by elephantsql.com**

(Do not want install postgresql locally)

<br/>

    CREATE TABLE countries (
        id numeric primary key,
        country_name varchar NOT NULL,
        continent_name varchar NOT NULL
    );

    INSERT INTO countries (id, country_name, continent_name) VALUES(1, 'Italy', 'Europe');
    INSERT INTO countries (id, country_name, continent_name) VALUES(2, 'Germany', 'Europe');

<br/>

    # SELECT * from countries;

    id | country_name | continent_name
    ----+--------------+----------------
    1 | Italy | Europe
    2 | Germany | Europe
    (2 rows)

<br/>

    $ node server.js

<br/>

![Application](/img/pic1.png?raw=true)

Time: ~ 27:30

<br/>

![Application](/img/pic2.png?raw=true)

Time: ~ 53:00

<br/>

![Application](/img/pic3.png?raw=true)

The End

---

**Marley**

<a href="https://labs.jsdev.org">labs.jsdev.org</a>
