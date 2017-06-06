'use strict'

import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import ClubList from '../../components/ClubList'

import px2dp from '../../utils/px2dp'

export default class ClubDetail extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: <Text style={{ color: "#282828", fontSize: px2dp(36), marginLeft: px2dp(250) }}>出租房子</Text>,
        headerRight: (
            <TouchableOpacity>
                <Text style={{ fontSize: px2dp(28), color: "#636363", marginRight: px2dp(30) }}>创建</Text>
            </TouchableOpacity>
        ),
        headerStyle: {
            backgroundColor: '#f8f8f8'
        }
    })

    constructor(props) {
        super(props)
        this.state = {
            isSlide: true
        }
        this.slideChange = this.slideChange.bind(this)
    }

    slideChange() {
        this.setState({
            isSlide: !this.state.isSlide
        })
    }
    render() {
        return (
            <ScrollView style={styles.wrap}>
                <View style={styles.header}>
                    <View style={[styles.headImg, styles.Img]}>
                        <Image source={{ uri: 'http:\/\/pic4.zhimg.com\/3553d57db_m.jpg' }} style={styles.Img} />
                        <Text style={styles.imgInfo}>房产</Text>
                    </View>
                    <View style={styles.clubInfo}>
                        <Text style={[styles.clubName, styles.fs28]}>出租房子</Text>
                        <Text style={styles.clubSmall} numberOfLines={1}>拒绝中介和二手房东公寓房，有意向者可以联系我们加入该圈进行咨询</Text>
                        <Text style={styles.clubDetail}>帖子：23.8万    <Text style={{ marginLeft: px2dp(20) }}>成员：9.9万</Text></Text>
                    </View>
                    <Text style={styles.add}>+ 加入</Text>
                </View>
                <View style={[styles.header, styles.upInfo]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.fs28}>圈主：揍你走你</Text>
                        <Image source={require('../../assets/images/club-icon3.png')} style={styles.upInfoImg} />
                    </View>
                    <Text style={styles.upCall}>私信Ta</Text>
                </View>
                <View style={styles.annouce}>
                    <Text style={[styles.fs28, { paddingVertical: px2dp(24) }]}>圈内公告</Text>
                    <View style={this.state.isSlide ? { height: px2dp(158), overflow: 'hidden' } : { height: 'auto' }}>
                        <View style={{ flexDirection: 'row', marginBottom: px2dp(24) }}><Text style={styles.icon}>顶</Text><Text>如何发布租房和求租信息！</Text></View>
                        <View style={{ flexDirection: 'row', marginBottom: px2dp(24) }}><Text style={styles.icon}>顶</Text><Text>如何发布租房和求租信求租信息！</Text></View>
                        <View style={{ flexDirection: 'row', marginBottom: px2dp(24) }}><Text style={styles.icon}>顶</Text><Text>如何发布租房求租信息！和求租信息！</Text></View>
                        <View style={{ flexDirection: 'row', marginBottom: px2dp(24) }}><Text style={styles.icon}>顶</Text><Text>如何发布租房信息！</Text></View>
                        <View style={{ flexDirection: 'row', marginBottom: px2dp(24) }}><Text style={styles.icon}>顶</Text><Text>如何发布租房和求求租租信息！</Text></View>
                        <View style={{ flexDirection: 'row', marginBottom: px2dp(24) }}><Text style={styles.icon}>顶</Text><Text>如何发布租房和求租信息！</Text></View>
                    </View>
                    <TouchableOpacity style={styles.upContorl} onPress={() => this.slideChange()}><Text>{this.state.isSlide ? '展开' : '收起'}</Text><Image source={this.state.isSlide ? require('../../assets/images/icon_arrow-down.png') : require('../../assets/images/icon_arrow-up.png')} style={styles.arrows} /></TouchableOpacity>
                </View>
                <ClubList style={{ marginTop: px2dp(20) }} />
                <ClubList style={{ marginTop: px2dp(20) }} />
                <ClubList style={{ marginTop: px2dp(20) }} />
                <ClubList style={{ marginTop: px2dp(20) }} />
                <ClubList style={{ marginTop: px2dp(20) }} />
                <ClubList style={{ marginTop: px2dp(20) }} />
                <ClubList style={{ marginTop: px2dp(20) }} />
                <View style={{marginTop: px2dp(20),backgroundColor: 'white'}}>
                    <Text style={[styles.fs28, { paddingVertical: px2dp(24),paddingHorizontal: px2dp(25) }]}>相关圈子</Text>
                    <View style={styles.clubWrap}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ClubDetail')}>
                            <Image style={styles.clubImg} source={{ uri: "http:\/\/pic3.zhimg.com\/9382872f7b2e5d898ffa11eb915ed992_t.jpg" }} />
                        </TouchableOpacity>
                        <View style={styles.clubInfo}>
                            <Text style={styles.clubName}>双卡手机付款</Text>
                            <Text style={styles.clubDetail}>帖子：23.8万    <Text style={{ marginLeft: px2dp(20) }}>成员：9.9万</Text></Text>
                        </View>
                        <View>
                            <Text style={styles.add}>+ 加入</Text>
                        </View>
                    </View>
                    <View style={styles.clubWrap}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ClubDetail')}>
                            <Image style={styles.clubImg} source={{ uri: "http:\/\/pic3.zhimg.com\/9382872f7b2e5d898ffa11eb915ed992_t.jpg" }} />
                        </TouchableOpacity>
                        <View style={styles.clubInfo}>
                            <Text style={styles.clubName}>双卡手机付款</Text>
                            <Text style={styles.clubDetail}>帖子：23.8万    <Text style={{ marginLeft: px2dp(20) }}>成员：9.9万</Text></Text>
                        </View>
                        <View>
                            <Text style={styles.add}>+ 加入</Text>
                        </View>
                    </View>
                    <View style={styles.clubWrap}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ClubDetail')}>
                            <Image style={styles.clubImg} source={{ uri: "http:\/\/pic3.zhimg.com\/9382872f7b2e5d898ffa11eb915ed992_t.jpg" }} />
                        </TouchableOpacity>
                        <View style={styles.clubInfo}>
                            <Text style={styles.clubName}>双卡手机付款</Text>
                            <Text style={styles.clubDetail}>帖子：23.8万    <Text style={{ marginLeft: px2dp(20) }}>成员：9.9万</Text></Text>
                        </View>
                        <View>
                            <Text style={styles.add}>+ 加入</Text>
                        </View>
                    </View>
                    <View style={styles.clubWrap}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ClubDetail')}>
                            <Image style={styles.clubImg} source={{ uri: "http:\/\/pic3.zhimg.com\/9382872f7b2e5d898ffa11eb915ed992_t.jpg" }} />
                        </TouchableOpacity>
                        <View style={styles.clubInfo}>
                            <Text style={styles.clubName}>双卡手机付款</Text>
                            <Text style={styles.clubDetail}>帖子：23.8万    <Text style={{ marginLeft: px2dp(20) }}>成员：9.9万</Text></Text>
                        </View>
                        <View>
                            <Text style={styles.add}>+ 加入</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: px2dp(25),
        paddingTop: px2dp(25),
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center'
    },
    headImg: {
        position: 'relative',
        overflow: 'hidden',
        marginRight: px2dp(28)
    },
    Img: {
        width: px2dp(182),
        height: px2dp(182),
        borderRadius: px2dp(8)
    },
    imgInfo: {
        color: '#4690ff',
        fontSize: px2dp(20),
        backgroundColor: 'white',
        borderRadius: 100,
        position: 'absolute',
        top: px2dp(20),
        right: px2dp(-20),
        paddingVertical: px2dp(5),
        paddingLeft: px2dp(20),
        width: px2dp(95)
    },
    clubInfo: {
        flex: 1,
        flexDirection: 'column'
    },
    clubName: {
        fontSize: px2dp(28),
        color: "#232328"
    },
    clubDetail: {
        fontSize: px2dp(20),
        color: "#646472",
        marginTop: px2dp(17)
    },
    add: {
        width: px2dp(100),
        height: px2dp(48),
        color: '#fff',
        borderRadius: px2dp(8),
        backgroundColor: "#4690ff",
        textAlign: 'center',
        paddingTop: px2dp(10),
        fontSize: px2dp(22),
        marginLeft: px2dp(36)
    },
    upInfo: {
        paddingVertical: px2dp(35),
        justifyContent: 'space-between'
    },
    fs28: {
        fontSize: px2dp(28),
        color: '#282828'
    },
    upInfoImg: {
        width: px2dp(40),
        height: px2dp(32),
        marginLeft: px2dp(17)
    },
    upCall: {
        borderWidth: 1,
        borderRadius: px2dp(8),
        borderColor: '#4690ff',
        textAlign: 'center',
        paddingTop: px2dp(8),
        fontSize: px2dp(22),
        color: '#4690ff',
        width: px2dp(100),
        height: px2dp(48)
    },
    clubSmall: {
        fontSize: px2dp(22),
        color: '#666',
        marginTop: px2dp(35)
    },
    annouce: {
        marginTop: px2dp(20),
        backgroundColor: 'white',
        paddingHorizontal: px2dp(25)
    },
    icon: {
        width: px2dp(28),
        height: px2dp(28),
        borderRadius: px2dp(5),
        backgroundColor: '#4690ff',
        textAlign: 'center',
        alignSelf: 'center',
        marginRight: px2dp(20),
        color: 'white',
        fontSize: px2dp(18)
    },
    arrows: {
        width: px2dp(26),
        height: px2dp(14),
        marginLeft: px2dp(15)
    },
    upContorl: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    clubWrap: {
        paddingTop: px2dp(30),
        paddingHorizontal: px2dp(25),
        paddingBottom: px2dp(25),
        flexDirection: 'row',
        alignItems: 'center'
    },
    clubImg: {
        borderRadius: px2dp(8),
        marginRight: px2dp(20),
        width: px2dp(88),
        height: px2dp(88)
    },
    clubMore: {
        color: '#5e5e5e',
        fontSize: px2dp(24),
        marginVertical: px2dp(28),
        textAlign: 'center'
    },
})