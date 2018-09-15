import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Bill', 'Bob', 'Dave'];

const peopleList = people.map(person =>
  <li>{person}</li>
);

ReactDOM.render(
  <ul>{peopleList}</ul>,
  document.getElementById('app')
);
