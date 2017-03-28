// React
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { createStore, applyMiddleware } from 'redux';
import controlApp from './reducers';

// React Redux
import { Provider } from 'react-redux';

// CSS
import './App.scss';

// Resume Data
import DataMiddleware from './DataMiddleware';

import AppContainer from './AppContainer';

const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd(action.type);
  return result;
}

let store = createStore(controlApp, applyMiddleware(logger, DataMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
