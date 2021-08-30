import { ADD_REGISTER } from "../action";

const INITIAL_STATE = {
  user: {
    nome: '',
    idade: '',
    email: '',
    password: '',
  }
};

export const registerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_REGISTER:
    return {
      ...state,
      user: action.payload,
    };
  default:
    return state;
  }
};
