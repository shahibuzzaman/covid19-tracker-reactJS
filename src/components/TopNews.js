import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

export class TopNews extends Component {
  render() {
    return (
      <div>
        <Card
          body
          style={{
            backgroundColor: '',
            borderColor: 'black',
            marginBottom: '5px',
          }}
        >
          <CardTitle style={{ marginTop: '-10px' }}>
            <strong>{this.props.articles.title} </strong>

            <span style={{ fontSize: '12px' }}>
              [Published : {this.props.articles.publishedAt}]
            </span>
          </CardTitle>

          <a className='text-center' href={this.props.articles.url}>
            Read more
          </a>
        </Card>
      </div>
    );
  }
}

export default TopNews;
