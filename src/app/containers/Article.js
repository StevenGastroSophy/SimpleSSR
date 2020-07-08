import React, { Component, Fragment } from 'react';
import { Helmet } from "react-helmet";
import marked from 'marked';

import stripHtmlTags from '../utility/stripHtmlTags';
import MainHeader from '../components/MainHeader';
import Marked from '../components/Marked';
import NavBar from '../components/NavBar';
import getArticleByCode from '../components/Articles/getArticleByCode';
import getTitleByCode from '../components/NavBar/getTitleByCode';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      app,
      match = {},
      history,
    } = this.props;

    const { params = {} } = match;
    const { code = '' } = params;
    const text = getArticleByCode(code);

    const title = getTitleByCode(code);
    const description = stripHtmlTags(marked(text)).slice(0, 100);

    return (
      <Fragment>
        <Helmet>
          <title>{`${title} - 在你的SPA裡加點SSR`}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={`${title} - 在你的SPA裡加點SSR`} />
          <meta property="og:description" content={description} />
          <meta property="og:site_name" content="在你的SPA裡加點SSR" />
          <meta property="og:url" content={app.MAIN_URL + history.location.pathname.substring(1) + history.location.search} />
          <meta itemProp="name" content={`${title} - 在你的SPA裡加點SSR`} />
          <meta itemProp="description" content={description} />
          <link rel="canonical" href={app.MAIN_URL + history.location.pathname.substring(1)} />
        </Helmet>
        <MainHeader history={history} />
        <div className="container">
          <div className="row">
            <div className="col-sm-7 col-sm-offset-1">
              <Marked text={text} />
            </div>
            <div className="mtNav col-sm-4 pull-right text-left">
              <NavBar currentCode={code} history={history} />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Article;
