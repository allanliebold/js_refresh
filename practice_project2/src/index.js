// Javascript Practice Project 2
// Global app controller
import Search from './models/Search';

// Search object
// Current recipe object
// Shopping list object
// Liked recipes

const state = {};

const controlSearch = async () => {
  // 1 - Get query from view
  const query = searchView.getInput();
  
  if (query) {
    // 2 - New search object and add to state 
    state.search = new Search(query);
    
    // 3 - Prepare UI for results
    searchView.clearInput();
    searchView.clearResults();
    
    // 4 - Search for recipes
    await state.search.getResults();
    
    // 5 - Render results in UI
    searchView.renderResults(state.search.result);
  }
}

document.querySelector('.search').addEventListener('submit', e => {
  e.preventDefault();
});

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});
