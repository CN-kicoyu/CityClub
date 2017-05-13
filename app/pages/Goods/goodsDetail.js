'use strict';

import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import px2dp from '../../utils/px2dp';

export default class GoodsDetails extends Component {
    static navigationOptions = {
        headerTitle: (
            <Text style={{ color: '#fff', fontSize: px2dp(38), marginLeft: px2dp(230) }}>商品介绍</Text>
        ),
        // 字和后退按钮的颜色
        headerTintColor: "#fff",
        headerStyle: {
            backgroundColor: 'red',
        }
    }

    render() {
        const { params } = this.props.navigation.state;
        return (
            <View style={styles.wrap}>
                <Image style={styles.img} source={{ uri: params.goods.imgURL }} />
                <Text>{params.goods.name}</Text>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'column'
    },
    img: {
        width: px2dp(750),
        height: px2dp(750)
    }
})