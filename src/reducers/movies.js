import { FETCH_MOVIES, ADD_MOVIES } from '../constants/actionTypes';

const INIT_STATE = []

export function moviesReducer(state = INIT_STATE, action) {
  console.log("moviesReducer", "state: ", state, "action:", action);
 switch (action.type) {
  case ADD_MOVIES:
   console.log("ADD_MOVIES", "state: ", state, "action:", action.payload);
   return [...state, ...action.payload]
  default:
   return state;
  }
}