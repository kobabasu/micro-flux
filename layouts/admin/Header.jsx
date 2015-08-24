import React from 'react'
import { Link } from 'react-router'

export default class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="Header">
        <p>Header</p>

        <ul>
          <li><Link to="/src/sample/">front home</Link></li>
          <li><Link to="/src/sample/sample">front sample</Link></li>
          <li><Link to="/src/sample/admin">admin home</Link></li>
          <li><Link to="/src/sample/count">admin count</Link></li>
        </ul>

        {this.props.children}
      </section>
    );
  }
}
