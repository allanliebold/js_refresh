class AppComponent extends React.Component {
  constructor(props) {
    super(props);
  };
    
  
  render() {
        return (
            <div>
                <h2>To Do</h2>
            </div>
        );
  }

ReactDOM.render(
    <AppComponent />,
    document.getElementById('application')
);
