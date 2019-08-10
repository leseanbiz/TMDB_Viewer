import { FETCH_MOVIES, ADD_MOVIES } from '../constants/actionTypes';

export function fetchMovies(query) {
 console.log("fetchMovies Action", query);
 return { type: FETCH_MOVIES, query: query}
}

export function addMovies(movies) {
 console.log("addMovies Action", movies);
 return { type: ADD_MOVIES, payload: movies}
}
