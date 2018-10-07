class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 5,
      title: "Count"
    };
  }
    
  render() {
    const {count, title} = this.state;
    
    return (
      <section className="site-wrap">
        <h2>{title}</h2>
        <p>{count}</p>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
      </section>
    );
  }
  
  increment() {
    console.log("INC"); 
  }
  
  decrement() {
    
  }
}

ReactDOM.render(
    <AppComponent />,
    document.getElementById('application')
);
