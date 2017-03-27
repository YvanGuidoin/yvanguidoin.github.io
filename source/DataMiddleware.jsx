import * as actions from './actions';

export default function DataMiddleware(store) {
  return next => action => {
    if(action.type === actions.FETCH_DATA){
      fetch("resume.json")
        .then(response => response.json())
        // .then(data => console.info(data))
        .then(data => {
          setTimeout(() => store.dispatch(actions.newFetchDataReceived(null)), 1000);
          setTimeout(() => store.dispatch(actions.newFetchDataSuccess(data.resume)), 2500);
        })
        .catch(err => console.error(err));
    }
    return next(action);
  }
}
