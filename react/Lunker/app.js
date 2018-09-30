class Game extends React.Component {
  const {currScene} = this.state;
  let northButton, southButton, eastButton, westButton;  

  currScene.go[0]
    ? northButton = <button onClick={() => this._changeScene(currScene.go[0]) }>N</button>
    : northButton = <button>X</button>;

  currScene.go[1]
    ? southButton = <button onClick={() => this._changeScene(currScene.go[1]) }>S</button>
    : southButton = <button>X</button>;

  currScene.go[2]
    ? eastButton = <button onClick={() => this._changeScene(currScene.go[2]) }>E</button>
    : eastButton = <button>X</button>;

        currScene.go[3]
            ? westButton = <button onClick={() => this._changeScene(currScene.go[3]) }>W</button>
            : westButton = <button>X</button>;

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
