import React from 'react';
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
    <Switch>
      <Container>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/not-found" component={NotFoundPage} />

        <Route
          path={'/dashboard'}
          render={({ match: { path } }) => (
            <Dashboard>
              <Switch>
                <Route
                  exact
                  path={path + '/'}
                  component={DashboardDefaultContent}
                />

                <Route
                  exact
                  path={path + '/settings-and-privacy'}
                  component={SettingsAndPrivacy}
                />
              </Switch>
            </Dashboard>
          )}
        />

        <Redirect from={'*'} to={'/not-found'} exact />
      </Container>
    </Switch>
  );
};

export default Routes;
