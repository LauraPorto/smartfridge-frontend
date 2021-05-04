import { SEARCH } from '../types/recipeType';
import { SAVE } from '../types/recipeType';

const initialState = {
  recipeData: {}, 
  foodData: {}
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE:
      return {
        ...state,
        recipeData: action.payload
      }
    case SEARCH:
      return {
        ...state,
        foodData: action.payload
      }
    default:
      return state;
  };
};

export default recipeReducer;