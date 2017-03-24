import * as actions from './actions';

const initialState = {
  ex: "test"
}

export default function controlApp(state = initialState, action) {
  switch(action.type){
    case actions.EXAMPLE:
      return Object.assign({}, state, {
        ex: actions.ex
      });
    default:
      return state;
  }
}
