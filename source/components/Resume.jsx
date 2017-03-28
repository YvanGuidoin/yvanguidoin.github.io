import React from 'react';
import { Col } from 'react-bootstrap';

import Parallax from "./Parallax";
import Experiences from "./Experiences";
import Formations from "./Formations";
import Interests from "./Interests";
import Contact from './Contact';
import Me from "./Me";
import ScrollerEmitter from './ScrollerEmitter';

class Resume extends React.Component {
  render(){
    return (
      <Col className="paddingTopForNavbar">
        <ScrollerEmitter onEnter={this.props.scrollChange} scrollKey={1}>
          <Me resume={this.props.resume} />
        </ScrollerEmitter>
        <Parallax />
        <ScrollerEmitter onEnter={this.props.scrollChange} scrollKey={2}>
          <Experiences experiences={this.props.resume.experiences} />
        </ScrollerEmitter>
        <Parallax />
        <ScrollerEmitter onEnter={this.props.scrollChange} scrollKey={3}>
          <Formations formations={this.props.resume.formations} />
        </ScrollerEmitter>
        <Parallax />
        <ScrollerEmitter onEnter={this.props.scrollChange} scrollKey={4}>
          <Interests interests={this.props.resume.interests} />
        </ScrollerEmitter>
        <Parallax />
        <ScrollerEmitter onEnter={this.props.scrollChange} scrollKey={5}>
          <Contact resume={this.props.resume} />
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
