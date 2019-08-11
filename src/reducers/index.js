import { combineReducers } from 'redux';
import { moviesReducer } from './movies';
import { detailsReducer } from './details';

const rootReducer = combineReducers({
 moviesReducer,
 detailsReducer,
})

export default rootReducer;