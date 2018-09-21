import React from 'react';
import ReactDOM from 'react-dom';

export class LifeCycle extends React.Component {
  componentWillMount() {
    alert('Component will mount.');
  }
  
  componentDidMount() {
    alert('Component did mount.');
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

// The first render should display the alerts for componentWillMount, render, then componentDidMount.
ReactDOM.render(
  <Flashy color='red' />,
  document.getElementById('app');
);

// The second render should not display the alerts for componentWillMount and componentDidMount.
setTimeout(() => {
  ReactDOM.render(
    <Flashy color='green' />,
    document.getElementById('app');
  );
}, 2000);
