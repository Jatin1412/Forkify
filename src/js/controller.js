import * as model from './model.js';
import "core-js/stable";
import "regenerator-runtime/runtime"
import recipeView from './views/recipeView.js';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////



const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;

    // loading...
    recipeView.renderSpinner();
    
    // 1 : Loading recipe
    await model.loadRecipe(id);

    // 2 : rendring recipe
    recipeView.render(model.state.recipe);

  } catch (error) {
    recipeView.renderError();
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
}

init();

// window.addEventListener('hashchange', getRecipe);
// window.addEventListener('load', getRecipe);
