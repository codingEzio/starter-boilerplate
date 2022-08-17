import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './views/pages/Home';
import AboutPage from './views/pages/AboutPage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/about" component={AboutPage} />
    </Switch>
  );
};

export default Routes;
