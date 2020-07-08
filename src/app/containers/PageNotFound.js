import React, { Component, Fragment } from 'react';
import { Helmet } from "react-helmet";

import MainHeader from '../components/MainHeader';
import { LottiePageNotFound } from '../components/LottieControl';

class PageNotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      app,
      history,
    } = this.props;

    const title = "網頁找不著";
    const description = "找不到你要的網頁";

    return (
      <Fragment>
        <Helmet>
          <title>{`${title} - 在你的SPA裡加點SSR`}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={`${title} - 在你的SPA裡加點SSR`} />
          <meta property="og:description" content={description} />
          <meta property="og:site_name" content="在你的SPA裡加點SSR" />
          <meta property="og:url" content={`${app.MAIN_URL}404`} />
          <meta itemProp="name" content={`${title} - 在你的SPA裡加點SSR`} />
          <meta itemProp="description" content={description} />
          <link rel="canonical" href={`${app.MAIN_URL}404`} />
        </Helmet>
        <MainHeader history={history} />
        <div className="container">
          <LottiePageNotFound />
        </div>
      </Fragment>
    );
  }
}

export default PageNotFound;