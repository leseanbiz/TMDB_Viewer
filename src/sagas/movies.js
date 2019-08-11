import { FETCH_MOVIES, ADD_MOVIES, NEXT_PAGE, PREVIOUS_PAGE} from '../constants/actionTypes';
import { takeEvery, takeLatest, put } from 'redux-saga/effects';

let PAGE_NUM = 1;
const MOVIE_DB_BASE_URL = "https://api.themoviedb.org/3/search/movie?page=";
const MOVIE_DB_QUERY_PARAMS = "&include_adult=false&language=en-US&api_key=";
const API_KEY = "057dfa32a18eed0f2dc23dc2e80ed8a0";

export function* fetchMoviesSagaWatcher() {
 console.log("fetchMoviesSagaWatcher entered")
 yield takeEvery(FETCH_MOVIES, fetchMoviesSagaWorker);
}

function* fetchMoviesSagaWorker(action) {
 console.log("fetchMoviesWorkerSaga entered", action.query)
 if(!action.query) { return alert("please enter a search value") }
 const json = yield fetch(`${MOVIE_DB_BASE_URL + PAGE_NUM + MOVIE_DB_QUERY_PARAMS + API_KEY}&query=${action.query}`)
                          .then(response => response.json())
                          // console.log(json);
 yield put({ type: ADD_MOVIES, payload: json});
 // setup reducer to get total_pages, pagination, display total_results
}

//setup pagination saga
export function* paginationSagaWatcher() {
 console.log("paginationSagaWatcher entered")
 yield takeEvery([NEXT_PAGE, PREVIOUS_PAGE], paginationSagaWorker)
}

function* paginationSagaWorker(action) {
 console.log("paginationSagaWorker entered", action.num)
 const json = yield fetch(`${MOVIE_DB_BASE_URL + action.num + MOVIE_DB_QUERY_PARAMS + API_KEY}&query=star`)
                          .then(response => response.json())
                          console.log(json);
 yield put({ type: ADD_MOVIES, payload: json});
}




//setup saga to call with ID to get further details aout the film(cast, etc)
