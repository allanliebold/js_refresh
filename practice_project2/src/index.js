// Global app controller

import Search from './models/Search';

// Search object
// Current recipe object
// Shopping list object
// Liked recipes

const state = {};

document.querySelector('.search').addEventListener('submit', e => {
  e.preventDefault();
});

const search = new Search('pizza');
console.log(search);
search.getResults();
