import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Countries from './Countries';
import axios from 'axios';
import Total from './Total';
import About from './About';
import AboutCorona from './AboutCorona';
import Prevention from './Prevention';
import CountryData from './CountryData';

class App extends Component {
  state = {
    countries: [],
    country: [],
    loading: false,
  };

  getCountries = async () => {
    this.setState({ loading: true });

    const res = await axios.get('https://corona.lmao.ninja/countries');

    this.setState({
      countries: res.data.sort((a, b) => b.cases - a.cases),
      loading: false,
    });
  };

  //get single country data

  getCountryData = async (country) => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://corona.lmao.ninja/countries/${country}`
    );

    this.setState({ country: res.data, loading: false });
  };

  componentWillMount() {
    localStorage.getItem('countries') &&
      this.setState({
        countries: JSON.parse(localStorage.getItem('countries')),
        loading: false,
      });
  }

  async componentDidMount() {
    this.getCountries();
    this.getCountryData();
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('countries', JSON.stringify(nextState.countries));
    localStorage.setItem('country', JSON.stringify(nextState.country));
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route
              exact
              path='/'
              render={(props) => (
                <Fragment>
                  <Total />
                  <Countries
                    loading={this.state.loading}
                    countries={this.state.countries}
                  />
                </Fragment>
              )}
            />
            <Route exact path='/about' component={About} />
            <Route
              exact
              path='/country/:country'
              render={(props) => (
                <CountryData
                  {...props}
                  getCountryData={this.getCountryData}
                  country={this.state.country}
                  loading={this.state.loading}
                />
              )}
            />
            <Route exact path='/about-covid-19' component={AboutCorona} />
            <Route exact path='/prevention' component={Prevention} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
