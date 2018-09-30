class Game extends React.Component {
  const {currScene} = this.state;
  let northButton, southButton, eastButton, westButton;  

  render() {
    return(
      <div>
        <h2>{currScene.name}</h2>
        <p>{currScene.text}</p>
        {northButton}<br />
        {westButton}
        {eastButton}<br />
        {southButton}
      </div>
    );
  }
};

ReactDOM.render(
  <Game />,
  document.getElementsById('app')
);
