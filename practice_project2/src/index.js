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
    // 2 - New search object and add to state 
    state.search = new Search(query);
    
    // 3 - Prepare UI for results
    
    // 4 - Search for recipes
    await state.search.getResults();
    
    // 5 - Render results in UI
    searchView.renderResults();
  }
}

document.querySelector('.search').addEventListener('submit', e => {
  e.preventDefault();
});

const search = new Search('pizza');
console.log(search);
search.getResults();
