// Parent Class
// Imports the Child Class

import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Kid' };
  }
  
  render() {
    return (
      <Child name={this.state.name} />
    );
  }
};
