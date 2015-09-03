import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="Home">
        <DocumentTitle title="Front Home" />
        <p>Home</p>

      </section>
    );
  }
}
