import { all } from 'redux-saga/effects';
import { fetchMoviesSagaWatcher } from './movies';

export default function* rootSaga() {
 console.log("rootSaga entered")
 yield all([
  fetchMoviesSagaWatcher(),
 ])
}