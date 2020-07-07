import React, { Component, Fragment } from 'react';

import MainHeader from '../components/MainHeader';
import { LottieHome } from '../components/LottieControl';

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
        <div className="container flexContainerIntro">
          <div className="flexLeftIntro">
            <LottieHome index={1} />
          </div>
          <div className="flexRightIntro">
            <div className="text-center lead">
              <h1>在你的SPA裡加點SSR</h1>
            </div>
            <div 
              onClick={() => {history.push("/article/");}}
              className="cursorPointer text-center"
            >
              <div className="introStart">
                開始
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
