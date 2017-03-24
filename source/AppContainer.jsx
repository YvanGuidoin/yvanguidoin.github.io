import { connect } from 'react-redux';

import { newExample } from './actions';
import App from './App';

const mapStateToProps = (state) => {
  return {
    ex: state.ex
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeExample: () => dispatch(newExample(ex))
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
