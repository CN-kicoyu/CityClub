'use strict';

import React, { Component, PropTypes } from 'react'
import { Text, View, Image, StyleSheet, FlatList, Alert,TouchableOpacity } from 'react-native'

import px2dp from '../../utils/px2dp'
import config from '../../utils/config'

export default class HomeList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isFresh: false
        }
    }

    static propTypes = {
        currentData: PropTypes.array
    }

    _refresh() {
        this.state.isFresh = true
        if(this.props.refresh())  this.state.isFresh = false 
    }
    _renderItem = (item) => {
        return (
            <TouchableOpacity style={styles.itemList} onPress={() => this.props.onPress(item.item.id)}>
                <Text style={styles.listText}>{item.item.title}</Text>
                {item.item.images.length === 3 ? (<View style={styles.imgWrap} >
                    <Image source={{ uri: item.item.images[0] }} style={[styles.imgThree, styles.mR]} />
                    <Image source={{ uri: item.item.images[1] }} style={[styles.imgThree, styles.mR]} />
                    <Image source={{ uri: item.item.images[2] }} style={[styles.imgThree]} />
                </View>) : <Image source={{ uri: item.item.images[0] }} style={styles.imgOnly} />}
                <View style={styles.avatarTxt}>
                    <View style={styles.fR}>
                        <Image source={{ uri: item.item.avatar }} style={styles.avatar} />
                        <Text style={styles.infoText}>{item.item.editor_name}</Text>
                        <Text style={styles.infoText}>1.2万评论</Text>
                        <Text style={styles.infoText}>{item.item.date}</Text>
                    </View>
                    <View>
                        <Image source={require("../../assets/images/error.png")} style={styles.imgIcon} />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    render() {
        if (this.props.currentData) {
            var data = this.props.currentData.map((item, i) => {
                return Object.assign({}, item, { key: i })
            })
        }
        return (
            <View style={styles.wrap}>
                {/*refreshing={true}会出现加载图标，使用onRefresh时一定要使用refreshing*/}
                {data ? <FlatList data={data} renderItem={this._renderItem} refreshing={this.state.isFresh} onRefresh={this._refresh.bind(this)} /> : <Text style={styles.loading}>数据正在加载中...</Text>}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrap: {
        backgroundColor: 'white',
        marginTop: px2dp(10),
    },
    itemList: {
        paddingTop: px2dp(28),
        paddingBottom: px2dp(16)
    },
    listText: {
        fontSize: px2dp(30),
        paddingLeft: px2dp(24),
        paddingRight: px2dp(66),
        color: '#333333',
        marginBottom: px2dp(20)
    },
    imgWrap: {
        flexDirection: 'row',
        position: 'relative',
        marginBottom: px2dp(20),
        justifyContent: 'space-between'
    },
    imgOnly: {
        width: config.screenWidth,
        height: px2dp(330),
        marginBottom: px2dp(20)
    },
    imgThree: {
        flex: 1,
        height: (config.screenWidth - px2dp(6) * 2) / (3 * 1.48)
    },
    mR: {
        marginRight: px2dp(6),
    },
    fR: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatarTxt: {
        paddingLeft: px2dp(24),
        paddingRight: px2dp(26),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    avatar: {
        width: px2dp(32),
        height: px2dp(32)
    },
    infoText: {
        fontSize: px2dp(24),
        marginLeft: px2dp(18),
        color: '#adadad'
    },
    imgIcon: {
        width: px2dp(38),
        height: px2dp(24)
    },
    loading: {
        textAlign: 'center',
        marginTop: px2dp(100),
        height: '100%'
    }
})