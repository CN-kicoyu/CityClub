'use strict';

import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import TabSubNav from '../../components/TabSubNav'
import px2dp from '../../utils/px2dp';

export default class GoodsSell extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'flex-start' }}>
        <View style={styles.headWrap} >
          <Text style={styles.headTitle}>电商</Text>
          <Image style={styles.headSearch} source={require('../../assets/images/icon_search.png')} />
        </View>
        <View style={styles.tabWrap}>
          <TabSubNav navigator={this.props.navigator} />
          <View style={styles.tabDown}>
            <Image style={styles.tabDownIcon} source={require('../../assets/images/icon_arrow-down.png')} />
          </View>

        </View>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  headWrap: {
    backgroundColor: '#4f95ff',
    position: 'relative'
  },
  headTitle: {
    padding: px2dp(24),
    color: '#fff',
    fontSize: px2dp(38),
    alignSelf: 'center'
  },
  headSearch: {
    position: 'absolute',
    width: px2dp(41),
    height: px2dp(35),
    top: '50%',
    right: px2dp(26),
    marginTop: px2dp(-17.5)
  },
  tabWrap: {
    flex: 1,
    height: px2dp(110),
    position: 'relative',

  },
  tabDown: {
    width: px2dp(100),
    backgroundColor: '#fff',
    height: px2dp(110),
    borderLeftWidth: 1,
    borderLeftColor: '#e5e5e5',
    shadowOffset: { width: 2, height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.9,
    shadowRadius: 1,
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    borderBottomColor: '#efefef',
    borderBottomWidth: 1
  },
  tabDownIcon: {
    marginTop: px2dp(50),
    width: px2dp(30),
    height: px2dp(17),
    alignItems: 'center',
    flexDirection: 'column',
  }
})