import { CALL_API, setIsLoading, setResult } from "../actions";
import mockApi from "../utils/mockApi";

export default ({ dispatch }) => next => async action => {
  if (action.type === CALL_API) {
    dispatch(setIsLoading());
    const person = await mockApi.getPerson(action.payload);
    const [facility, exposure] = await Promise.all([
      mockApi.getFacility(person.val1),
      mockApi.getExposure(person.val2),
    ]);
    dispatch(setResult(facility.val3 * exposure.val5));
  } else {
    next(action);
  }
};
