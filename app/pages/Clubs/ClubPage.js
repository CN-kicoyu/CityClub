'use strict';

import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView, Modal, Alert } from 'react-native'

import px2dp from '../../utils/px2dp'

let $this

// ToDo 需要加scrollview才会滚动，并且底部会遮挡
export default class ClubPage extends Component {
    static navigationOptions = ({ navigation }) => ({
        // 设置标题
        headerTitle: (
            <TouchableOpacity style={styles.headTitle}>
                <Text style={styles.titleName}>圈子</Text>
            </TouchableOpacity>
        ),
        // 设置右边
        headerRight: (
            <TouchableOpacity style={styles.headRight} onPress={() => {
                $this.setModalVisible(true)
            }}>
                <Text style={{ fontSize: px2dp(30), color: "#fff" }}>创建</Text>
            </TouchableOpacity>
        ),
        // 设置左边
        headerLeft: (
            <TouchableOpacity style={styles.headLeft} onPress={() => navigation.navigate('ClubCategory')}>
                <Text style={{ fontSize: px2dp(30), color: "#fff" }}>＋圈子</Text>
            </TouchableOpacity>
        ),
        // 设置导航栏的背景颜色
        headerStyle: {
            backgroundColor: '#4f95ff'
        }
    })


    constructor(props) {
        super(props);
        $this = this
        this.state = { modalVisible: false };
        this.setModalVisible = this.setModalVisible.bind(this)
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <View>
                <View style={styles.search}>
                    <Image style={styles.searchIcon} source={require('../../assets/images/icon_tabnav-2.png')} />
                    <TextInput ref="textInput"
                        placeholder="大家都在搜：北京娱乐趴"
                        placeholderTextColor="#8e8e93"
                        numberOfLines={1}
                        style={styles.write}
                        underlineColorAndroid="transparent"
                        selectionColor="#4690ff"
                    />
                </View>
                <Text style={styles.title}>我加入的</Text>
                <View style={styles.clubs}>
                    <View style={styles.clubWrap}>
                        <Image style={styles.clubImg} source={{ uri: "http://pic1.zhimg.com/6349b22a8_im.jpg" }} />
                        <View style={styles.clubInfo}>
                            <Text style={styles.clubName}>我们都是吃货</Text>
                            <Text style={styles.clubDetail}>吃货的最高境界就是吃到停不下来！</Text>
                        </View>
                        <View>
                            <Text style={styles.account}>2</Text>
                        </View>
                    </View>
                    <View style={styles.clubWrap}>
                        <Image style={styles.clubImg} source={{ uri: "http://pic1.zhimg.com/b783296e0da43050e9961fb67bf91310_im.jpg" }} />
                        <View style={styles.clubInfo}>
                            <Text style={styles.clubName}>我们都是吃货</Text>
                            <Text style={styles.clubDetail}>吃货的最高境界就是吃到停不下来！</Text>
                        </View>
                        <View>
                            <Text style={styles.account}>2</Text>
                        </View>
                    </View>
                    <Text style={styles.clubMore}>+ 发现更多感兴趣的</Text>
                </View>
                <View style={styles.clubs}>
                    <View style={styles.find}>
                        <Text style={{ fontSize: px2dp(24), color: '#434348' }}>有兴趣一起玩</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={styles.change} source={require('../../assets/images/club-icon1.png')} />
                            <Text style={{ fontSize: px2dp(22), color: '#434348' }}>换一组</Text>
                        </View>
                    </View>
                    <ScrollView>
                        <View style={styles.clubWrap}>
                            <Image style={styles.clubImg} source={{ uri: "http://pic3.zhimg.com/f22fec3e939e5b52071743e3de4a7422_im.jpg" }} />
                            <View style={styles.clubInfo}>
                                <Text style={styles.clubName}>我们都是吃货</Text>
                                <Text style={styles.clubDetail}>帖子：23.8万    <Text style={{ marginLeft: px2dp(20) }}>成员：9.9万</Text></Text>
                            </View>
                            <View>
                                <Text style={styles.add}>+ 加入</Text>
                            </View>
                        </View>
                        <View style={styles.clubWrap}>
                            <Image style={styles.clubImg} source={{ uri: "http://pic1.zhimg.com/da8e974dc_im.jpg" }} />
                            <View style={styles.clubInfo}>
                                <Text style={styles.clubName}>我们都是吃货</Text>
                                <Text style={styles.clubDetail}>吃货的最高境界就是吃到停不下来！</Text>
                            </View>
                            <View>
                                <Text style={styles.add}>+ 加入</Text>
                            </View>
                        </View>
                        <View style={styles.clubWrap}>
                            <Image style={styles.clubImg} source={{ uri: "http://pic2.zhimg.com/2e8c21431415e90e4f5fc15e4df4cb5d_im.jpg" }} />
                            <View style={styles.clubInfo}>
                                <Text style={styles.clubName}>我们都是吃货</Text>
                                <Text style={styles.clubDetail}>吃货的最高境界就是吃到停不下来！</Text>
                            </View>
                            <View>
                                <Text style={styles.add}>+ 加入</Text>
                            </View>
                        </View>
                        <View style={styles.clubWrap}>
                            <Image style={styles.clubImg} source={{ uri: "http://pic1.zhimg.com/3a127067d5f8018342749c83432dc1b8_im.jpg" }} />
                            <View style={styles.clubInfo}>
                                <Text style={styles.clubName}>我们都是吃货</Text>
                                <Text style={styles.clubDetail}>吃货的最高境界就是吃到停不下来！</Text>
                            </View>
                            <View>
                                <Text style={styles.add}>+ 加入</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                {/*自定义设置弹窗层*/}
                <Modal
                    animationType={"slide"}
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { Alert.alert("Just closed") }}>
                    <View style={styles.mask}>
                        <View style={styles.maskWrap}>
                            <Text style={styles.maskTitle}>手机认证用户才可以创建常见圈子，快去认证吧！</Text>
                            <View style={styles.btns}>
                                <TouchableOpacity underlayColor='transparent'
                                    style={[styles.btn,styles.borderRight]}
                                    onPress={() => this.setModalVisible(!this.state.modalVisible)}>
                                    <Text style={[styles.btn, styles.btnText]}>取消</Text>
                                </TouchableOpacity>
                                <TouchableOpacity underlayColor='transparent'
                                    style={styles.btn}
                                    onPress={() => this.setModalVisible(!this.state.modalVisible)}>
                                    <Text style={[styles.btn, styles.btnText]}>去认证</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>

        )
    }
}


