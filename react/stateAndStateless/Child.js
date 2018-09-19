import React from 'react';

export class Child extends React.Component {
  render() {
    return <h1>Hi, I'm {this.props.name}!</h1>; 
  }
};
