'use strict'

import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, ListView, TouchableOpacity, TextInput, Alert, FlatList } from 'react-native'

import px2dp from '../../utils/px2dp'

export default class Comments extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: <Text style={{ color: "#282828", fontSize: px2dp(36), marginLeft: px2dp(280) }}>分类</Text>,
        headerRight: (
            <TouchableOpacity>
                <Text style={{ fontSize: px2dp(28), color: "#636363", marginRight: px2dp(30) }}>创建</Text>
            </TouchableOpacity>
        ),
        headerStyle: {
            backgroundColor: '#f8f8f8'
        }
    })

    static defaultProps = {
        LeftData: ['热门推荐', '附近', '美食', '旅游', '房子', '宠物', '兼职', '辣妈', '时尚', '健康', '电子', '玩具', '出国', '团购', '打折', '留学', '补课', '母婴', ""]
    }

    constructor(props) {
        super(props)

        // 获取左边分类
        let ls = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        this._getRightApiAsync(0)
        this.state = {
            dataSource: ls.cloneWithRows(this.props.LeftData),
            activeIndex: 0
        }
        this.changeIndex = this.changeIndex.bind(this)
    }

    // 点击切换  (怎么点击渲染数据？？？？)
    // changeIndex(index) {
    //     this.setState({
    //         activeIndex: parseInt(index),
    //     })
    // }


    // 获取右边的数据
    async _getRightApiAsync(i) {
        try {
            let url = 'http://news-at.zhihu.com/api/4/theme/'
            let response = await fetch(url + (i + 2))
            let responseData = await response.json()
            this.setState({
                currentData: responseData.editors
            })
        } catch (err) {
            Alert.alert('error home data')
        }
    }
    //傻办法，临时借用
    changeIndex(index) {
        let ls = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        this.setState({
            activeIndex: parseInt(index),
            dataSource: ls.cloneWithRows(this.props.LeftData)
        })
        this._getRightApiAsync(index)
    }

    _renderItem = (item) => {
        return (
            <View style={styles.clubWrap}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ClubDetail')}>
                <Image style={styles.clubImg} source={{ uri: item.item.avatar }} />
                </TouchableOpacity>
                <View style={styles.clubInfo}>
                    <Text style={styles.clubName}>{item.item.name}</Text>
                    <Text style={styles.clubDetail}>帖子：23.8万    <Text style={{ marginLeft: px2dp(20) }}>成员：9.9万</Text></Text>
                </View>
                <View>
                    <Text style={styles.add}>+ 加入</Text>
                </View>
            </View>
        )
    }

    render() {
        if (this.state.currentData) {
            console.log('this.state.currentData')
            console.log(this.state.currentData)
            var data = this.state.currentData.map((item, i) => {
                return Object.assign({}, item, { key: i })
            })
        }
        return (
            <View style={{ flexDirection: 'row', borderTopWidth: 1, borderColor: "#ccc" }}>
                {/* showsVerticalScrollIndicator 不出现垂直滚动条*/}
                <View style={{ width: px2dp(150) }}>
                    <ListView
                        style={styles.leftSide}
                        dataSource={this.state.dataSource}
                        showsVerticalScrollIndicator={false}
                        renderRow={(rowData, sectionID, rowID, highlightRow) => (
                            <TouchableOpacity onPress={() => this.changeIndex(rowID)}>
                                <Text style={[styles.leftText, this.state.activeIndex == rowID ? styles.active : '']}>{rowData}</Text>
                            </TouchableOpacity>)} />
                </View>
                <View style={styles.content}>
                    {data ? <FlatList data={data} renderItem={this._renderItem} /> : <Text style={styles.loading}>暂无数据...</Text>}
                </View>
            </View>


        )
    }
}

const styles = StyleSheet.create({
    write: {
        marginVertical: px2dp(15),
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
        position: 'relative',
        borderTopWidth: 1,
        borderColor: "#ccc",
        backgroundColor: "#f8f8f8"
    },
    searchIcon: {
        width: px2dp(25),
        height: px2dp(25),
        position: 'absolute',
        top: px2dp(30),
        left: '26%',
        zIndex: 99
    },
    leftSide: {
        width: px2dp(150),
    },
    leftText: {
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        textAlign: 'center',
        paddingVertical: px2dp(40),
        color: "#282828",
        backgroundColor: '#f8f8f8'
    },
    active: {
        borderRightWidth: 0,
        backgroundColor: 'white',
        borderLeftWidth: px2dp(6),
        borderLeftColor: "#4690ff"
    },
    content: {
        flex: 1,
        backgroundColor: 'white'
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
    clubMore: {
        color: '#5e5e5e',
        fontSize: px2dp(24),
        marginVertical: px2dp(28),
        textAlign: 'center'
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
})