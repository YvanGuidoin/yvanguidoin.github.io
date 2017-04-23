import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/lib/Col';

import Parallax from "./basics/Parallax";
import Experience from './Experience';
import Formation from "./Formation";
import Interest from "./Interest";
import Contact from './Contact';
import Me from "./Me";
import ScrollerEmitter from './basics/ScrollerEmitter';
import ChronoMaker from './basics/ChronoMaker';

class Resume extends React.PureComponent {
  render(){
    let resume = this.props.resume, enter = this.props.enterSection, leave = this.props.leaveSection; // LISIBILITY
    let experiences = resume.experiences.map((x, index) => <Experience datadate={x.begin} key={index} exp={x} />);
    let formations = resume.formations.map((x, index) => <Formation datadate={x.end} key={index} form={x} />);
    let interests = resume.interests.map((x, index) => <Interest key={index} int={x} />);
    return (
      <Col className="paddingTopForNavbar">
        <ScrollerEmitter onE={enter} onL={leave} scrollKey={1} idZone="me">
          <Me resume={resume} />
        </ScrollerEmitter>
        <Parallax />
        <ScrollerEmitter onE={enter} onL={leave} scrollKey={2} idZone="desc">
          <pre className="desc">{resume.description}</pre>
        </ScrollerEmitter>
        <Parallax />
        <ScrollerEmitter onE={enter} onL={leave} scrollKey={3} idZone="exp">
          <ChronoMaker>
            {experiences}
          </ChronoMaker>
        </ScrollerEmitter>
        <Parallax />
        <ScrollerEmitter onE={enter} onL={leave} scrollKey={4} idZone="form">
          <ChronoMaker>
            {formations}
          </ChronoMaker>
        </ScrollerEmitter>
        <Parallax />
        <ScrollerEmitter onE={enter} onL={leave} scrollKey={5} idZone="int">
          {interests}
        </ScrollerEmitter>
        <Parallax />
        <ScrollerEmitter onE={enter} onL={leave} scrollKey={6} idZone="links">
          <Contact resume={resume} />
        </ScrollerEmitter>
        <Parallax />
      </Col>
    );
  }
}

Resume.propTypes = {
  enterSection: PropTypes.func.isRequired,
  leaveSection: PropTypes.func.isRequired,
  resume: PropTypes.object.isRequired
}

export default Resume;
