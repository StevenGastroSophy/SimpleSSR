import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Article from './Article';

const App = ({ app, hostname }) => {
  const bindAppProps = Component => props => <Component {...props} app={app} />;

  const renderHome = bindAppProps(Home);
  const renderArticle = bindAppProps(Article);

  return (
    <Switch>
      <Route
        exact
        path={`/`}
        component={renderHome}
      />
      <Route
        path={`/article/:code?`}
        component={renderArticle}
      />
      <Route
        component={renderHome}
      />
    </Switch>
  );
}

export default App;
