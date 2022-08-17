import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './views/pages/Home';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
    </Switch>
  );
};

export default Routes;
