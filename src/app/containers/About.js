import React, { Component, Fragment } from 'react';

import MainHeader from '../components/MainHeader';
import { LottieProgrammer } from '../components/LottieControl';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      app,
      history,
    } = this.props;

    return (
      <Fragment>
        <MainHeader history={history} />
        <div className="container">
          <LottieProgrammer index={1} />
        </div>
      </Fragment>
    );
  }
}

export default About;
