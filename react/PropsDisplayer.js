import React from 'react';
import ReactDOM from 'react-dom';

class PropsDisplayer extends React.Component {
  render() {
    const stringProps = JSON.stringify(this.props);
    
    return (
      <div>
      <h2>{stringProps}</h2>
      </div>
    );
  }
}
