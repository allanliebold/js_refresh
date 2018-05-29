// Global app controller

import Search from './models/Search';

// Search object
// Current recipe object
// Shopping list object
// Liked recipes

const state = {};

const controlSearch = async () => {
  // 1 - Get query from view
  const query = 'pizza';
  
  if (query) {
    state.search = new Search(query);
    await state.search.getResults();
  }
}

document.querySelector('.search').addEventListener('submit', e => {
  e.preventDefault();
});

const search = new Search('pizza');
console.log(search);
search.getResults();
