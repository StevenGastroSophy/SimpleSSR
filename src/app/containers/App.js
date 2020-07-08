import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './Home';
import Article from './Article';
import About from './About';
import PageNotFound from './PageNotFound';

const App = ({ app, hostname }) => {
  const bindAppProps = Component => props => <Component {...props} app={app} />;

  const renderHome = bindAppProps(Home);
  const renderArticle = bindAppProps(Article);
  const renderAbout = bindAppProps(About);
  const renderPageNotFound = bindAppProps(PageNotFound);

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
        path={`/about`}
        component={renderAbout}
      />
      <Route
        path={`/404`}
        component={renderPageNotFound}
      />
      <Redirect to="/404" />
    </Switch>
  );
}

export default App;
