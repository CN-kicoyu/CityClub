'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import px2dp from '../utils/px2dp';
import GoodsSell from '../pages/Goods/GoodsSell';
import PersonalSet from '../pages/Personal/PersonalSet';
import Home from '../pages/Home/Home';
import FirstPage from '../pages/Clubs/three';
import Discover from '../pages/Discover/Discover';

export default class TabNavBar extends Component {
    static defaultProps = {
        selectedColor: 'rgb(22,131,251)'
    }

    constructor(props) {
        super(props)
        this.state = {
            selectedTab: '首页',
            tabName: ['首页', '电商', '圈子', '发现', '我的'],
            avatarInfo: {
                avatar: require('../assets/images/personal-avatar.jpg'),
                userImg: require('../assets/images/personal-user.jpg')
            }
        }
    }

    render() {
        return (
            <TabNavigator tabBarStyle={styles.tabnav} >
                <TabNavigator.Item
                    selected={this.state.selectedTab === this.state.tabName[0]}
                    title={this.state.tabName[0]}
                    titleStyle={styles.tabText}
                    selecetedTitleStyle={{ color: this.props.selectedColor }}
                    renderIcon={() => <Image style={styles.tabnavicon} source={require('../assets/images/icon_tabnav-4.png')} />}
                    renderSelectedIcon={() => <Image style={styles.tabnavicon} source={require('../assets/images/icon_tabnav-4-hover.png')} />}
                    onPress={() => this.setState({ selectedTab: this.state.tabName[0] })}>
                    {<Home />}
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === this.state.tabName[1]}
                    title={this.state.tabName[1]}
                    titleStyle={styles.tabText}
                    renderIcon={() => <Image style={styles.tabnavicon} source={require('../assets/images/icon_tabnav-1.png')} />}
                    renderSelectedIcon={() => <Image style={styles.tabnavicon} source={require('../assets/images/icon_tabnav-1-hover.png')} />}
                    onPress={() => this.setState({ selectedTab: this.state.tabName[1] })}>
                    {<GoodsSell navigator={this.props.navigator} />}
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === this.state.tabName[2]}
                    title={this.state.tabName[2]}
                    titleStyle={styles.tabText}
                    renderIcon={() => <Image style={styles.tabnavicon} source={require('../assets/images/icon_tabnav-3.png')} />}
                    renderSelectedIcon={() => <Image style={styles.tabnavicon} source={require('../assets/images/icon_tabnav-3-hover.png')} />}
                    onPress={() => this.setState({ selectedTab: this.state.tabName[2] })}>
                    {<FirstPage />}
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === this.state.tabName[3]}
                    title={this.state.tabName[3]}
                    titleStyle={styles.tabText}
                    renderIcon={() => <Image style={styles.tabnavicon} source={require('../assets/images/icon_tabnav-2.png')} />}
                    renderSelectedIcon={() => <Image style={styles.tabnavicon} source={require('../assets/images/icon_tabnav-2-hover.png')} />}
                    onPress={() => this.setState({ selectedTab: this.state.tabName[3] })}>
                    {<Discover />}
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === this.state.tabName[4]}
                    title={this.state.tabName[4]}
                    titleStyle={styles.tabText}
                    renderIcon={() => <Image style={styles.tabnavicon} source={require('../assets/images/icon_tabnav-5.png')} />}
                    renderSelectedIcon={() => <Image style={styles.tabnavicon} source={require('../assets/images/icon_tabnav-5-hover.png')} />}
                    onPress={() => this.setState({ selectedTab: this.state.tabName[4] })}>
                    {<PersonalSet navigator={this.props.navigator} avatarInfo={this.state.avatarInfo}/>}
                </TabNavigator.Item>
            </TabNavigator>

        )
    }
}

const styles = StyleSheet.create({
    tabnav: {
        height: px2dp(98),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    tabText: {
        fontSize: px2dp(20),
        color: '#959595'
    },
    tabnavicon: {
        width: px2dp(48),
        height: px2dp(44)
    }
})