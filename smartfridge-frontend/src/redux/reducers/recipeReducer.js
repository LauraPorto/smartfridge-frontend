import { SEARCH } from '../types/recipeType';


const initialState = {
  recipeData: {}
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        recipeData: action.payload
      }
    default:
      return state;
  };
};

export default recipeReducer;