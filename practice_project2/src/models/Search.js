import axios from 'axios';

export default class Search {
  constructor(query) {
    this.query = query; 
  }
  
  async getResults() {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const key = '462b1cc8d4f2730081462fbc65136320';
    try {
      const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
      this.result = res.data.recipes;
    } catch (error) {
      alert(error); 
    }
  }
}

