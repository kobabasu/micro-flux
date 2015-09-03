import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

export default class Sample extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="Sample">
        <DocumentTitle title="Front Sample" />
        <p>Sample</p>

      </section>
    );
  }
}
