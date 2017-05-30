'use strict';

import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native'

import px2dp from '../../utils/px2dp'

export default class Comments extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: <Text style={{ fontSize: px2dp(30), marginLeft: px2dp(280) }}>详情</Text>,

        // 设置右边
        headerRight: (
            <TouchableOpacity>
                <Image source={require('../../assets/images/personal-more-black.png')} style={styles.rightIcon} />
            </TouchableOpacity>
        ),
    })

    constructor(props) {
        super(props)
        this.state = {
            commentData: {
                'reply_to': {}
            }
        }

        this._getComments = this._getComments.bind(this)
    }

    componentDidMount() {
        this._getComments()
    }


    _getComments() {
        const { params } = this.props.navigation.state;
        params.detail.time = new Date(parseInt(params.detail.time) * 1000).getFullYear() + '-' + parseInt(new Date(parseInt(params.detail.time) * 1000).getMonth() + 1) + '-' + new Date(parseInt(params.detail.time) * 1000).getDate() + ' ' + new Date(parseInt(params.detail.time) * 1000).toLocaleTimeString()
        this.setState({
            commentData: params.detail
        })
    }

    render() {
        return (
            <View style={{flex: 1,justifyContent: 'flex-start'}}>
                <View style={styles.header}>
                    <View style={styles.comment}>
                        <Image source={{ uri: this.state.commentData.avatar }} style={styles.avatar} />
                        <View style={styles.author}>
                            <Text style={styles.authorName}>{this.state.commentData.author}</Text>
                            <Text tyle={styles.authorTime}>{this.state.commentData.time}</Text>
                        </View>
                        <View style={styles.zanIcon}>
                            <Image source={require('../../assets/images/zan-off.png')} style={styles.zan} />
                            <Text  style={styles.font20}>{this.state.commentData.likes}</Text>
                        </View>
                    </View>
                    <Text style={styles.content}>{this.state.commentData.content}</Text>
                </View>
                <View style={styles.likes}>
                    <View style={styles.imglist}>
                        <Image source={{ uri: 'http:\/\/pic1.zhimg.com\/33f67a294aea34ef15c53140146bb460_im.jpg' }} style={styles.img} />
                        <Image source={{ uri: 'http:\/\/pic1.zhimg.com\/da8e974dc_im.jpg' }} style={styles.img} />
                        <Image source={{ uri: "http:\/\/pic4.zhimg.com\/4fcc61f7b_im.jpg" }} style={styles.img} />
                        <Image source={{ uri: "http:\/\/pic1.zhimg.com\/bdbf7ad358ca881dfdb413a1af9e1754_im.jpg" }} style={styles.img} />
                        <Image source={{ uri: "http:\/\/pic1.zhimg.com\/3edc221cbd0a3aaed8e085cb5ddbc7a4_im.jpg" }} style={styles.img} />
                        <Image source={{ uri: "http:\/\/pic2.zhimg.com\/05941bffce9cb88ce2121b75bae9eead_im.jpg" }} style={styles.img} />
                        <Image source={{ uri: "http:\/\/pic4.zhimg.com\/60a8405e487a05a69d4ce13d24b709e7_im.jpg" }} style={styles.img} />
                    </View>
                    <View style={styles.arrowMore}>
                        <Text style={{fontSize: px2dp(24),color:'#505050'}}>有234人赞过</Text>
                        <Image source={require('../../assets/images/personal-arrow.png')} style={styles.arrow} />
                    </View>
                </View>
                <View style={styles.allComment}>
                    <Text style={styles.title}>全部评论</Text>
                    <ScrollView style={styles.scroll}>
                        <View style={styles.comment}>
                            <Image source={{ uri: this.state.commentData.avatar }} style={styles.avatar} />
                            <View style={styles.author}>
                                <Text style={styles.authorName}>{this.state.commentData.reply_to.author}</Text>
                                <Text tyle={styles.authorTime}>{this.state.commentData.time}</Text>
                            </View>
                            <View style={styles.zanIcon}>
                                <Image source={require('../../assets/images/zan-off.png')} style={styles.zan} />
                                <Text style={styles.font20}>{this.state.commentData.likes}</Text>
                            </View>
                        </View>
                        <Text style={styles.content}>{this.state.commentData.reply_to.content}</Text>
                        <View style={styles.comment}>
                            <Image source={{ uri: this.state.commentData.avatar }} style={styles.avatar} />
                            <View style={styles.author}>
                                <Text style={styles.authorName}>{this.state.commentData.reply_to.author}</Text>
                                <Text tyle={styles.authorTime}>{this.state.commentData.time}</Text>
                            </View>
                            <View style={styles.zanIcon}>
                                <Image source={require('../../assets/images/zan-off.png')} style={styles.zan} />
                                <Text style={styles.font20}>{this.state.commentData.likes}</Text>
                            </View>
                        </View>
                        <Text style={styles.content}>{this.state.commentData.reply_to.content}</Text>
                        <View style={styles.comment}>
                            <Image source={{ uri: this.state.commentData.avatar }} style={styles.avatar} />
                            <View style={styles.author}>
                                <Text style={styles.authorName}>{this.state.commentData.reply_to.author}</Text>
                                <Text tyle={styles.authorTime}>{this.state.commentData.time}</Text>
                            </View>
                            <View style={styles.zanIcon}>
                                <Image source={require('../../assets/images/zan-off.png')} style={styles.zan} />
                                <Text style={styles.font20}>{this.state.commentData.likes}</Text>
                            </View>
                        </View>
                        <Text style={styles.content}>{this.state.commentData.reply_to.content}</Text>
                        <View style={styles.comment}>
                            <Image source={{ uri: this.state.commentData.avatar }} style={styles.avatar} />
                            <View style={styles.author}>
                                <Text style={styles.authorName}>{this.state.commentData.reply_to.author}</Text>
                                <Text tyle={styles.authorTime}>{this.state.commentData.time}</Text>
                            </View>
                            <View style={styles.zanIcon}>
                                <Image source={require('../../assets/images/zan-off.png')} style={styles.zan} />
                                <Text style={styles.font20}>{this.state.commentData.likes}</Text>
                            </View>
                        </View>
                        <Text style={styles.content}>{this.state.commentData.reply_to.content}</Text>
                        <View style={styles.comment}>
                            <Image source={{ uri: this.state.commentData.avatar }} style={styles.avatar} />
                            <View style={styles.author}>
                                <Text style={styles.authorName}>{this.state.commentData.reply_to.author}</Text>
                                <Text style={styles.authorTime}>{this.state.commentData.time}</Text>
                            </View>
                            <View style={styles.zanIcon}>
                                <Image source={require('../../assets/images/zan-off.png')} style={styles.zan} />
                                <Text style={styles.font20}>{this.state.commentData.likes}</Text>
                            </View>
                        </View>
                        <Text style={styles.content}>{this.state.commentData.reply_to.content}</Text>
                </ScrollView>
                </View>
                <View style={[styles.commont, styles.flexRow]}>
                    <TextInput ref="textInput"
                        placeholder="写评论..."
                        placeholderTextColor="#999"
                        numberOfLines={1}
                        style={styles.write}
                        underlineColorAndroid="transparent"
                        selectionColor="#4690ff"
                    />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require("../../assets/images/comment-icon4.png")} style={styles.imgIcons} />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    rightIcon: {
        width: px2dp(42),
        height: px2dp(10),
        marginRight: px2dp(30)
    },
    commont: {
        paddingHorizontal: px2dp(25),
        backgroundColor: "#f0f0f0",
        position:'absolute',
        bottom: 0,
        left:0,
        width: '100%'
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: px2dp(88),
        paddingVertical: px2dp(14)
    },
    imgIcons: {
        height: px2dp(40),
        width: px2dp(45),
        marginLeft: px2dp(45)
    },
    write: {
        padding: 0,
        flex: 1,
        alignSelf: 'center',
        borderRadius: 100,
        borderColor: '#dadada',
        backgroundColor: 'white',
        borderWidth: 1,
        paddingHorizontal: px2dp(27),
    },
    header: {
        backgroundColor: 'white',
        paddingBottom: px2dp(40),
        borderTopWidth: 1,
        borderTopColor: '#d8d8d8'
    },
    comment: {
        flexDirection: 'row',
        marginTop:px2dp(40),
        alignItems: 'center',
        paddingHorizontal: px2dp(25)
    },
    avatar: {
        width: px2dp(66),
        height: px2dp(66),
        marginRight: px2dp(24),
        borderRadius: 100,
    },
    author: {
        flex:1,
        flexDirection: 'column',
    },
    authorName: {
        color: '#4690ff',
        fontSize: px2dp(22)
    },
    authorTime: {
        color:'#818181',
        fontSize: px2dp(22)
    },
    zanIcon: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    font20: {
        fontSize: px2dp(20),
        color: '#818181'
    },
    zan: {
        width: px2dp(24),
        height: px2dp(26),
        marginRight: px2dp(13)
    },
    content: {
        paddingLeft: px2dp(115),
        marginTop: px2dp(23)
    },
    likes: {
        backgroundColor: '#f8f8f8',
        paddingHorizontal: px2dp(25),
        paddingVertical:px2dp(30),
        flexDirection:'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#d8d8d8',
        justifyContent: 'space-between'
    },
    imglist: {
        flexDirection: 'row'
    },
    img: {
        width: px2dp(50),
        height: px2dp(50),
        marginRight: px2dp(10),
        borderRadius: 100,
    },
    arrowMore: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    arrow: {
        width: px2dp(16),
        height: px2dp(28),
        marginLeft: px2dp(14)
    },
    allComment: {
        backgroundColor: '#f8f8f8',
    },
    title: {
        fontSize: px2dp(28),
        color: '#232328',
        paddingTop: px2dp(40),
        paddingHorizontal: px2dp(25)
    },
    scroll: {
        marginBottom: px2dp(88)
    }
})