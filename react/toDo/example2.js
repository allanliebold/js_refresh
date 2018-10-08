function TodoList(props) {
  return (
    <ul>
      <li>To Do List</li>
    </ul>
  );
}

class AppComponent extends React.Component {
  constructor(props) {
    super(props); 
    
    this._nextTodoId = 1;    
    this.state = {
      filter: { showCompleted: true },
      todos: [
        {id: this._nextTodoId++, text: "Hi", isCompleted: false},
        {id: this._nextTodoId++, text: "Okay", isCompleted: false}
      ]
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
  
  _onShowCompletedChanged(e) {
    this.setState({
      filter: {showCompleted: e.target.checked} 
    });
  }
}

ReactDOM.render(
  <AppComponent />,
  document.getElementById("application")
);
