import { combineReducers } from 'redux';
import userReducer from './userReducer';
import adminReducer from './adminReducer';
import recipeReducer from './recipeReducer';

const rootReducer = combineReducers({
    userReducer,
    adminReducer, 
    recipeReducer
});

export default rootReducer;