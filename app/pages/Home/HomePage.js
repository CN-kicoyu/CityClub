'use strict';

import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

import px2dp from '../../utils/px2dp'

export default class HomePage extends Component {
    // 设置首页导航栏
    static navigationOptions = {
        // 设置标题
        headerTitle: (
            <TouchableOpacity style={{flexDirection: 'row',alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color: '#fff',fontSize:px2dp(38),marginLeft:px2dp(260)}}>北京</Text>
                <Image source={require('../../assets/images/Arrow.png')}  style={{alignSelf: 'center',width:px2dp(26),height:px2dp(14),marginLeft:px2dp(5)}}/>
            </TouchableOpacity>
        ),
        // 设置右边
        headerRight: (
            <TouchableOpacity style={{flexDirection: 'row',alignItems: 'center'}}>
				<Image source={require('../../assets/images/icon_search.png')}  style={{width:px2dp(41),height:px2dp(35),marginRight:px2dp(41)}}/>
				<Image source={require('../../assets/images/message.png')}  style={{width:px2dp(40),height:px2dp(35),marginRight:px2dp(30)}}/>
			</TouchableOpacity>
        ),
        // 设置左边
        headerLeft: (
            <Image source={require('../../assets/images/home_logo.png')} style={{marginLeft:px2dp(30),flexDirection: 'row',alignItems: 'center', width:px2dp(110), height: px2dp(38)}} />
        ),
        // 设置导航栏的背景颜色
        headerStyle: {
            backgroundColor: '#4f95ff'
        }
    }
    render() {
        return (
            <Text>ddd</Text>
        )
    }
}