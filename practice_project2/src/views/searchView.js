import { elements } from './base';

export const getInput = () => elements.searchInput.value;

const renderRecipe = recipe => {
  const markup = `
  <li>
    <a class="results__link results__link--active" href="#23456">
      <figure class="results__fig">
      
      </figure>
    <div class="results__data">

    </div>
    </a>
  </li>
  `  
}

export const renderResults = recipes => {
  recipes.foreach(renderRecipe);
}
