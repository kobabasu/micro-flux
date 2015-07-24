import React from 'react'
import BrowserHistory from 'react-router/lib/BrowserHistory'
import { Router, Route } from 'react-router'

import Body from './components/Body'
import Nav from './components/Nav'
import Home from './components/Home'
import Count from './components/Count'
import NoMatch from './components/NoMatch'

const routes = (
  <Router history={new BrowserHistory}>
    <Route component={Body}>
      <Route path="/sample/" components={{main: Home, sidebar: Nav}} />
      <Route path="/sample/count" components={{main: Count, sidebar: Nav}} />
    </Route>
    <Route path="*" components={NoMatch} />
  </Router>
);

module.exports = routes;
