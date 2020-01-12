import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
  POST_START,
  POST_SUCCESS,
  POST_ERROR,
} from '../actions/actions';

// Declared initialState and set up the rootReducers with the switch statements to declare the proper actions inside the store.

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  errorMessage: "",
  successMessage: "",
  error: null
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_START:
      return { ...state, fetchingFriend: true };

    case FETCH_SUCCESS:
      return { ...state, smurfs: payload, fetchSmurfs: false };

    case FETCH_ERROR:
      return { ...state, error: payload, fetchingSmurfs: false };

    case POST_START:
      return {
        ...state,
        addingSmurf: true,
        errorMessage: payload,
        successMessage: payload
      };

    case POST_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        errorMessage: payload,
        successMessage: payload
      };

    case POST_ERROR:
      return {
        ...state,
        addingSmurf: false,
        errorMessage: payload,
        successMessage: payload
      };

    default:
      return state;
  }
};

export default rootReducer;
