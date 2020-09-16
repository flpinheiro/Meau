import React, { Component } from 'react';
import { Icon } from 'expo';

import Colors from '../constants/Colors';

export default class GeneralIcon extends Component {
  render() {
    return (
      <Icon.MaterialIcons
        name={this.props.name}
        size={this.props.size}
        style={this.props.style}
        color={Colors.tabIconDefault}
      />
    );
  }
}