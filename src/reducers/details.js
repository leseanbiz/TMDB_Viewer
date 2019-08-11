import { ADD_DETAILS } from '../constants/actionTypes';


const INIT_DETAILS_STATE = {}

const addDetailsReducerFunc = (state, action) => {
  console.log("addDetailsReducerFunc entered", state, action.payload);
  return Object.assign({}, state, action.payload);
}

export function detailsReducer(state = INIT_DETAILS_STATE, action) {
  console.log("detailsReducer", "state: ", state, "action:", action);
  switch (action.type) { 
    case ADD_DETAILS:
      console.log("ADD_DETAILS reducer", "state: ", state, "action:", action.payload);
      return addDetailsReducerFunc(state, action);
    default:
      return state; 
  }
}
