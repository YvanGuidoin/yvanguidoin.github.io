import * as actions from './actions';

var actualSection = 1;
var lastSection = actualSection;

export default function SectionMiddleware(store) {
  return next => action => {
    if(action.type === actions.ENTER_SECTION){
      if(action.n != lastSection){
        lastSection = actualSection;
        actualSection = action.n;
      } else actualSection = action.n;
      // console.log("actualSection: " + actualSection);
      // console.log("lastSection: " + lastSection);
      store.dispatch(actions.newScrollKeyChange(actualSection));
    } else if(action.type === actions.LEAVE_SECTION){
      if(action.n == actualSection){
        actualSection = lastSection;
        lastSection = action.n;
      } else lastSection = action.n;
      // console.log("actualSection: " + actualSection);
      // console.log("lastSection: " + lastSection);
      store.dispatch(actions.newScrollKeyChange(actualSection));
    }
    return next(action);
  }
}
