class AppComponent extends React.Component {
  constructor(props) {
    super(props); 
    
    this.state = {
      filter: { showCompleted: true }
    };
  }
  
  render() {
    const {filter} = this.state;
    
    return {
      <div>
      
      </div>
    }
  }
}

ReactDOM.render(
  <AppComponent />,
  document.getElementById("application")
);
