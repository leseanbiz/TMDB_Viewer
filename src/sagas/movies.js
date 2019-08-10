import { FETCH_MOVIES, ADD_MOVIES } from '../constants/actionTypes';
import { takeEvery, put } from 'redux-saga/effects';

const MOVIE_DB_BASE_URL = "https://api.themoviedb.org/3/search/movie?page=2&include_adult=false&language=en-US&api_key=";
const API_KEY = "057dfa32a18eed0f2dc23dc2e80ed8a0";

export function* fetchMoviesSagaWatcher() {
 console.log("fetchMoviesSagaWatcher entered")
 yield takeEvery(FETCH_MOVIES, fetchMoviesSagaWorker)
}

//setup pagination saga

//setup saga to call with ID to get further details aout the film(cast, etc)

function* fetchMoviesSagaWorker(action) {
 console.log("fetchMoviesWorkerSaga entered", action.query)
 if(!action.query) { return alert("please enter a search value") }
 const json = yield fetch(MOVIE_DB_BASE_URL + API_KEY + "&query=" + action.query)
                          .then(response => response.json())
                          console.log(json);
 yield put({ type: ADD_MOVIES, payload: json.results});
 // setup reducer to get total_pages, pagination, display total_results
}
