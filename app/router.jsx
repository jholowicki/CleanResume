import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './components/layouts/main-layout';

// Pages
import welcome from './components/welcome';
import SignUpContainer from './components/containers/sign-up-container';
import LoginContainer from './components/containers/log-in-container';

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={welcome} />
    </Route>
  </Router >
);
