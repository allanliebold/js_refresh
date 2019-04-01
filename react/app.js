import React from 'react';
import ReactDOM from 'react-dom';

const title = <h1 id="title">Introduction to React.js: Part I</h1>;
const myArticle = <article></article>;
const exampleJSXList = {
  first: <li>First</li>,
  second: <li>Second</li>,
  third: <li>Third</li>
};

const theExample = (
  <a href="https://www.example.com">
    <h1>
      Click me!
    </h1>
  </a>
);

const strings = ['Home', 'Shop', 'About Me'];
const listItems = strings.map(string => <li>{string}</li>);

<ul>{listItems}</ul>
                              
const exampleEl = React.createElement(
  "h1",
  null,
  "Example Element"
);

ReactDOM.render(exampleEl, document.getElementById('app'));
