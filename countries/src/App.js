import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Simple Country Application',
      countries: []
    };
  }

  componentDidMount() {
    console.log('COMPONENT HAS MONTED');
    const that = this;
    fetch('http://localhost:3000/api/countries').then(response => {
      response.json().then(data => {
        that.setState({
          countries: data
        });
      });
    });
  }

  addCountry(event) {
    const that = this;

    event.preventDefault();
    let country_data = {
      id: Math.random().toFixed(3),
      country_name: this.refs.country_name.value,
      continent_name: this.refs.continent_name.value
    };

    const request = new Request('http://localhost:3000/api/new-country', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(country_data)
    });

    let countries = that.state.countries;
    countries.push(country_data);
    that.setState({
      countries
    });

    fetch(request)
      .then(response => {
        response.json().then(data => {});
      })
      .catch(err => {
        console.log(err);
      });
  }

  removeCountry(id) {
    const that = this;
    const countries = this.state.countries;
    let country = countries.find(country => {
      return country.id === id;
    });

    const request = new Request('http://localhost:3000/api/remove/' + id, {
      method: 'DELETE'
    });

    fetch(request).then(response => {
      countries.splice(countries.indexOf(country), 1);
      that.setState({
        countries
      });
      response.json().then(data => {
        console.log(data);
      });
    });
  }

  render() {
    let title = this.state.title;
    let countries = this.state.countries;

    return (
      <div className="App">
        <h1>{title}</h1>
        <form ref="contryForm">
          <input type="text" ref="country_name" placeholder="country_name" />
          <input
            type="text"
            ref="continent_name"
            placeholder="continent name"
          />
          <button onClick={this.addCountry.bind(this)}>Add Country</button>
        </form>
        <ul>
          {countries.map(country => (
            <li key={country.id}>
              {country.country_name} {country.continent_name}{' '}
              <button onClick={this.removeCountry.bind(this, country.id)}>
                {' '}
                Remove
              </button>{' '}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
