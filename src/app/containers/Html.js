import React, { Component } from 'react';

class Html extends Component {
  render() {
    const {
      content,
      store,
    } = this.props;

    const {
      PORT = 8080,
      STATIC_URL = `http://localhost:${PORT}/static/`,
      CSS_URL = `http://localhost:${PORT}/static/css/`,
    } =  process.env;

    return (
      <html lang="zh-TW">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta httpEquiv="x-ua-compatible" content="IE=edge" />
          <link rel="stylesheet" href={`${CSS_URL}bootstrap.css`} />
          <link rel="stylesheet" href={`${CSS_URL}react-image-lightbox.css`} />
          <link rel="stylesheet" href={`${CSS_URL}index.css`} />
          <link rel="stylesheet" href={`${CSS_URL}darkMarkdown.css`} />
          <link rel="stylesheet" href={`${CSS_URL}Article.css`} />
        </head>
        <body>
          <div id="content" dangerouslySetInnerHTML={{ __html: content }} />
          <script dangerouslySetInnerHTML={{ __html: `window.INITIAL_STATE=${JSON.stringify(store.getState())};` }} />
          <script type="text/javascript" src={`${STATIC_URL}bundle.js`} />
        </body>
      </html>
    );
  }
}

export default Html;