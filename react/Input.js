// React User Input Tutorial
import React from 'react';
import ReactDOM from 'react-dom';

// Define class
export class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userInput: '' };
    
    this.handleUserInput = this.handleUserInput.bind(this);
  }
  
  handleUserInput(e) {
    this.setState({
      userInput: e.target.value
    }); 
  }
  
  // Render to the page
  render() {
    return (
      <div>
        <input type="text" value={this.state.userInput} onChange={this.handleUserInput} />
        <h1>Your input is: {this.state.userInput}</h1>
      </div>
    );
  }
};

ReactDOM.render(
  <Input />,
  document.getElementById('app')
);
