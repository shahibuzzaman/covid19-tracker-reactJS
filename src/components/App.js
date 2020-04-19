import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavItem from './Nav';
import Countries from './Countries';
import axios from 'axios';
import Total from './Total';
import About from './About';
import AboutCorona from './AboutCorona';
import Prevention from './Prevention';
import CountryData from './CountryData';
import MapContainer from './MapContainer';
import { Tab, Nav, Tabs, Container, Row, Col } from 'react-bootstrap';
import LocalData from './LocalData';

class App extends Component {
  state = {
    countries: [],
    country: [],
    loading: false,
  };

  getCountries = async () => {
    this.setState({ loading: true });

    const res = await axios.get('https://corona.lmao.ninja/v2/countries/');

    this.setState({
      countries: res.data.sort((a, b) => b.cases - a.cases),
      loading: false,
    });
  };

  //get single country data

  getCountryData = async (country) => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://corona.lmao.ninja/v2/countries/${country}`
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
          <NavItem />

          <Switch>
            <Route
              exact
              path='/'
              render={(props) => (
                <Fragment>
                  <Container fluid>
                    <Row>
                      <Col sm={3}>
                        <Total />
                      </Col>
                      <Col sm={9} style={{ marginTop: '70px' }}>
                        <Tab.Container defaultActiveKey='first'>
                          <Row>
                            <Col sm={3}></Col>
                            <Col sm={6}>
                              <Nav
                                fill
                                variant='pills'
                                defaultActiveKey='first'
                              >
                                <Nav.Item>
                                  <Nav.Link
                                    className='btn-info'
                                    eventKey='first'
                                  >
                                    Covid-19 Map
                                  </Nav.Link>
                                </Nav.Item>
                                <Nav.Item
                                  style={{
                                    marginLeft: '5px',
                                  }}
                                >
                                  <Nav.Link
                                    eventKey='second'
                                    className='btn-info'
                                  >
                                    All Countries
                                  </Nav.Link>
                                </Nav.Item>
                              </Nav>
                            </Col>
                            <Col sm={3}></Col>
                          </Row>

                          <Row>
                            <Col>
                              <Tab.Content
                                style={{
                                  marginLeft: '5px',
                                  marginRight: '5px',
                                }}
                              >
                                <Tab.Pane eventKey='first'>
                                  <MapContainer />
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>
                                  <Row>
                                    <Col>
                                      <Countries
                                        loading={this.state.loading}
                                        countries={this.state.countries}
                                      />
                                    </Col>
                                  </Row>
                                </Tab.Pane>
                              </Tab.Content>
                            </Col>
                          </Row>
                        </Tab.Container>
                      </Col>
                      {/* <Col xs='9'>
                        <Container responsive='true'>
                          <Row>
                            <Col className='themed-container'>
                              <Countries
                                loading={this.state.loading}
                                countries={this.state.countries}
                              />
                            </Col> */}
                      {/* </Row>
                        </Container> */}
                      {/* </Col> */}
                      {/* <Col xs='3'>
                        <SafetyTips />
                      </Col> */}
                    </Row>
                    <Row>
                      <Col></Col>
                    </Row>
                  </Container>
                  <LocalData />
                </Fragment>
              )}
            />
            <Route exact path='/about' component={About} />
            <Route
              exact
              path='/country/:country'
              render={(routeProps) => (
                <CountryData
                  {...routeProps}
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
