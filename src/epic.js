import 'rxjs';
import { combineEpics } from 'redux-observable';
import { INCREASE, DECREASE, INCREASE_STORE, DECREASE_STORE, FETCH_USER } from "./constants";
import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs'
import { fetchUserSuccess, fetchUserFailed } from './actions'

export const increaseNumber = action$ =>
  action$.ofType(INCREASE)
    .delay(2000)
    .mapTo({ type: INCREASE_STORE });

export const decreaseNumber = action$ =>
  action$.ofType(DECREASE)
    .delay(2000)
    .mapTo({ type: DECREASE_STORE });

export const searchEpic = action$ =>
  action$.ofType(FETCH_USER)
    .mergeMap(action =>
      ajax.getJSON(`https://api.github.com/users/${action.payload.username}`)
        .map(user => fetchUserSuccess(user))
        .takeUntil(action$.ofType(FETCH_USER))
        .catch(e => Observable.of(fetchUserFailed()))
    );

export default combineEpics(
  increaseNumber,
  decreaseNumber,
  searchEpic
)
