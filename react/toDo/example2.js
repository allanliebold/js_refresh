class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 5,
      title: "Count"
    };
    
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
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
    const {count} = this.state;
    this.setState({ count: count + 1 });
  }
  
  decrement() {
    const {count} = this.state;
  }
}

ReactDOM.render(
    <AppComponent />,
    document.getElementById('application')
);
