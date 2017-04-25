'use strict';

import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, findNodeHandle, ScrollView } from 'react-native'
import px2dp from '../../utils/px2dp';
import { BlurView, VibrancyView } from 'react-native-blur';

export default class GoodsSell extends Component {

    constructor(props) {
        super(props)
        this.state = {
            viewRef: this.props.avatarInfo.userImg
        }
    }

    imageLoad() {
        this.setState({
            viewRef: findNodeHandle(this.backgroundImage)
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{position: "relative"}}>
                    <Image
                        source={this.props.avatarInfo.userImg}
                        style={styles.userImg}
                        ref={(img) => { this.backgroundImage = img }}
                        onLoadEnd={this.imageLoad.bind(this)} >
                    </Image>
                    <BlurView
                        style={styles.userImg}
                        viewRef={this.state.viewRef}
                        blurType="dark"
                        blurAmount={12}
                        blurRadius={3}
                    />
                    <Image source={this.props.avatarInfo.avatar} style={styles.avatar} />
                    <Text style={styles.avatarname}>最爱夏日阳光暖暖</Text>
                    <View style={styles.rowCenter}>
                        <Text style={[styles.person, styles.margin40]}>关爱 3456人</Text>
                        <Text style={styles.person}>粉丝 3456人</Text>
                    </View>
                    <Text style={styles.detail}>当我第一次知道要签名的时候，其实我是拒绝的</Text>
                    <View style={styles.iconBtn}>
                        <View style={styles.subIcon}>
                            <Image style={styles.subImg} source={require('../../assets/images/personal-1.png')}></Image>
                            <Text style={styles.subTxt}>圈子</Text>
                        </View>
                        <View style={styles.subIcon}>
                            <Image style={styles.subImg} source={require('../../assets/images/personal-2.png')}></Image>
                            <Text style={styles.subTxt}>动态</Text>
                        </View>
                        <View style={styles.subIcon}>
                            <Image style={styles.subImg} source={require('../../assets/images/personal-3.png')}></Image>
                            <Text style={styles.subTxt}>收藏</Text>
                        </View>
                        <View style={styles.subIcon}>
                            <Image style={styles.subImg} source={require('../../assets/images/personal-4.png')}></Image>
                            <Text style={styles.subTxt}>活动</Text>
                        </View>
                    </View>
                </View >
                <ScrollView style={styles.lists}>
                    <View style={styles.list}>
                        <Text style={styles.listTxt}>浏览历史</Text>
                        <Image style={styles.listImg} source={require('../../assets/images/personal-arrow.png')}></Image>
                    </View>
                    <View style={styles.list}>
                        <Text style={styles.listTxt}>系统消息</Text>
                        <Image style={styles.listImg} source={require('../../assets/images/personal-arrow.png')}></Image>
                    </View>
                    <View style={styles.list}>
                        <Text style={styles.listTxt}>我要爆料</Text>
                        <Image style={styles.listImg} source={require('../../assets/images/personal-arrow.png')}></Image>
                    </View>
                    <View style={styles.list}>
                        <Text style={styles.listTxt}>用户反馈</Text>
                        <Image style={styles.listImg} source={require('../../assets/images/personal-arrow.png')}></Image>
                    </View>
                    <View style={styles.list}>
                        <Text style={styles.listTxt}>圈子管理</Text>
                        <Image style={styles.listImg} source={require('../../assets/images/personal-arrow.png')}></Image>
                    </View>
                    <View style={styles.list}>
                        <Text style={styles.listTxt}>系统设置</Text>
                        <Image style={styles.listImg} source={require('../../assets/images/personal-arrow.png')}></Image>
                    </View>
                    <View style={styles.list}>
                        <Text style={styles.listTxt}>浏览历史</Text>
                        <Image style={styles.listImg} source={require('../../assets/images/personal-arrow.png')}></Image>
                    </View>
                    <View style={styles.list}>
                        <Text style={styles.listTxt}>浏览历史</Text>
                        <Image style={styles.listImg} source={require('../../assets/images/personal-arrow.png')}></Image>
                    </View>
                    <View style={styles.list}>
                        <Text style={styles.listTxt}>浏览历史</Text>
                        <Image style={styles.listImg} source={require('../../assets/images/personal-arrow.png')}></Image>
                    </View>
                </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    rowCenter: {
        flexDirection: 'row',
        justifyContent: "center"
    },
    margin40: {
        marginRight: px2dp(40)
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'column',
        position: 'relative',

    },
    userImg: {
        width: px2dp(750),
        height: px2dp(540),
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    avatar: {
        width: px2dp(120),
        height: px2dp(120),
        borderRadius: 100,
        alignSelf: 'center',
        marginTop: px2dp(42)
    },
    avatarname: {
        fontSize: px2dp(36),
        alignSelf: 'center',
        color: '#fff',
        marginTop: px2dp(36),
        marginBottom: px2dp(14)
    },
    person: {
        color: '#fff',
        fontSize: px2dp(24)
    },
    detail: {
        fontSize: px2dp(24),
        alignSelf: 'center',
        color: '#fff',
        marginBottom: px2dp(58),
        marginTop: px2dp(30),
    },
    iconBtn: {
        backgroundColor: 'rgba(0,0,0,.6)',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: px2dp(20),
        paddingBottom: px2dp(15)
    },
    subIcon: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center"
    },
    subImg: {
        width: px2dp(44),
        height: px2dp(44)
    },
    subTxt: {
        fontSize: px2dp(20),
        color: '#fff',
        fontWeight: "bold",
        marginTop: px2dp(15)
    },
    lists: {
        marginTop:px2dp(20),
        backgroundColor: "#ffffff",
        paddingVertical: px2dp(20),
        paddingHorizontal: px2dp(33),
        flexDirection: 'column'
    },
    list: {
        flexDirection: 'row',
        justifyContent: "space-between", 
        paddingVertical: px2dp(30),
    },
    listTxt: {
        color:'#53545a',
        fontSize: px2dp(30)
    },
    listImg: {
        width:px2dp(18),
        height:px2dp(32)
    }
})