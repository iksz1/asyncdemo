import { SET_IS_LOADING, SET_RESULT, RESET_STATE } from "../actions";

const initialState = {
  isLoading: false,
  result: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_IS_LOADING:
      return { ...state, isLoading: true };
    case SET_RESULT:
      return { result: payload, isLoading: false };
    case RESET_STATE:
      return initialState;

    default:
      return state;
  }
};
