const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const pg = require('pg');
const PORT = 3000;

const pool = new pg.Pool({
  host: 'localhost',
  port: 5432,
  max: 10,
  database: 'countriesdb',
  user: 'postgres',
  password: 'myPass'
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

app.get('/api/countries', (req, res) => {
  pool.connect((err, db, done) => {
    if (err) {
      return res.status(400).send(err);
    }

    db.query('SELECT * from countries', (err, table) => {
      done();
      if (err) {
        return res.status(400).send(err);
      }
      return res.status(200).send(table.rows);
    })

  });
});

app.post('/api/new-country', (req, res) => {
  console.log(req.body);
  const id = req.body.id;
  const country_name = req.body.country_name;
  const continent_name = req.body.continent_name;

  let values = [id, country_name, continent_name];

  pool.connect((err, db, done) => {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }

    db.query('INSERT INTO countries (id, country_name, continent_name) VALUES($1, $2, $3)', [...values], (err) => {
      if (err) {
        console.log(err);
        return res.status(400).send(err);
      }

      console.log('INSERTED DATA SUCCESS');
      db.end();
      res.status(201).send({ message: 'Data inserted!' });

    })
  });
});


app.listen(PORT, () => console.log('Listening on port ' + PORT))