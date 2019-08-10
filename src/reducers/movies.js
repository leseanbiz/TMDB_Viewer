import { FETCH_MOVIES, ADD_MOVIES } from '../constants/actionTypes';

import { FETCH_MOVIES, ADD_MOVIES } from '../constants/actionTypes';

export function moviesReducer(state = INIT_STATE, action) {
 switch (action.type) {
  case ADD_MOVIES:
   return {...state, action}
  default:
   return state;
  }

}