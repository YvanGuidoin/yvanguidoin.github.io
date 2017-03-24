import * as actions from './actions';

export default function DataMiddleware(store) {
  return next => action => {
    if(action.type === actions.FETCH_DATA){
      fetch("resume.json")
        .then(response => response.json())
        .then(data => console.info(data))
        // .then(data => store.dispatch(actions.newFetchDataSuccess(data)))
        .catch(err => console.error(err))
    }
    return next(action);
  }
};
