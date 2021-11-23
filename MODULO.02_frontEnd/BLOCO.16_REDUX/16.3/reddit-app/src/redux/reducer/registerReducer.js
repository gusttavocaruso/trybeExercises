import { ADD_REGISTER } from "../action";

const INITIAL_STATE = [];

export const registerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_REGISTER:
    return [
      ...state,
      action.payload,
    ];
  default:
    return state;
  }
};
