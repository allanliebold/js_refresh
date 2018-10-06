class AppComponent extends React.Component {
  constructor(props) {
    super(props);
  };
    
  
  render() {
        return (
            <div>
                <h2>To Do</h2>
                <p>Paragraph</p>
            </div>
        );
  }

ReactDOM.render(
    <AppComponent />,
    document.getElementById('application')
);
