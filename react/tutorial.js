class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
const Camper = props => (<p>{props.name}</p>);

Camper.defaultProps = {
  name: 'CamperBot'
};

Camper.propTypes = {
  name: PropTypes.string.isRequired
};

                         
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Allan'
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};                         

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Allan'
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Allan'
    }
  }
  render() {
    const name = this.state.name;
    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
};

// Button Click to change state
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({name: 'Button Clicked!'});
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCount: 0
    };
    // change code below this line
    this.addItem = this.addItem.bind(this);
    // change code above this line
  }
  addItem() {
    this.setState({
      itemCount: this.state.itemCount + 1
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.addItem}>Click Me</button>
        <h1>Current Item Count: {this.state.itemCount}</h1>
      </div>
    );
  }
};

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // change code below this line
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  toggleVisibility() {
    this.state.visibility == true ?
      this.setState({visibility:false})
      : this.setState({visibility:true})
  }
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
};

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value });
  }
  render() {
    return (
      <div>
        <input value={this.state.input} onChange={this.handleChange.bind(this)} />
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};

// Submit Form
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {

  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <button type='submit'>Submit!</button>
        </form>

      </div>
    );
  }
};

class Controller extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      value: 0 
    };
    this.addValue.bind(this);
    
    addValue() {
      this.setState({
        value: this.state.value++
      });
    }
    
    render() {
      return (
        <div>
          <button onClick={this.addVaue}>Add</button>
          <OnlyEvens value={this.state.value} />
        </div>
      );
    }
};

class OnlyEvens extends React.Component {
  constructor(props) {
    super(props); 
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    // Return true only if the next value of props is an even number
    return nextProps.value % 2 == 0 ? true : false;     
  }
  
  render() {
    return <h1>{this.props.value}</h1> 
  }
};

// Using array, filter, and map
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jepp',
          online: true
        },
        {
          username: 'Grem',
          online: false
        },
        {
          username: 'Torpal',
          online: false
        },
        {
          username: 'Perd',
          online: true
        }
      ] 
    }
  }
  // filtering by properties and creating JSX elements with map
  render() {
    const usersOnline = this.state.users.filter(user => user.online == true);
    const renderOnline = usersOnline.map(item => <li key={item.username + 1}>{item.username}</li>);
    return(
      <div>
        <h1>Current Online Users:</h1>
        <ul>
          {renderOnline}
        </ul>
      </div>
    );
  }
};

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1 
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  
  render() {
    let expression = Math.random() > .5;
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        { expression == true ? <Results fiftyFifty="You Win!" /> : 
                               <Results fiftyFifty="You Lose!" /> }
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
};

class Results extends React.Component {
  constructor(props) {
    super(props); 
  }
  render() {
    return (
      <h1>
        {this.props.fiftyFifty}
      </h1>
    )
  }
}

class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '' 
    };
    
  this.handleChange = this.handleChange.bind(this);
    
  handleChange(event) {
    this.setState({ input: event.target.value }) 
  }
    
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
    if(this.state.input.length > 15) {
      inputStyle.border = '3px solid red' 
    }
    return(
        <div>
          <h3></h3>
            <input type="text" style={inputStyle} value={this.state.input} onChange={this.handleChange} />
        </div>
    );
  }
}
