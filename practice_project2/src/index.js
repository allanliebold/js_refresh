// Global app controller

import Search from './models/Search';

// Search object
// Current recipe object

const state = {};
const search = new Search('pizza');
console.log(search);
search.getResults();
