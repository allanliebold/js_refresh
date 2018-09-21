import React from 'react';
import ReactDOM from 'react-dom';

export class LifeCycle extends React.Component {
  componentWillMount() {
    alert('Component will mount.');
  }
  
  componentDidMount() {
    
  }
  
  render() {
    alert('Rendering.');
  }  
  
  return (
    <h1 style={{ color: this.props.color }}>
     LifeCycle
    </h1>
  );
}

