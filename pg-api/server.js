const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const pg = require('pg');
const PORT = 3001;

const pool = new pg.Pool({
  host: 'localhost',
  port: 5432,
  max: 10,
  database: 'countriesdb',
  user: 'postgres',
  password: 'myPass'
});

pool.connect((err, db, done) => {
  if (err) {
    return console.log(err);
  }

  /*   const id = Math.random().toFixed(3);
    // const country_name = 'Spain';
    const country_name = 'Portugal';
    const continent_name = 'Europe';
  
  
    db.query('INSERT INTO countries (id, country_name, continent_name) VALUES($1, $2, $3)', [id, country_name, continent_name], (err) => {
      if (err) {
        return console.log(err);
      }
  
      console.log('INSERTED DATA SUCCESS');
      db.end();
  
    }) */

  db.query('SELECT * from countries', (err, table) => {
    if (err) {
      return console.log(err);
    }

    console.log(table.rows);

  })
});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.listen(PORT, () => console.log('Listening on port ' + PORT))