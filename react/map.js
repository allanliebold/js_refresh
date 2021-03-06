import React from 'react';
import ReactDOM from 'react-dom';

const numbers = [1, 2, 3, 4, 5];
const people = ['Bill', 'Bob', 'Dave', 'Doug'];

const peopleList = people.map((person, i) =>
  <li key={'person_' + i}>{person}</li>
);

const doubleNumList = numbers.map((number) =>
  <li key={'num_' + number}>{number * 2}</li>                               
);

ReactDOM.render(
  <ul>{peopleList}</ul>,
  <ul>{doubleNumList}</ul>,
  document.getElementById('app')
);
