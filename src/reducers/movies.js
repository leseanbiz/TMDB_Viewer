import { FETCH_MOVIES, ADD_MOVIES } from '../constants/actionTypes';

const INIT_STATE = []

const addMoviesReducerFunc = (state, action) => (
  Object.assign({}, state, 
    {
      page: action.payload.page, 
      total_results: action.payload.total_results, 
      total_pages: action.payload.total_pages, 
      results: [...action.payload.results]
    }
  )
)

export function moviesReducer(state = INIT_STATE, action) {
  console.log("moviesReducer", "state: ", state, "action:", action);
 switch (action.type) {
  case ADD_MOVIES:
   console.log("ADD_MOVIES", "state: ", state, "action:", action.payload);
   return addMoviesReducerFunc(state, action);
  default:
   return state;
  }
}