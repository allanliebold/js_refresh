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
      </section>
    );
  }
  
  increment() {
    
  }
  
  decrement() {
    
  }
}

ReactDOM.render(
    <AppComponent />,
    document.getElementById('application')
);
