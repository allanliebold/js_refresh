const people = [
  {
    name: 'Bob',
    age: 32,
    job: 'waiter'
  },
  {
    name: 'Bill',
    age: 22,
    job: 'student'
  }
];

class Directory extends React.Component {

  render() {
    <ul>
      {peopleList}  
    </ul>
  }
}


ReactDOM.render(
  <Directory />,
  document.getElementById('app');
);
