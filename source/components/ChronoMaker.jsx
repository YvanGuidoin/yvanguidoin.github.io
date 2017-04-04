import React from 'react';
import { Row } from 'react-bootstrap';

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
  children: React.PropTypes.arrayOf(React.PropTypes.element)
}

export default ChronoMaker;
