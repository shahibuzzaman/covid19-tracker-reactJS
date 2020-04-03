import React, { Component } from 'react';
import { Card, CardBody, Container, Row, Col, Button } from 'reactstrap';
import Chart from 'react-google-charts';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import './Live.scss';
import { Link } from 'react-router-dom';

class Total extends Component {
  state = {
    all: [],
    loading: false
  };

  getAll = async () => {
    this.setState({ loading: true });

    const res = await axios.get('https://corona.lmao.ninja/all');

    this.setState({ all: res.data, loading: false });
  };

  async componentDidMount() {
    this.getAll();
  }

  render() {
    return (
      <div
        className='position-fixed'
        style={{ marginTop: '70px', width: '25%' }}
      >
        <Container className='text-center'>
          <Row>
            <Col xs='3'>
              <div
                className='livenow float-left'
                style={{
                  marginLeft: '-40px',
                  marginTop: '-8px',
                  backgroundColor: 'F00000'
                }}
              >
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <h5 style={{ marginLeft: '20px', marginTop: '-4px' }}>LIVE</h5>
              </div>
            </Col>
            <Col xs='9'>
              <h5>
                <FontAwesomeIcon icon={faGlobe} /> COVID-19 Pandemic
              </h5>
            </Col>
          </Row>
          <Row>
            <Col xs='6'>
              <Card style={{ height: '40px', marginTop: '10px' }}>
                <CardBody>
                  <h5 style={{ marginTop: '-15px' }}>{this.props.all.cases}</h5>
                </CardBody>
                <Button
                  disabled
                  style={{ backgroundColor: '#016A87', color: 'white' }}
                >
                  <h6>
                    {' '}
                    <FontAwesomeIcon icon={faGlobe} /> Confrimed
                  </h6>
                </Button>
              </Card>
            </Col>
            <Col xs='6'>
              <Card style={{ height: '40px', marginTop: '10px' }}>
                <CardBody>
                  <h5 style={{ marginTop: '-15px' }}>
                    {this.props.all.deaths}
                  </h5>
                </CardBody>
                <Button
                  disabled
                  style={{ backgroundColor: '#DF1414', color: 'white' }}
                >
                  <h6>
                    {' '}
                    <FontAwesomeIcon icon={faGlobe} /> Deaths
                  </h6>
                </Button>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs='6'>
              <Card style={{ height: '40px', marginTop: '50px' }}>
                <CardBody>
                  <h5 style={{ marginTop: '-15px' }}>
                    {this.props.all.recovered}
                  </h5>
                </CardBody>
                <Button
                  disabled
                  style={{ backgroundColor: '#2D9707', color: 'white' }}
                >
                  <h6>
                    {' '}
                    <FontAwesomeIcon icon={faGlobe} /> Recovered
                  </h6>
                </Button>
              </Card>
            </Col>
            <Col xs='6'>
              <Card style={{ height: '40px', marginTop: '50px' }}>
                <CardBody>
                  <h5 style={{ marginTop: '-15px' }}>
                    {this.props.all.active}
                  </h5>
                </CardBody>
                <Button
                  disabled
                  style={{ backgroundColor: '#FFA500', color: 'white' }}
                >
                  <h6>
                    <FontAwesomeIcon icon={faGlobe} /> Active
                  </h6>
                </Button>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col style={{ height: '300px' }}>
              <Chart
                width={'500px'}
                height={'300px'}
                style={{ marginLeft: '-40px', marginTop: '45px' }}
                chartType='PieChart'
                loader={<div style={{ marginTop: '60px' }}>Loading Chart</div>}
                data={[
                  ['Task', 'Hours per Day'],
                  ['', ''],
                  ['Deaths', this.state.all.deaths],
                  ['Active', this.state.all.active],
                  ['Recovered', this.state.all.recovered]
                ]}
                options={{
                  title: 'Overview in Percentage'
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <div>
                <hr></hr>
                <Button
                  outline
                  color='info'
                  size='sm'
                  onClick={() => {
                    let win = window.open('');
                    win.location.replace(
                      'https://github.com/shahibuzzaman/react-covid19-tracker/tree/master'
                    );
                  }}
                >
                  Fork on Github
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Total;
