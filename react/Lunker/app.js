const scenesArr = [
  {
    id: 1,
    name: 'Room',
    text: 'There is a passage to the north.',
    go: ['1', false, false, false],
    visited: false
  },
  {
    id: 2,
    name: 'Passage',
    text: 'The passage goes north and south.',
    go: [false, '0', false, false],
    visited: false
  },
  {
    id: 3,
    name: 'Dead End',
    text: 'There is a passage south.',
    go: [false, '1', false, false],
    visited: false
  }
];

class Game extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         currScene: scenesArr[0]
      };

      this._changeScene = this._changeScene.bind(this);
  }
  
  render() {
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
