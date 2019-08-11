import { takeEvery } from 'redux-saga/effects';
import { FETCH_DETAILS } from '../constants/actionTypes';
import { movieDetailsSagaWorker } from '../api/details';

export function* movieDetailsSagaWatcher() {
 yield takeEvery(FETCH_DETAILS, movieDetailsSagaWorker);
}