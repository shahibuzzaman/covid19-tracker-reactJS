import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import TopNews from './TopNews';

class TopNewsProvider extends Component {
  render() {
    return (
      <div>
        {this.props.articles.map((articles) => (
          <TopNews key={articles.title} articles={articles}></TopNews>
        ))}
      </div>
    );
  }
}

export default TopNewsProvider;
