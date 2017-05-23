'use strict';

import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'

import TabSubNav from '../../components/TabSubNav'
import px2dp from '../../utils/px2dp'

export default class HomePage extends Component {
    // 如果需要运用style={styles.headTitle}的话，需要static navigationOptions = ({ navigation }) => ({})，否则会报错

    /*static navigationOptions = ({ navigation }) => ({
        headerTitle: (
            <TouchableOpacity style={styles.headTitle}>
                <Text style={{color: '#fff',fontSize:px2dp(38),marginLeft:px2dp(260)}}>北京</Text>
                <Image source={require('../../assets/images/Arrow.png')}  style={{alignSelf: 'center',width:px2dp(26),height:px2dp(14),marginLeft:px2dp(8)}}/>
            </TouchableOpacity>
        )
    })*/

    // 设置首页导航栏
    static navigationOptions = ({ navigation }) => ({
        // 设置标题
        headerTitle: (
            <TouchableOpacity style={styles.headTitle}>
                <Text style={styles.titleName}>北京</Text>
                <Image source={require('../../assets/images/Arrow.png')} style={styles.titleIcon} />
            </TouchableOpacity>
        ),
        // 设置右边
        headerRight: (
            <TouchableOpacity style={styles.headRight}>
                <Image source={require('../../assets/images/icon_search.png')} style={styles.rightIcon1} />
                <Image source={require('../../assets/images/message.png')} style={styles.rightIcon2} />
            </TouchableOpacity>
        ),
        // 设置左边
        headerLeft: (
            <Image source={require('../../assets/images/home_logo.png')} style={styles.headLeft} />
        ),
        // 设置导航栏的背景颜色
        headerStyle: {
            backgroundColor: '#4f95ff'
        }
    })

    static defaultProps = {
        mode: 'Home'
    }
    
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                <View style={styles.tabWrap}>
                    <TabSubNav onPress={(id) => this.props.navigation.navigate('HomeDetail',{id: id})} mode={this.props.mode}/>
                    <View style={styles.tabDown}>
                        <Image style={styles.tabDownIcon} source={require('../../assets/images/icon_arrow-down.png')} />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleName: {
        color: '#fff',
        fontSize: px2dp(38),
        marginLeft: px2dp(260)
    },
    titleIcon: {
        alignSelf: 'center',
        width: px2dp(26),
        height: px2dp(14),
        marginLeft: px2dp(8)
    },
    headRight: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    rightIcon1: {
        width: px2dp(41), 
        height: px2dp(35), 
        marginRight: px2dp(41)
    },
    rightIcon2: {
        width: px2dp(40), 
        height: px2dp(35), 
        marginRight: px2dp(30)
    },
    headLeft: {
        marginLeft: px2dp(30), 
        flexDirection: 'row', 
        alignItems: 'center', 
        width: px2dp(110), 
        height: px2dp(38)
    },
    tabWrap: {
    flex: 1,
    height: px2dp(110),
    position: 'relative'
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
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  tabDownIcon: {
    marginTop: px2dp(50),
    width: px2dp(30),
    height: px2dp(17),
    alignItems: 'center',
    flexDirection: 'column',
  }
})