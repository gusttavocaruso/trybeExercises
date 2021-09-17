import { SAVE_QUESTION, UPDATE_COUNTDOWN } from '../action';

const INITIAL_STATE = {
  results: [],
  time: 30,
};

const questionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_QUESTION:
    return {
      ...state,
      results: [...action.payload],
    };
  case UPDATE_COUNTDOWN:
    return {
      ...state,
      time: action.payload.time,
    };
  default:
    return state;
  }
};

export default questionReducer;
