import React from 'react'
import { Link } from 'react-router'

export default class Admin extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="Admin">
        {this.props.header}
        {this.props.main}
      </section>
    );
  }
}
