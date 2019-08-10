import { FETCH_MOVIES, ADD_MOVIES } from '../constants/actionTypes';

export function addMovies(movies) {
 return { type: ADD_MOVIES, payload: movies}
}