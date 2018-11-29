export const CALL_API = "CALL_API";
export const SET_RESULT = "SET_RESULT";
export const RESET_STATE = "RESET_STATE";
export const SET_IS_LOADING = "SET_IS_LOADING";

export const callApi = url => ({
  type: CALL_API,
  payload: url,
});

export const setIsLoading = () => ({
  type: SET_IS_LOADING,
});

export const setResult = result => ({
  type: SET_RESULT,
  payload: result,
});

export const resetState = () => ({
  type: RESET_STATE,
});
