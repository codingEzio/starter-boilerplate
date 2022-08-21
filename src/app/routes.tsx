import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Container } from '@material-ui/core';

import Main from './views/pages/Home';
import AboutPage from './views/pages/AboutPage';
import NotFoundPage from './views/pages/NotFoundPage';
import Dashboard from './layouts/dashboard-layout';
import DashboardDefaultContent from './views/dashboard/dashboard-default-content';
import SettingsAndPrivacy from './views/dashboard/settings-and-privacy';

const Routes = () => {
  return (
    <Suspense>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={AboutPage} />

        <Route
          exact
          path="/about"
          component={lazy(() => import('./views/pages/AboutPage'))}
        />

        <Route
          exact
          path={'/dashboard'}
          render={({ match: { path } }) => (
            <Dashboard>
              <Switch>
                <Route
                  exact
                  path={path + '/'}
                  component={lazy(() =>
                    import('./views/dashboard/dashboard-default-content'),
                  )}
                />

                <Route
                  exact
                  path={path + '/settings-and-privacy'}
                  component={lazy(() =>
                    import('./views/dashboard/settings-and-privacy'),
                  )}
                />
              </Switch>
            </Dashboard>
          )}
        />

        <Route exact path="/not-found" component={NotFoundPage} />
        <Redirect from={'*'} to={'/not-found'} exact />
      </Switch>
    </Suspense>
  );
};

export default Routes;
