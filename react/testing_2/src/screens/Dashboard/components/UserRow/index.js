import React, { Component } from 'react';

import Toggle from '../../../../components/Toggle';

import './styles.css';

class UserRow extends Component {
  state={isActive: this.props.user.active}

  toggleActive = () => this.setState({isActive: !this.state.isActive})

  render() {
    return (
      <div class={`user-row ${this.state.isActive ? '' : 'toggle-off'}`}>
        <h3>{this.props.user.name}</h3>
        <Toggle initialToggledOn={this.state.isActive} onToggle={this.toggleActive} />
      </div>
    );
  }
}

export default UserRow;
