import { connect } from 'react-redux';

import Menu from './Menu';

const mapStateToProps = (state) => {
  return {
    scrollKey: state.scrollKey
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu);

export default MenuContainer;
