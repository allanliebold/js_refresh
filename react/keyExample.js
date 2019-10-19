// Keys
function ListItem(props) {
  return <li>{props.value}</li>;
}

function ThingsList(props) {
  const things = props.things;
  const listThings = things.map((thing) => 
    <ListItem key={thing.toString()}
              value={thing} />
  );
  return (
    <ul>
      {listThings}                    
    </ul>
  );
}

const things = ['apple', 'computer', 'coffee cup', 'desk'];
ReactDOM.render(
  <ThingsList things={things} />,
  document.getElementById('root')
);
