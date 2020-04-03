import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardHeader,
  Button,
  CardSubtitle,
  Container
} from 'reactstrap';

import { Link } from 'react-router-dom';

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
                    {this.props.countries.cases}{' '}
                  </CardSubtitle>
                  <CardSubtitle>
                    {' '}
                    <strong>Deaths : </strong>
                    {this.props.countries.deaths}{' '}
                  </CardSubtitle>
                  <CardSubtitle>
                    <strong>Recovered :</strong>{' '}
                    {this.props.countries.recovered}{' '}
                  </CardSubtitle>
                  <CardSubtitle>
                    <strong>Critical :</strong> {this.props.countries.critical}{' '}
                  </CardSubtitle>
                  <CardSubtitle>
                    <strong>Active :</strong> {this.props.countries.active}{' '}
                  </CardSubtitle>
                  <hr />
                  <CardSubtitle>
                    <strong>Cases Today :</strong>{' '}
                    {this.props.countries.todayCases}{' '}
                  </CardSubtitle>
                  <CardSubtitle>
                    <strong>Deaths Today:</strong>{' '}
                    {this.props.countries.todayDeaths}{' '}
                  </CardSubtitle>
                </CardBody>
                <Link to={`/country/${this.props.countries.country}`}>
                  <Button style={{ width: '100%' }}>More </Button>
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
