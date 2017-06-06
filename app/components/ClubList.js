'use strict';

import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import px2dp from '../utils/px2dp';

export default class ClubList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.wrap}>
                <View style={styles.flexRow}>
                    <Image source={{ uri: 'http:\/\/pic3.zhimg.com\/8a0f51296_m.jpg' }} style={styles.imgAvator} />
                    <View style={styles.flexcol}>
                        <Text style={styles.author}>使馆渔歌</Text>
                        <Text style={styles.time}>3分钟前</Text>
                    </View>
                </View>
                <Text style={styles.title}>刚到北京的，有需要租房的联系我哟~~~</Text>
                <Text style={styles.detail}>各种房源全部再贴里，豪华、精致、中装、简装，看上哪套，直接电话或者微信联系，无中介的哦，都是里地址，江景房，loft跃层的哦~~~</Text>
                <View style={styles.imgList}>
                    <Image source={{ uri: "http:\/\/pic2.zhimg.com\/2cacc4d6d_m.jpg" }} style={styles.img} />
                    <Image source={{ uri: "http:\/\/pic2.zhimg.com\/71d001b31_m.jpg" }} style={styles.img} />
                    <Image source={{ uri: "http:\/\/pic4.zhimg.com\/3553d57db_m.jpg" }} style={styles.img} />
                    <Image source={{ uri: "https:\/\/pic2.zhimg.com\/645cde143c9a371005f3f749366cffad.jpg" }} style={styles.img} />
                    <Image source={{ uri: "http:\/\/p2.zhimg.com\/55\/e0\/55e06f8fe322fd87b3261b204bae4786.jpg" }} style={styles.img} />
                    <Image source={{ uri: "http:\/\/pic3.zhimg.com\/9382872f7b2e5d898ffa11eb915ed992_t.jpg" }} style={styles.img} />
                    <Image source={{ uri: "http:\/\/pic4.zhimg.com\/ed17bcfd735977314cf70be104f78d63_t.jpg" }} style={styles.img} />
                    <Image source={{ uri: "http:\/\/pic4.zhimg.com\/b7463eb15e4b8179add9fd3778f7305f_t.jpg" }} style={styles.img} />
                </View>
                <View style={styles.flexRow}>
                    <Image source={require("../assets/images/club-icon7.png")} style={styles.address} />
                    <Text style={styles.addressText}>北京市昌平区珠海摩尔国际大厦</Text>
                </View>
                <View style={styles.iconList}>
                    <View style={[styles.list,styles.borders]}>
                        <Image source={require("../assets/images/club-icon4.png")} style={styles.icons} />
                        <Text>分享</Text>
                    </View>
                    <View style={[styles.list,styles.borders]}>
                        <Image source={require("../assets/images/club-icon5.png")} style={styles.icons} />
                        <Text>回复</Text>
                    </View>
                    <View style={styles.list}>
                        <Image source={require("../assets/images/club-icon6.png")} style={styles.icons} />
                        <Text>喜欢</Text>
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    wrap: {
        backgroundColor: 'white',
        paddingTop: px2dp(30),
        marginTop: px2dp(20),
        flexDirection: 'column'
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: px2dp(25),
    },
    imgAvator: {
        width: px2dp(66),
        height: px2dp(66),
        borderRadius: 100,
        marginRight: px2dp(24)
    },
    flexcol: {
        flexDirection: 'column'
    },
    author: {
        fontSize: px2dp(26),
        color: '#4690ff',
        marginBottom: px2dp(12)
    },
    time: {
        fontSize: px2dp(20),
        color: "#999"
    },
    title: {
        marginTop: px2dp(20),
        fontSize: px2dp(28),
        color: '#282828',
        paddingHorizontal: px2dp(25),
    },
    detail: {
        fontSize: px2dp(26),
        color: '#666',
        marginTop: px2dp(7),
        lineHeight: 26,
        paddingHorizontal: px2dp(25),
    },
    imgList: {
        marginTop: px2dp(20),
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: px2dp(22),
        paddingHorizontal: px2dp(25),
    },
    img: {
        width: px2dp(166),
        height: px2dp(166),
        marginRight: px2dp(4),
        marginBottom: px2dp(4)
    },
    address: {
        width: px2dp(20),
        height: px2dp(20),
        marginRight: px2dp(16)
    },
    addressText: {
        fontSize: px2dp(22),
        color: '#999'
    },
    iconList: {
        marginTop: px2dp(26),
        backgroundColor: '#f2f7ff',
        paddingVertical: px2dp(23),
        flexDirection: 'row',
    },
    list: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    borders: {
        borderRightWidth: 1,
        borderColor: "#9cc4ff",
    },
    icons: {
        width: px2dp(25),
        height:px2dp(25),
        marginRight: px2dp(16),
        alignSelf: 'center'
    }
})