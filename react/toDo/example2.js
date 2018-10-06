class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      count: 5,
      title: 'Count'
    };
  };
    
  
  render() {
        return (
            <section className="site-wrap">
                <h2>To Do</h2>
                <p>Paragraph</p>
            </section>
        );
  }

ReactDOM.render(
    <AppComponent />,
    document.getElementById('application')
);
