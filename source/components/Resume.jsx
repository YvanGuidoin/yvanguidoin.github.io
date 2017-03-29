import React from 'react';
import { Col } from 'react-bootstrap';

import Parallax from "./Parallax";
import Experience from './Experience';
import Formation from "./Formation";
import Interest from "./Interest";
import Contact from './Contact';
import Me from "./Me";
import ScrollerEmitter from './ScrollerEmitter';
import ChronoMaker from './ChronoMaker';

class Resume extends React.Component {
  render(){
    let resume = this.props.resume, scrollChange = this.props.scrollChange; // LISIBILITY
    let experiences = resume.experiences.map((x, index) => <Experience datadate={x.begin} key={index} exp={x} />);
    let formations = resume.formations.map((x, index) => <Formation datadate={x.end} key={index} form={x} />);
    let interests = resume.interests.map((x, index) => <Interest key={index} int={x} />);
    return (
      <Col className="paddingTopForNavbar">
        <ScrollerEmitter onEnter={scrollChange} scrollKey={1} idZone="me">
          <Me resume={resume} />
        </ScrollerEmitter>
        <Parallax />
        <ScrollerEmitter onEnter={scrollChange} scrollKey={2} idZone="exp">
          <ChronoMaker>
            {experiences}
          </ChronoMaker>
        </ScrollerEmitter>
        <Parallax />
        <ScrollerEmitter onEnter={scrollChange} scrollKey={3} idZone="form">
          <ChronoMaker>
            {formations}
          </ChronoMaker>
        </ScrollerEmitter>
        <Parallax />
        <ScrollerEmitter onEnter={scrollChange} scrollKey={4} idZone="int">
          {interests}
        </ScrollerEmitter>
        <Parallax />
        <ScrollerEmitter onEnter={scrollChange} scrollKey={5} idZone="links">
          <Contact resume={resume} />
        </ScrollerEmitter>
        <Parallax />
      </Col>
    );
  }
}

Resume.propTypes = {
  scrollChange: React.PropTypes.func.isRequired,
  resume: React.PropTypes.object.isRequired
}

export default Resume;
