class AppComponent extends React.Component {
  constructor(props) {
    super(props);
  };
    
  
  render() {
        return (
            <section>
                <h2>To Do</h2>
                <p>Paragraph</p>
            </section>
        );
  }

ReactDOM.render(
    <AppComponent />,
    document.getElementById('application')
);
