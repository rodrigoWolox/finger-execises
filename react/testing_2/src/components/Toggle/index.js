import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Toggle extends Component {
  render() {
    const {children} = this.props
    return (
      <div className="toggle">
        <button onClick={this.props.onToggle}>
          {children}
        </button>
      </div>
    )
  }
}

Toggle.propTypes = {
  onToggle: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
}

export default Toggle