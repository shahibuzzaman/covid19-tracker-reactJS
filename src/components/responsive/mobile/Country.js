import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardHeader,
  Button,
  CardSubtitle,
  Container,
} from 'reactstrap';

import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';

class Country extends Component {
  render() {
    return (
      <div>
        <div style={{}}>
          <Container>
            <Card>
              <Card className='text-center'>
                <CardHeader>
                  <CardImg
                    src={this.props.countries.countryInfo.flag}
                    alt='img'
                    style={{ width: '60px', float: 'left' }}
                  />
                  <CardTitle>
                    {' '}
                    <h4>{this.props.countries.country}</h4>
                  </CardTitle>
                </CardHeader>
                <CardBody style={{}}>
                  <CardSubtitle>
                    {' '}
                    <strong> Cases : </strong>
                    <NumberFormat
                      value={this.props.countries.cases}
                      displayType={'text'}
                      thousandSeparator={true}
                      renderText={(value) => <span>{value}</span>}
                    />
                  </CardSubtitle>
                  <CardSubtitle>
                    {' '}
                    <strong>Deaths : </strong>
                    <NumberFormat
                      value={this.props.countries.deaths}
                      displayType={'text'}
                      thousandSeparator={true}
                      renderText={(value) => <span>{value}</span>}
                    />
                  </CardSubtitle>
                  <CardSubtitle>
                    <strong>Recovered :</strong>{' '}
                    <NumberFormat
                      value={this.props.countries.recovered}
                      displayType={'text'}
                      thousandSeparator={true}
                      renderText={(value) => <span>{value}</span>}
                    />{' '}
                  </CardSubtitle>
                  <CardSubtitle>
                    <strong>Critical :</strong>{' '}
                    <NumberFormat
                      value={this.props.countries.critical}
                      displayType={'text'}
                      thousandSeparator={true}
                      renderText={(value) => <span>{value}</span>}
                    />{' '}
                  </CardSubtitle>
                  <CardSubtitle>
                    <strong>Active :</strong>{' '}
                    <NumberFormat
                      value={this.props.countries.active}
                      displayType={'text'}
                      thousandSeparator={true}
                      renderText={(value) => <span>{value}</span>}
                    />{' '}
                  </CardSubtitle>
                  <hr />
                  <CardSubtitle>
                    <strong>Cases Today :</strong>{' '}
                    <NumberFormat
                      value={this.props.countries.todayCases}
                      displayType={'text'}
                      thousandSeparator={true}
                      renderText={(value) => <span>{value}</span>}
                    />{' '}
                  </CardSubtitle>
                  <CardSubtitle>
                    <strong>Deaths Today:</strong>{' '}
                    <NumberFormat
                      value={this.props.countries.todayDeaths}
                      displayType={'text'}
                      thousandSeparator={true}
                      renderText={(value) => <span>{value}</span>}
                    />{' '}
                  </CardSubtitle>
                </CardBody>
                <Link to={`/country/${this.props.countries.country}`}>
                  <Button style={{ width: '100%' }}>More Info </Button>
                </Link>
              </Card>
            </Card>
          </Container>
        </div>
      </div>
    );
  }
}

export default Country;
