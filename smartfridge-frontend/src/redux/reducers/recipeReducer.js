import { SEARCH } from '../types/recipeType';
import { SAVE } from '../types/recipeType';
import { SAVE_DETAILS } from '../types/recipeType';
import {STORE_FOOD} from '../types/recipeType';

const initialState = {
  recipeData: {}, 
  recipeDetails: {},
  foodData: {}, 
  myIngredients: []
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE:
      return {
        ...state,
        recipeData: action.payload
      }
    case SAVE_DETAILS:
      return{
        ...state,
        recipeDetails: action.payload
      }
    case SEARCH:
      return {
        ...state,
        foodData: action.payload
      }
    case STORE_FOOD:
      return {
        ...state,
        myIngredients: action.payload
      }
    default:
      return state;
  };
};

export default recipeReducer;