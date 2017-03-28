import { connect } from 'react-redux';

import { newScrollKeyChange } from '../actions';
import Resume from './Resume';

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
     scrollChange: (n) => dispatch(newScrollKeyChange(n))
  }
}

const ResumeContainer = connect(mapStateToProps, mapDispatchToProps)(Resume);

export default ResumeContainer;
