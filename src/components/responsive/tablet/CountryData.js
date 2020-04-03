import React, { Component } from 'react';
import { Container, Row, Card, CardBody, CardDeck } from 'reactstrap';
import Chart from 'react-google-charts';

export class CountryData extends Component {
  componentDidMount() {
    this.props.getCountryData(this.props.match.params.country);
  }

  render() {
    return (
      <div style={{ marginTop: '70px' }}>
        <Container>
          <Row>
            <Card inverse body outline color='primary'>
              <CardBody>
                <h2 className='text-center' style={{ color: 'black' }}>
                  {this.props.country.country} - Covid-19 Overview
                </h2>
                <div style={{ height: '400px' }}>
                  <Chart
                    width={'650px'}
                    height={'400px'}
                    chartType='PieChart'
                    loader={
                      <div style={{ marginLeft: '100px' }}>Loading...</div>
                    }
                    data={[
                      ['Task', 'Hours per Day'],
                      ['', ''],
                      ['Deaths', this.props.country.deaths],
                      ['Active', this.props.country.active],
                      ['Recovered', this.props.country.recovered]
                    ]}
                    options={{
                      title: 'Pandemic in Percentage'
                    }}
                  />
                </div>

                <div style={{ color: 'black', textAlign: 'center' }}>
                  <h2>{this.props.country.critical} </h2>{' '}
                  <h3>Critical Cases treated in ICU</h3>
                </div>
                <CardDeck style={{ marginTop: '20px' }}>
                  <Card body inverse color='info' className='text-center'>
                    <h3>{this.props.country.cases}</h3>
                    <h4>Confirmed</h4>
                  </Card>
                  <Card body inverse color='danger' className='text-center'>
                    <h3>{this.props.country.deaths}</h3>
                    <h4>Deaths</h4>
                  </Card>
                  <Card body inverse color='success' className='text-center'>
                    <h3>{this.props.country.recovered}</h3>
                    <h4>Recovered</h4>
                  </Card>
                </CardDeck>
              </CardBody>
            </Card>

            {/* <Card inverse body outline color="primary">
        
        <CardBody>
          


      <Card body inverse color="warning" className="text-center" style={{marginTop:'80px'}}>
      <h3>{this.props.country.todayCases}</h3>
        <h4>New Cases</h4>
        
      </Card>
      <Card body inverse color="danger" className="text-center" style={{marginTop:'20px'}}>
      <h3>{this.props.country.todayDeaths}</h3>
        <h4>New Deaths</h4>
        
      </Card>
        </CardBody> */}
            {/* </Card>
             */}
          </Row>
        </Container>
        <h1></h1>
      </div>
    );
  }
}

export default CountryData;
