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
      <Route path="/src/sample/"
        components={{
          header: FrontHeader,
          main: FrontHome
        }} />

      <Route path="/src/sample/sample"
        components={{
          header: FrontHeader,
          main: FrontSample
        }} />
    </Route>

    <Route component={Admin}>
      <Route path="/src/sample/admin"
        components={{
          header: AdminHeader,
          main: AdminHome
        }} />

      <Route path="/src/sample/count"
        components={{
          header: AdminHeader,
          main: Count
        }} />
    </Route>

    <Route path="*" components={NoMatch} />
  </Router>
);

module.exports = routes;
