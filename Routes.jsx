import React from 'react'
import BrowserHistory from 'react-router/lib/BrowserHistory'
import { Router, Route } from 'react-router'

// components
import Count        from './components/Count'

// layouts
import NoMatch      from './layouts/NoMatch'

// layouts/admin
import Admin        from './layouts/admin/Admin'
import AdminHeader  from './layouts/admin/Header'

// layouts/front
import Front        from './layouts/front/Front'
import FrontHeader  from './layouts/front/Header'

// pages/admin
import AdminHome    from './pages/admin/Home'

// pages/front
import FrontHome    from './pages/front/Home'
import FrontSample  from './pages/front/Sample'

const routes = (
  <Router history={new BrowserHistory}>
    <Route component={Front}>
      <Route path="/"
        components={{
          header: FrontHeader,
          main: FrontHome
        }} />
    </Route>

    <Route component={Admin}>
      <Route path="/admin/"
        components={{
          header: AdminHeader,
          main: AdminAdd
        }} />
    </Route>

    <Route path="*" components={NoMatch} />
  </Router>
);

module.exports = routes;
