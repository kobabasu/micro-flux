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
          <li><Link to="/sample/">home</Link></li>
          <li><Link to="/sample/count">count</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
