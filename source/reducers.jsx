import * as actions from './actions';

const initialState = {
  resume: null,
  fetching: false,
  received: false
}

export default function controlApp(state = initialState, action) {
  switch(action.type){
    case actions.FETCH_DATA:
      return {
        ...state,
        fetching: true,
      };
    case actions.FETCH_DATA_SUCCESS:
      return {
        ...state,
        resume: action.data,
        fetching: false
      };
    case actions.FETCH_DATA_RECEIVED:
      return {
        ...state,
        received: true
      };
    default:
      return state;
  }
}
