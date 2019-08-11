import { FETCH_MOVIES, ADD_MOVIES, NEXT_PAGE, PREVIOUS_PAGE } from '../constants/actionTypes';

export function fetchMovies(query) {
 console.log("fetchMovies Action", query);
 return { type: FETCH_MOVIES, query: query}
}

export function addMovies(movies) {
 console.log("addMovies Action", movies);
 return { type: ADD_MOVIES, payload: movies}
}

export function nextPage(num) {
 console.log("nextPage Action", "num:", num);
 return { type: NEXT_PAGE, num: num}
}

export function previousPage(num) {
  console.log("previousPage Action", "num:", num);
  return { type: PREVIOUS_PAGE, num: num}
}
