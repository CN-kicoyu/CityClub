'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import px2dp from '../utils/px2dp';
import SellTabContent from '../pages/Goods/SellTabContent';
import CustomTab from '../components/CustomTab';

export default class TabSubNav extends Component {

    constructor(props) {
        super(props)
        this.state = {
            subName: [
                {
                    title: '推荐',
                    normalURL: require('../assets/images/icon_subnav-1.png'),
                    hoverURL: require('../assets/images/icon_subnav-1-hover.png')
                },
                {
                    title: '女装',
                    normalURL: require('../assets/images/icon_subnav-4.png'),
                    hoverURL: require('../assets/images/icon_subnav-4-hover.png')
                },
                {
                    title: '男装',
                    normalURL: require('../assets/images/icon_subnav-2.png'),
                    hoverURL: require('../assets/images/icon_subnav-2-hover.png')
                },
                {
                    title: '鞋靴',
                    normalURL: require('../assets/images/icon_subnav-3.png'),
                    hoverURL: require('../assets/images/icon_subnav-3-hover.png')
                },
                {
                    title: '箱包',
                    normalURL: require('../assets/images/icon_subnav-5.png'),
                    hoverURL: require('../assets/images/icon_subnav-5-hover.png')
                },
                {
                    title: '母婴',
                    normalURL: require('../assets/images/icon_subnav-6.png'),
                    hoverURL: require('../assets/images/icon_subnav-6-hover.png')
                },
                {
                    title: '内衣',
                    normalURL: require('../assets/images/icon_subnav-7.png'),
                    hoverURL: require('../assets/images/icon_subnav-7-hover.png')
                },
                {
                    title: '内衣',
                    normalURL: require('../assets/images/icon_subnav-7.png'),
                    hoverURL: require('../assets/images/icon_subnav-7-hover.png')
                },
            ]
        }
    }

    render() {
        return (
            <ScrollableTabView
                tabBarUnderlineColor="#4f95ff"
                tabBarActiveTextColor="#4f95ff"
                tabBarInactiveTextColor="#585858"
                renderTabBar={() => <CustomTab tabLists={this.state.subName} />}
                tabBarBackgroundColor="#fff">
                {
                    this.state.subName.map((item, i) => {
                        return (
                            <View tabLabel={item.title} key={i} tabTag={item.title} >
                                <SellTabContent />
                            </View>
                        )
                    })
                }
            </ScrollableTabView>
        )
    }
}
