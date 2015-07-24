import React from 'react'

export default class Body extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="Sidebar">
          {this.props.sidebar}
        </div>
        <div className="Main">
          {this.props.main}
        </div>
      </div>
    );
  }
}
