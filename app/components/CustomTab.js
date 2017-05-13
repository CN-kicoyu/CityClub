'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, ScrollView } from 'react-native';
import px2dp from '../utils/px2dp';

export default class CustomTab extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectNum: 0
        }
    }

    render() {
        return (
            <View style={{ height: px2dp(110), flexDirection: 'row' }}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    directionalLockEnabled={true}
                    scrollsToTop={false}>
                    {this.props.tabLists.map((tab, i) => this.renderTabOption(tab, i))}
                </ScrollView>
            </View>
        )
    }
    renderTabOption(item, i) {
        return (
            <TouchableOpacity onPress={() => this.props.goToPage(i)} style={styles.tab} key={i}>
                <View style={styles.tabItem}>
                    <Image style={styles.customIcon} source={this.props.activeTab === i ? item.hoverURL : item.normalURL} />
                    <Text style={[styles.customTxt, this.props.activeTab === i && styles.active]}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    tab: {
        width: px2dp(118),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    customIcon: {
        width: px2dp(40),
        height: px2dp(38),
    },
    customTxt: {
        color: '#585858',
        fontSize: px2dp(22),
        marginTop: px2dp(13)
    },
    active: {
        color: "#4f95ff",
    },
    tabActive: {
        borderBottomColor: "#4f95ff",
        borderBottomWidth: px2dp(4)
    }
})