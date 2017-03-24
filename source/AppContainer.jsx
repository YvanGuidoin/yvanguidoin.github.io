import { connect } from 'react-redux';

import { newFetchData } from './actions';
import App from './App';

const mapStateToProps = (state) => {
  return {
    resume: state.resume,
    fetching: state.fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
     getData: () => dispatch(newFetchData(null))
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
