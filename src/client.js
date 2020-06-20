import React from 'react';
import { hydrate } from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { createBrowserHistory } from 'history';

import reducers from './app/reducers/index';
import App from './app/containers/App';

const { hostname = '' } = window.location;
const history = createBrowserHistory();
const preloadedState = window.INITIAL_STATE;

const store = createStore(reducers, preloadedState);
const { app = {} } = preloadedState;

const component = (
  <Provider store={store}>
    <Router history={history}>
      <App
        app={app}
        hostname={hostname}
      />
    </Router>
  </Provider>
);

hydrate(
  component,
  document.getElementById('content'),
);