// React
import React from 'react';
import { render } from 'react-dom';
// Redux
import { createStore, applyMiddleware } from 'redux';
import controlApp from './redux/reducers';
// React Redux
import { Provider } from 'react-redux';
// CSS
import './App.scss';
// Resume Data
import DataMiddleware from './redux/DataMiddleware';
// Section handling
import SectionMiddleware from './redux/SectionMiddleware';
// App base container
import AppContainer from './components/AppContainer';

// const logger = store => next => action => {
//   console.group(action.type);
//   console.info('dispatching', action);
//   let result = next(action);
//   console.log('next state', store.getState());
//   console.groupEnd(action.type);
//   return result;
// }

let store = createStore(controlApp, applyMiddleware(DataMiddleware, SectionMiddleware));

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
