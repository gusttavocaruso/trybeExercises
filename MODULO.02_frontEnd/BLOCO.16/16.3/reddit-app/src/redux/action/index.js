export const LOGIN = 'LOGIN';
export const ADD_REGISTER = 'ADD_REGISTER';

export const registerCreator = (payload) => (
  { type: ADD_REGISTER, payload }
);

export const loginCreator = (payload) => (
  { type: LOGIN, payload }
);
