import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
// import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
// import { rootSaga } from '../sagas/index';

const logger = createLogger();
// const saga = createSagaMiddleware();

const store = createStore(
 rootReducer,
 compose(
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
 applyMiddleware(logger)
 )
);
console.log("store", store.getState());

// saga.run(rootSaga);

export default store;