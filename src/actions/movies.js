import { FETCH_MOVIES, ADD_MOVIES } from '../constants/actionTypes';

export function addMovies(movies) {
 console.log("addMovies Action", movies);
 return { type: ADD_MOVIES, payload: movies}
}