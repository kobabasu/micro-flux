import React from 'react'
import { Link } from 'react-router'

export default class Front extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="Front">
        {this.props.header}
        {this.props.main}
      </div>
    );
  }
}
