// Child Class
// Exported to be used by Parent Class
import React from 'react';

export class Child extends React.Component {
  render() {
    return <h1>Hi, I am {this.props.name}!</h1>; 
  }
};
