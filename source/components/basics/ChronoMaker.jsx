import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/lib/Row';

class ChronoMaker extends React.PureComponent {
  render() {
    let childrenBlock = this.props.children.map((x, index) => (
      <li data-date={x.props.datadate} key={index}>
        <div className="bulle">
          <Row className="marginZero">
            {x}
          </Row>
        </div>
      </li>
    ));
    return (
      <div className="chrono">
        <ul>
          {childrenBlock}
        </ul>
      </div>
    );
  }
}

ChronoMaker.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
}

export default ChronoMaker;
