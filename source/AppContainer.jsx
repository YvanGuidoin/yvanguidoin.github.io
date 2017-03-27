import { connect } from 'react-redux';

import { newFetchData } from './actions';
import App from './App';

const mapStateToProps = (state) => {
  return {
    resume: state.resume,
    received: state.received
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
     getData: () => dispatch(newFetchData(null))
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
