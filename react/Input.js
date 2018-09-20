import React from 'react';
import ReactDOM from 'react-dom';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userInput: '' };
  }
  
  handleUserInput(e) {
    this.setState({
      userInput: e.target.value
    }); 
  }
  
  render() {
    return (
      <div>
        <input type="text" value={this.state.userInput} onChange={this.handleUserInput} />
        <h1>Your input is: {this.state.userInput}</h1>
      </div>
    );
  }
};
