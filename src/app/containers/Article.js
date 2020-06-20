import React, { Component } from 'react';

import Marked from '../components/Marked';
import NavBar from '../components/NavBar';
import getArticleByCode from '../components/articles/getArticleByCode';

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

    return (
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
    );
  }
}

export default Article;
