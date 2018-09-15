import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Bill', 'Bob', 'Dave'];

const peopleList = people.map((person, i) =>
  <li key={'person_' + i}>{person}</li>
);

ReactDOM.render(
  <ul>{peopleList}</ul>,
  document.getElementById('app')
);
