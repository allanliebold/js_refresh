const scenesArr = [
   { 
      id: 1, 
      text: 'Scene 1' 
   }, 
   { 
      id: 2,
      text: 'Scene 2' 
   },
   {
      id: 3,
      text: 'Scene 3'
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
