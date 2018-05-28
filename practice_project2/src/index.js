// Global app controller

import Search from './models/Search';

const state = {};
const search = new Search('pizza');
console.log(search);
search.getResults();
