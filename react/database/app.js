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

const peopleList = people.map(person => 
  <li>
    <div>Name:{person.name}</div>
    <div>Age: {person.age}</div>
    <div>Job: {person.job}</div>
  </li>
);

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
