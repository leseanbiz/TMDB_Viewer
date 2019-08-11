import { all } from 'redux-saga/effects';
import { fetchMoviesSagaWatcher, paginationSagaWatcher } from './movies';

export default function* rootSaga() {
 console.log("rootSaga entered")
 yield all([
  fetchMoviesSagaWatcher(),
  paginationSagaWatcher(),
 ])
}