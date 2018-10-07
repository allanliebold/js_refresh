class AppComponent extends React.Component {
  constructor(props) {
    super(props); 
    
    this.state = {
      filter: { showCompleted: true }
    };
  }
  
  render() {
    const {filter} = this.state;
    
    return (
      <div>
        <h2>Todo List</h2>
        <label>
          Show Completed
          <input type="checkbox" checked={filter.showCompleted} onChange={} />
        </label>
      </div>
    )
  }
}

ReactDOM.render(
  <AppComponent />,
  document.getElementById("application")
);
