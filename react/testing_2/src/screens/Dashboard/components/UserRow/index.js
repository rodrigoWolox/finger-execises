import React, { Component } from 'react';

import Toggle from '../../../../components/Toggle';

import './styles.css';

class UserRow extends Component {
  state={isActive: this.props.user.active}

  toggleActive = () => this.setState({isActive: !this.state.isActive})

  render() {
    return (
      <div className={`user-row ${this.state.isActive ? '' : 'toggle-off'}`}>
        <h3>{this.props.user.name}</h3>
        <Toggle onToggle={this.toggleActive}>
          {this.state.isActive ? 'Desactivar' : 'Activar'}
        </Toggle>
      </div>
    );
  }
}

export default UserRow;
