import { SEARCH } from '../types/recipeType';


const initialState = {
  idRecipe: '',
  info: {},
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        info: action.payload.info,
        idRecipe: action.payload.id 
      }
    default:
      return state;
  };
};

export default recipeReducer;