const styles = StyleSheet.create({
    headTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleName: {
        color: '#fff',
        fontSize: px2dp(38),
        marginLeft: px2dp(260)
    },
    headRight: {
        marginRight: px2dp(30)
    },
    headLeft: {
        marginLeft: px2dp(30)
    },
    write: {
        marginTop: px2dp(15),
        paddingVertical: px2dp(15),
        marginHorizontal: px2dp(15),
        fontSize: px2dp(24),
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        borderRadius: px2dp(10),
        height: px2dp(60),
        textAlign: 'center'
    },
    search: {
        position: 'relative'
    },
    searchIcon: {
        width: px2dp(25),
        height: px2dp(25),
        position: 'absolute',
        top: px2dp(30),
        left: '26%',
        zIndex: 99
    },
    title: {
        fontSize: px2dp(24),
        color: "#434348",
        paddingTop: px2dp(26),
        paddingLeft: px2dp(25),
        paddingBottom: px2dp(12)
    },
    clubs: {
        backgroundColor: '#fff',
        marginBottom: px2dp(10)
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
    account: {
        width: px2dp(28),
        height: px2dp(28),
        backgroundColor: "#4690ff",
        color: '#fff',
        fontSize: px2dp(18),
        borderRadius: 100,
        textAlign: 'center',
    },
    clubMore: {
        color: '#5e5e5e',
        fontSize: px2dp(24),
        marginVertical: px2dp(28),
        textAlign: 'center'
    },
    find: {
        marginVertical: px2dp(20),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: px2dp(25)
    },
    change: {
        width: px2dp(24),
        height: px2dp(22),
        marginRight: px2dp(11)
    },
    add: {
        width: px2dp(100),
        height: px2dp(48),
        color: '#fff',
        borderRadius: px2dp(8),
        backgroundColor: "#4690ff",
        textAlign: 'center',
        paddingTop: px2dp(10),
        fontSize: px2dp(22)
    },
    mask: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,.4)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    maskWrap: {
        width: px2dp(542),
        height: px2dp(254),
        backgroundColor: 'white',
        borderRadius: px2dp(30)
    },
    maskTitle: {
        paddingVertical: px2dp(42),
        paddingHorizontal: px2dp(65),
        fontSize: px2dp(34),
        color: "#282828"
    },
    btns: {
        borderTopWidth: 1,
        borderColor: "#d8d8dc",
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    btn: {
        flex: 1,
        alignItems: 'center',
    },
    borderRight: {
        borderRightWidth: 1,
        borderColor: "#d8d8dc",
    },
    btnText: {
        fontSize: px2dp(34),
        paddingTop:px2dp(16),
        color:"#4690ff"
    }
})