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
    $ npm install --save body-parser morgan pg express

<br/>

### PostgreSQL

    # su - postgres
    $ psql
    postgres=# create database countriesdb;
    CREATE DATABASE

    postgres=# \c countriesdb;
    You are now connected to database "countries" as user "postgres".

    CREATE TABLE countries (
        id numeric primary key,
        country_name varchar NOT NULL,
        continent_name varchar NOT NULL
    );


<br/>


    $ node server.js 

<br/>

![Application](/img/pic1.png?raw=true)


---

**Marley**

<a href="https://labs.jsdev.org">labs.jsdev.org</a>