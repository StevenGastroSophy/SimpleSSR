import React, { Component, Fragment } from 'react';
import { Helmet } from "react-helmet";

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

    const title = "開始";
    const description = "從安裝 npm開始，一步一步動手建立一個 Hybrid SSR Server";

    return (
      <Fragment>
        <Helmet>
          <title>{`${title} - 在你的SPA裡加點SSR`}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={`${title} - 在你的SPA裡加點SSR`} />
          <meta property="og:description" content={description} />
          <meta property="og:site_name" content="在你的SPA裡加點SSR" />
          <meta property="og:url" content={app.MAIN_URL} />
          <meta itemProp="name" content={`${title} - 在你的SPA裡加點SSR`} />
          <meta itemProp="description" content={description} />
          <link rel="canonical" href={app.MAIN_URL} />
        </Helmet>
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
              onClick={() => { history.push("/article/"); }}
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
