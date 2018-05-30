import { elements } from './base';

export const getInput = () => elements.searchInput.value;

const renderRecipe = recipe => {
  const markup = `

  `  
}

export const renderResults = recipes => {
  recipes.foreach(renderRecipe);
}
