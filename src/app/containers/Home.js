import React, { Component, Fragment } from 'react';

import MainHeader from '../components/MainHeader';

class Home extends Component {
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
      </Fragment>
    );
  }
}

export default Home;
