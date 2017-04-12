import { connect } from 'react-redux';

import { newEnterSection, newLeaveSection } from '../actions';
import Resume from './Resume';

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
     enterSection: (n) => dispatch(newEnterSection(n)),
     leaveSection: (n) => dispatch(newLeaveSection(n))
  }
}

const ResumeContainer = connect(mapStateToProps, mapDispatchToProps)(Resume);

export default ResumeContainer;
