import { LOGIN } from "../action";

const INITIAL_STATE = {
  user: { 
    email: '',
    password: '',
  },
};

export const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      user: action.payload,
    };
  default:
    return state;
  }
};
