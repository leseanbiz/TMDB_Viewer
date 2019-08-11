import { FETCH_MOVIES, ADD_MOVIES, NEXT_PAGE, PREVIOUS_PAGE, FETCH_DETAILS, ADD_DETAILS} from '../constants/actionTypes';
import { takeEvery, put } from 'redux-saga/effects';

let PAGE_NUM = 1;
const MOVIE_DB_BASE_URL = "https://api.themoviedb.org/3/search/movie?page=";
const MOVIE_DB_QUERY_PARAMS = "&include_adult=false&language=en-US&api_key=";
const MOVIE_DB_DETAILS_URL = "https://api.themoviedb.org/3/movie/";
const API_KEY = "057dfa32a18eed0f2dc23dc2e80ed8a0";

export function* fetchMoviesSagaWatcher() {
 // console.log("fetchMoviesSagaWatcher entered")
 yield takeEvery(FETCH_MOVIES, fetchMoviesSagaWorker);
}

function* fetchMoviesSagaWorker(action) {
 // console.log("fetchMoviesWorkerSaga entered", action.query)
 if(!action.query) { return alert("please enter a search value") }
 const json = yield fetch(`${MOVIE_DB_BASE_URL + PAGE_NUM + MOVIE_DB_QUERY_PARAMS + API_KEY}&query=${action.query}`)
                          .then(response => response.json())
 yield put({ type: ADD_MOVIES, payload: json});
}

//setup pagination saga
export function* paginationSagaWatcher() {
 // console.log("paginationSagaWatcher entered")
 yield takeEvery([NEXT_PAGE, PREVIOUS_PAGE], paginationSagaWorker)
}

function* paginationSagaWorker(action) {
 // console.log("paginationSagaWorker entered", action.num, action.query)
 const json = yield fetch(`${MOVIE_DB_BASE_URL + action.num + MOVIE_DB_QUERY_PARAMS + API_KEY}&query=${action.query}`)
                          .then(response => response.json())
                          // console.log(json);
 yield put({ type: ADD_MOVIES, payload: json});
}

export function* movieDetailsSagaWatcher() {
 console.log("paginationSagaWorker entered");
 yield takeEvery(FETCH_DETAILS, movieDetailsSagaWorker);
}

// example details URL: https://api.themoviedb.org/3/movie/550?api_key=057dfa32a18eed0f2dc23dc2e80ed8a0&language=en-US

function* movieDetailsSagaWorker(action) {
 const json = yield fetch(`${MOVIE_DB_DETAILS_URL + action.id}?api_key=${API_KEY}&language=en-US`)
                          .then(response => response.json())
                          console.log(json);
 yield put({ type: ADD_DETAILS, payload: json});
}


//setup saga to call with ID to get further details aout the film(cast, etc)
