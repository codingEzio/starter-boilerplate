import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './views/pages/Home';
import AboutPage from './views/pages/AboutPage';
import NotFoundPage from './views/pages/NotFoundPage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/not-found" component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;
