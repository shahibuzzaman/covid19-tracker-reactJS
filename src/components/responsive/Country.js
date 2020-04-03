import React, { Component } from 'react'
import {
  Card, CardImg, CardText, CardBody,CardTitle, CardHeader, Button,CardSubtitle
} from 'reactstrap';

import { Link } from 'react-router-dom'



class Country extends Component {

  render() {
    return (
      <div style={{}}>
        <Card >
          <CardHeader className="text-center">
          <CardImg src={this.props.countries.countryInfo.flag} alt="img" style={{width:'60px', float:'left'}} />
        <CardTitle> <strong>{this.props.countries.country}</strong></CardTitle>
          </CardHeader>
        <CardBody style={{}} >
        <CardSubtitle> <strong> Confrimed : </strong>{this.props.countries.cases} </CardSubtitle> 
        <CardSubtitle> <strong>Deaths : </strong>{this.props.countries.deaths} </CardSubtitle>
        <CardSubtitle><strong>Recovered :</strong> {this.props.countries.recovered} </CardSubtitle> 
        <CardSubtitle><strong>Critical :</strong> {this.props.countries.critical} </CardSubtitle>
        <CardSubtitle><strong>Active :</strong> {this.props.countries.active} </CardSubtitle> 
        <hr/>
        <CardSubtitle ><strong>Cases Today :</strong> {this.props.countries.todayCases} </CardSubtitle> 
        <CardSubtitle><strong>Deaths Today:</strong> {this.props.countries.todayDeaths} </CardSubtitle> 
        </CardBody>
          <Link to={`/country/${this.props.countries.country}`}>
            <Button style={{width:'100%'}}>More Info </Button>
            
          </Link>
      </Card>
      </div>
    )
  }
}

export default Country
