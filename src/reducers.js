import { combineReducers } from 'redux'
import { INCREASE_STORE, DECREASE_STORE, FETCH_USER_SUCCESS, FETCH_USER_FAILED } from './constants';

const counter = (state = { number: 0 }, action) => {
  switch(action.type) {
    case INCREASE_STORE:
      return {
        number: state.number + 1
      };
    case DECREASE_STORE:
      return {
        number: state.number - 1
      };
    default:
      return state;
  }
}

const user = (state = {}, action) => {
  switch(action.type) {
    case FETCH_USER_SUCCESS:
      return {
        ...action.payload
      };
    case FETCH_USER_FAILED:
      return {};
    default:
      return state;
  }
}

export default combineReducers({
  counter,
  user
});
