class Game extends React.Component {
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
