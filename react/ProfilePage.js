import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './NavBar';

class Profile extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>Profile</h1>
        <p>Lorem ipsum etcetera and so forth...</p>
      </div>
    );
  }
};

ReactDOM.render();
