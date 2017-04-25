'use strict';

import React, { Component } from 'react'
import { Text, View } from 'react-native'
import TabNavBar from '../components/TabNavBar'

export default class MainPages extends Component {
  render() {
    return (
      <TabNavBar navigator={this.props.navigator} />
    )
  }
}