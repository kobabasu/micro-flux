import React from 'react'
import { Link } from 'react-router'

export default class Nav extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="count">count</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
