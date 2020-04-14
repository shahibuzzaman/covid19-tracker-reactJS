import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardHeader,
  Button,
  CardSubtitle
} from 'reactstrap';

import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';

class Country extends Component {
  render() {
    return (
      <div style={{}}>
        <Card>
          <CardHeader className='text-center'>
            <CardImg
              src={this.props.countries.countryInfo.flag}
              alt='img'
              style={{ width: '60px', float: 'left' }}
            />
            <CardTitle>
              {' '}
              <strong>{this.props.countries.country}</strong>
            </CardTitle>
          </CardHeader>
          <CardBody className='text-center' style={{}}>
            <CardSubtitle>
              {' '}
              <strong> Confrimed : </strong>
              <NumberFormat
                value={this.props.countries.cases}
                displayType={'text'}
                thousandSeparator={true}
                renderText={value => <span>{value}</span>}
              />
            </CardSubtitle>
            <CardSubtitle>
              {' '}
              <strong>Deaths : </strong>
              <NumberFormat
                value={this.props.countries.deaths}
                displayType={'text'}
                thousandSeparator={true}
                renderText={value => <span>{value}</span>}
              />{' '}
            </CardSubtitle>
            <CardSubtitle>
              <strong>Recovered : </strong>
              <NumberFormat
                value={this.props.countries.recovered}
                displayType={'text'}
                thousandSeparator={true}
                renderText={value => <span>{value}</span>}
              />{' '}
            </CardSubtitle>
            <CardSubtitle>
              <strong>Critical : </strong>
              <NumberFormat
                value={this.props.countries.critical}
                displayType={'text'}
                thousandSeparator={true}
                renderText={value => <span>{value}</span>}
              />{' '}
            </CardSubtitle>
            <CardSubtitle>
              <strong>Active : </strong>
              <NumberFormat
                value={this.props.countries.active}
                displayType={'text'}
                thousandSeparator={true}
                renderText={value => <span>{value}</span>}
              />{' '}
            </CardSubtitle>
            <hr />
            <CardSubtitle>
              <strong>Cases Today : </strong>
              <NumberFormat
                value={this.props.countries.todayCases}
                displayType={'text'}
                thousandSeparator={true}
                renderText={value => <span>{value}</span>}
              />{' '}
            </CardSubtitle>
            <CardSubtitle>
              <strong>Deaths Today: </strong>
              <NumberFormat
                value={this.props.countries.todayDeaths}
                displayType={'text'}
                thousandSeparator={true}
                renderText={value => <span>{value}</span>}
              />{' '}
            </CardSubtitle>
          </CardBody>
          <Link to={`/country/${this.props.countries.country}`}>
            <Button style={{ width: '100%' }}>More Info </Button>
          </Link>
        </Card>
      </div>
    );
  }
}

export default Country;
