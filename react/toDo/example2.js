function ToDoList({todos}) {    
    return (
        <ul>
            {todos.map(todo =>
                <li key={todo.id}>
                    <label>
                        <input type="checkbox" checked={todo.isCompleted} onChange={e => onSetTodoStatus(todo, e.target.checked)} />
                        {todo.isCompleted
                            ? <del>{todo.text}</del>
                            : todo.text}
                    </label>
                </li>)}
        </ul>
    );
}

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <form onSubmit={this._onSubmit}>
                <input type="text" />
                <button>Add Todo</button>
            </form>
        );
    }
    
    _onSubmit(e) {
        
    }
}

class AppComponent extends React.Component {
    constructor(props) {
        super(props);

        this._nextToDoId = 1;
        this.state = {
            filter: { showCompleted: true },
            todos: [
                { id: this._nextToDoId++, text: "Hi", isCompleted: false },
                { id: this._nextToDoId++, text: "Example", isCompleted: false },
                { id: this._nextToDoId++, text: "Neat", isCompleted: true },
                { id: this._nextToDoId++, text: "Done", isCompleted: true }
            ]
        };
        this._onShowCompletedChanged = this._onShowCompletedChanged.bind(this);
        this._setTodoStatus = this._setTodoStatus.bind(this);
    }    
    
  render() {
        const {filter, todos} = this.state;
        const filteredTodos = filter.showCompleted 
            ? todos
            : todos.filter(todo => !todo.isCompleted);

        return (
            <div>
                <h2>To Do</h2>
                <label>
                    <input type="checkbox" checked={filter.showCompleted} onChange={this._onShowCompletedChanged} />
                </label>
                <ToDoList todos={filteredTodos} onSetTodoStatus={this._setTodoStatus} />
            </div>
        );
  }
    
  _setTodoStatus(todo, isComplete) {
    const {todos} = this.state;
    const newTodos = todos.map(oldTodo => {
        if(oldTodo.id !== todo.id) 
            return oldTodo;   
        return Object.assign({}, oldTodo, {isCompleted}); 
    });    
    
    this.setState({ todos: newTodos });
  }
    
  _onShowCompletedChanged(e) {
    this.setState({
        filter: {showCompleted: e.target.checked}    
    });
  }
}

ReactDOM.render(
    <AppComponent />,
    document.getElementById('app')
);
