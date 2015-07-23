import React from 'react'
import { Router, Route } from 'react-router'
import { history } from 'react-router/lib/BrowserHistory'
import Count from './components/Count'
import NoMatch from './components/NoMatch'


React.render((
  <Router history={history}>
    <Route path="/" component={Count}/>
    <Route path="counts" component={NoMatch}/>
    <Route path="*" component={NoMatch}/>
  </Router>
), document.getElementById('main'));
