import React, { Component } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'

import GoodsSell from './Goods/GoodsSell';
import PersonalSet from './Personal/PersonalSet';
import HomePage from './Home/HomePage';
import HomeDetail from './Home/HomeDetail';
import Clubs from './Clubs/ClubPage';
import Discover from './Discover/Discover';
import GoodsDetails from './Goods/goodsDetail'

import px2dp from '../utils/px2dp';

export default class App extends Component {
    render() {
        return (
            <Navigator />
        )
    }
}

const TabNav = TabNavigator({
    HomePage: {
        screen: HomePage,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: '首页',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../assets/images/icon_tabnav-4.png')}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
            )
        }),
    },
    GoodsSell: {
        screen: GoodsSell,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: '电商',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../assets/images/icon_tabnav-1.png')}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
            )
        }),
    },
    Clubs: {
        screen: Clubs,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: '圈子',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../assets/images/icon_tabnav-3.png')}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
            )
        }),
    },
    Discover: {
        screen: Discover,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: '发现',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../assets/images/icon_tabnav-2.png')}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
            )
        }),
    },

    PersonalSet: {
        screen: PersonalSet,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: '我的',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../assets/images/icon_tabnav-5.png')}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
            )
        }),
    },
},
    {
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: true,
        lazy: true,
        backBehavior: 'none',
        tabBarOptions: {
            activeTintColor: 'rgb(22,131,251)',
            inactiveTintColor: '#959595',
            pressColor: 'rgb(22,131,251)',
            style: { backgroundColor: '#ffffff', height: px2dp(98) },
            indicatorStyle: { height: 1 },
            showIcon: true,
            labelStyle: {
                fontSize: px2dp(20),
                marginTop: px2dp(4)
            },
            iconStyle: {
                width: px2dp(48),
                height: px2dp(42)
            }
        },
    }
);

// const App1 = StackNavigator({
//     TabNav: {
//         screen: TabNav,
//         navigationOptions: {   // 设置统一的导航栏
//             title: '互助'
//         }
//     }
// })
const Navigator = StackNavigator({
    TabNav: { screen: TabNav },
    GoodsDetails: { screen: GoodsDetails },
    HomeDetail: { screen: HomeDetail }
})

const styles = StyleSheet.create({
    icon: {
        width: px2dp(48),
        height: px2dp(42),
        resizeMode: 'contain'
    }
});

