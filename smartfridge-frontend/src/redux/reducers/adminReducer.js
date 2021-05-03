import { ADMINLOGIN, ADMINLOGOUT } from '../types/adminTypes'

const initialState = {
  user: {},
  token: ''
};

const  adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADMINLOGIN:
        return {
            ...state,
            user: action.payload.user,
            token: action.payload.token
        }
        case ADMINLOGOUT:
        return {
            ...state,
            admin: initialState
        }
            
        default:
        return state;
  }
};

export default adminReducer;