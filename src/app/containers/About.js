import React, { Component, Fragment } from 'react';
import { Helmet } from "react-helmet";

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

    const title = "關於我";
    const description = "網站前端工程師，略懂後端";

    return (
      <Fragment>
        <Helmet>
          <title>{`${title} - 在你的SPA裡加點SSR`}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={`${title} - 在你的SPA裡加點SSR`} />
          <meta property="og:description" content={description} />
          <meta property="og:site_name" content="在你的SPA裡加點SSR" />
          <meta property="og:url" content={`${app.MAIN_URL}about`} />
          <meta itemProp="name" content={`${title} - 在你的SPA裡加點SSR`} />
          <meta itemProp="description" content={description} />
          <link rel="canonical" href={`${app.MAIN_URL}about`} />
        </Helmet>
        <MainHeader history={history} />
        <div className="container">
          <LottieProgrammer />
        </div>
      </Fragment>
    );
  }
}

export default About;
