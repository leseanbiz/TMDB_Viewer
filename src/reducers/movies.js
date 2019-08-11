import { ADD_MOVIES } from '../constants/actionTypes';

const INIT_MOVIES_STATE = []

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

export function moviesReducer(state = INIT_MOVIES_STATE, action) {
 switch (action.type) {
  case ADD_MOVIES:
    return addMoviesReducerFunc(state, action);
  default:
   return state;
  }
}
