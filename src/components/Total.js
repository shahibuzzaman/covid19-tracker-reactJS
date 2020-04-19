import React, { Component } from 'react';
import { Card, CardBody, Container, Row, Col } from 'reactstrap';
import Chart from 'react-google-charts';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import './Live.scss';

import NumberFormat from 'react-number-format';
import GlobalDailyData from './GlobalDailyData';

class Total extends Component {
  state = {
    all: [],
    loading: false,
  };

  getAll = async () => {
    this.setState({ loading: true });

    const res = await axios.get('https://corona.lmao.ninja/v2/all');

    this.setState({ all: res.data, loading: false });
  };

  componentWillMount() {
    localStorage.getItem('countries') &&
      this.setState({
        countries: JSON.parse(localStorage.getItem('countries')),
        loading: false,
      });
  }

  async componentDidMount() {
    this.getAll();
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('all', JSON.stringify(nextState.countries));
  }

  render() {
    return (
      <div style={{ marginTop: '70px' }}>
        <div
          className='livenow '
          style={{
            marginLeft: '-40px',
            marginTop: '-8px',
            backgroundColor: 'F00000',
          }}
        >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <h5 style={{ marginLeft: '20px', marginTop: '-4px' }}>LIVE</h5>
        </div>

        <div style={{ float: 'right' }}>
          <h5>
            <FontAwesomeIcon icon={faGlobe} /> COVID-19 Pandemic
          </h5>
        </div>
        <Container>
          <Row className='text-center' style={{ marginTop: '5px' }}>
            <Col sm={6}>
              <Card
                style={{
                  width: '150px',
                  height: '90px',
                  borderColor: '#0060B0',
                  marginLeft: '-10px',
                  textAlign: 'center',
                }}
                className='shadow-sm'
              >
                <CardBody>
                  <h5 style={{ marginTop: '-10px' }}>
                    <NumberFormat
                      value={this.state.all.cases}
                      displayType={'text'}
                      thousandSeparator={true}
                      renderText={(value) => <div>{value}</div>}
                    />
                  </h5>
                </CardBody>

                <CardBody
                  style={{
                    backgroundColor: '#0060B0',
                    color: 'white',
                  }}
                >
                  <h6 style={{ marginTop: '-10px' }}>
                    {' '}
                    <FontAwesomeIcon icon={faGlobe} /> Infected
                  </h6>
                </CardBody>
              </Card>
            </Col>
            <Col sm={6}>
              <Card
                style={{
                  width: '150px',
                  height: '90px',
                  borderColor: '#B40000',
                  marginLeft: '',
                  textAlign: 'center',
                }}
                className='shadow-sm '
              >
                <CardBody>
                  <h5 style={{ marginTop: '-10px' }}>
                    <NumberFormat
                      value={this.state.all.deaths}
                      displayType={'text'}
                      thousandSeparator={true}
                      renderText={(value) => <div>{value}</div>}
                    />
                  </h5>
                </CardBody>

                <CardBody
                  style={{
                    backgroundColor: '#B40000',
                    color: 'white',
                  }}
                >
                  <h6 style={{ marginTop: '-10px' }}>
                    {' '}
                    <FontAwesomeIcon icon={faGlobe} /> Deaths
                  </h6>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row style={{ marginTop: '15px' }}>
            <Col sm={6}>
              <Card
                style={{
                  width: '150px',
                  height: '90px',
                  borderColor: '#248C1B',
                  marginLeft: '-10px',
                  textAlign: 'center',
                }}
                className='shadow-sm '
              >
                <CardBody>
                  <h5 style={{ marginTop: '-10px' }}>
                    <NumberFormat
                      value={this.state.all.recovered}
                      displayType={'text'}
                      thousandSeparator={true}
                      renderText={(value) => <div>{value}</div>}
                    />
                  </h5>
                </CardBody>

                <CardBody
                  style={{
                    backgroundColor: '#248C1B',
                    color: 'white',
                  }}
                >
                  <h6 style={{ marginTop: '-10px' }}>
                    {' '}
                    <FontAwesomeIcon icon={faGlobe} /> Recovered
                  </h6>
                </CardBody>
              </Card>
            </Col>
            <Col sm={6}>
              <Card
                style={{
                  width: '150px',
                  height: '90px',
                  borderColor: 'rgb(255,140,0)',
                  marginLeft: '',
                  textAlign: 'center',
                }}
                className='shadow-sm '
              >
                <CardBody>
                  <h5 style={{ marginTop: '-10px' }}>
                    <NumberFormat
                      value={this.state.all.active}
                      displayType={'text'}
                      thousandSeparator={true}
                      renderText={(value) => <div>{value}</div>}
                    />
                  </h5>
                </CardBody>

                <CardBody
                  style={{
                    backgroundColor: 'rgb(255,140,0)',

                    color: 'white',
                  }}
                >
                  <h6 style={{ marginTop: '-10px' }}>
                    {' '}
                    <FontAwesomeIcon icon={faGlobe} /> Active
                  </h6>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row style={{ marginTop: '20px' }}>
            <Col sm={2}></Col>
            <Col sm={8}>
              <GlobalDailyData />
            </Col>
            <Col sm={2}></Col>
          </Row>
        </Container>

        <Row>
          <Col className='shadow-sm' style={{ height: '275px' }}>
            <Chart
              width={'500px'}
              height={'300px'}
              style={{ marginLeft: '-30px' }}
              chartType='PieChart'
              loader={<div style={{ marginTop: '60px' }}>Loading Chart</div>}
              data={[
                ['Task', 'Hours per Day'],
                ['', ''],
                ['Deaths', this.state.all.deaths],
                ['Active', this.state.all.active],
                ['Recovered', this.state.all.recovered],
              ]}
              options={{
                title: 'Overview in Percentage',
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
      </div>
    );
  }
}

export default Total;
