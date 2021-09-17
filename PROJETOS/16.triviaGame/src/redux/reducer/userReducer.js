import { SAVE_EMAIL } from '../action';

const INITIAL_STATE = {
  email: '',
  nome: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_EMAIL:
    return {
      ...state,
      email: action.payload.email,
      nome: action.payload.nome,
    };
  default:
    return state;
  }
};

export default userReducer;
