import express from 'express';
import React from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './app/reducers/index';
import Html from './app/containers/Html';
import App from './app/containers/App';

const app = express();
const {
  PORT = 8080,
  MAIN_URL = `http://localhost:${PORT}/`,
  STATIC_URL = `http://localhost:${PORT}/static/`,
  CSS_URL = `http://localhost:${PORT}/static/css/`,
  IMAGE_URL = `http://localhost:${PORT}/static/image/`,
} =  process.env;

app.use('/static', express.static('public'));
app.use((req, res) => {
  const urlConfig = {
    MAIN_URL,
    STATIC_URL,
    CSS_URL,
    IMAGE_URL,
  };

  const store = createStore(reducers, {
    app: urlConfig,
  });

  const context = {};
  const component = (
    <Provider store={store}>
      <StaticRouter
        location={req.url}
        context={context}
      >
        <App app={urlConfig} hostname={req.hostname} />
      </StaticRouter>
    </Provider>
  );
  const content = renderToString(component);
  res.send(`<!doctype html>\n${renderToStaticMarkup(<Html
    content={content}
    store={store}
  />)}`);
});


app.listen(PORT, function () {
  console.log('Express app started on:' + PORT);
});