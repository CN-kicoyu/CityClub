'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, ScrollView } from 'react-native';
import px2dp from '../utils/px2dp';

export default class CustomTab extends Component {

    render() {
        return (
            <View style={{ justifyContent: 'space-around',flexDirection: 'row', flexWrap: 'wrap', paddingRight:px2dp(25), paddingLeft:px2dp(5)}}>
                {
                    this.props.urlSource.map((item, i) => {
                        return (
                            <View style={styles.sourceView} key={i}>
                                <Image style={styles.sourceImg} source={item.imgURL} />
                                <Text style={styles.sourceTxt}>{item.name}</Text>
                            </View>
                        )
                    })
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    sourceImg: {
        width: px2dp(200),
        height: px2dp(192),
    },
    sourceTxt: {
        fontSize: px2dp(24),
        color: '#111111',
    },
    sourceView: {
        width: px2dp(220),
        backgroundColor: "#fff",
        padding:px2dp(10),
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: px2dp(20),
        marginBottom:px2dp(20)
    },
    active: {
        color: "#4f95ff",
    },
    tabActive: {
        borderBottomColor: "#4f95ff",
        borderBottomWidth: px2dp(4)
    }
})