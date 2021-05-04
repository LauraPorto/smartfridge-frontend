import { LOGIN, LOGOUT, UPDATE } from '../types/userType';


const initialState = {
  user: {},
  token: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token 
      }
    case LOGOUT:
      return {
        ...state,
        user: initialState
      }
    case UPDATE:
      return {
        ...state, 
        user: action.payload.user, 
        token: action.payload.token
      }
    default:
      return state;
  };
};

export default userReducer;