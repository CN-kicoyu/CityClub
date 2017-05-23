'use strict';

import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, WebView, Alert, Button } from 'react-native'

import px2dp from '../../utils/px2dp'
import config from '../../utils/config'

export default class HomeList extends Component {
    static navigationOptions = ({ navigation }) => ({
        // 设置标题
        headerTitle: (
            <Text style={{ fontSize: px2dp(38), marginLeft: px2dp(230) }}>详情介绍</Text>
        )
    })

    constructor(props) {
        super(props)
        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        this._getDetailApiAsync()
    }

    // 异步加载获取数据
    async _getDetailApiAsync() {
        try {
            let url = 'http://news-at.zhihu.com/api/4/news/'
            const { params } = this.props.navigation.state;
            let response = await fetch(url + params.id)
            let responseData = await response.json()
            let html = `<!DOCTYPE html><html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <title>Document</title>
                    <style type="text/css">
                        html,body,p { margin: 0;padding: 0;width:100%; }
                        html { font-size: 62.5%; }
                        body { font-family: "PingFang SC", "Helvetica Neue", Helvetica, Hiragino Sans GB, Microsoft YaHei, \\5FAE软雅黑, Arial, sans-serif; }
                        .author-img { width: 2rem;height: 2rem;border-radius: 0.4rem;box-shadow: 0 1px 1px rgba(0, 0, 0, .4);position: absolute;top: 0.3rem;left: 0; }
                        .add-club {text-align: center;padding: 0.6rem 1rem;color:white;background: #4690ff;border-radius: 0.4rem;position: absolute;top: 0;right: 0;font-size:1.1rem;border:0;}
                        .content {margin-bottom: 1.7rem;}
                        .content>p {margin-top: 3.2rem;font-size: 1.4rem;}
                        .content>p:first-child {margin-top: 0;}
                        .labels {padding-bottom: 1.2rem;border-bottom: 1px solid #eee;}
                        .labels>span {border-radius: 0.4rem;background: #eee;padding: 0.4rem 2.6rem;color: #6a6a6a;font-size: 1.2rem;display: inline-block;margin-right: 1.3rem;margin-top:1.7rem;}
                    </style>
                </head>
                <body>
                    <div style="padding:1.8rem 1.2rem">
                        <p style="font-size:1.7rem">${responseData.title}哈哈哈哈哈，行不行</p>
                        <div style="position:relative">
                            <img src="${responseData.recommenders[0].avatar}" class="author-img" />
                            <div style="padding:0 2.5rem 0 3rem;margin:1.6rem 0 2.4rem">
                                <p style="font-size:1.3rem;">我是胡会会的话</p>
                                <p style="color:#adadad;font-size:1.2rem;">1小时前</p>
                            </div>
                            <button type="button" class="add-club" onclick="onSend()">+ 加入</button>
                        </div>
                        <img src="${responseData.images}" style="width:100%;height:auto;display:block;font-size:0;margin-bottom:2.6rem;"
                        />
                        <div class="content">
                            <p>和“蓝海”相对的企业战略术语，指竞争极端激烈的已知现有市场。摩西向红海伸杖，耶和华便用大东风，使海水一夜退去，水便分开，海就成了干地……到了天一亮，海水仍旧复原。埃及人避水逃跑的时候，耶和华把他们推翻在海中，水就回流，淹没了车辆和马兵。那些跟着以色列人下海法老的全军，连一个也没有剩下。</p>
                            <p>和“蓝海”相对的企业战略术语，指竞争极端激烈的已知现有市场。摩西向红海伸杖，耶和华便用大东风，使海水一夜退去，水便分开，海就成了干地……到了天一亮，海水仍旧复原。埃及人避水逃跑的时候，耶和华把他们推翻在海中，水就回流，淹没了车辆和马兵。那些跟着以色列人下海法老的全军，连一个也没有剩下。</p>
                            <p>和“蓝海”相对的企业战略术语，指竞争极端激烈的已知现有市场。摩西向红海伸杖，耶和华便用大东风，使海水一夜退去，水便分开，海就成了干地……到了天一亮，海水仍旧复原。埃及人避水逃跑的时候，耶和华把他们推翻在海中，水就回流，淹没了车辆和马兵。那些跟着以色列人下海法老的全军，连一个也没有剩下。</p>
                        </div>
                        <img src="${responseData.theme.thumbnail}" style="width:100%;height:auto;display:block;font-size:0;margin-bottom:2.6rem;"
                        />
                        <div class="content">
                            <p>和“蓝海”相对的企业战略术语，指竞争极端激烈的已知现有市场。摩西向红海伸杖，耶和华便用大东风，使海水一夜退去，水便分开，海就成了干地……到了天一亮，海水仍旧复原。埃及人避水逃跑的时候，耶和华把他们推翻在海中，水就回流，淹没了车辆和马兵。那些跟着以色列人下海法老的全军，连一个也没有剩下。</p>
                            <p>和“蓝海”相对的企业战略术语，指竞争极端激烈的已知现有市场。摩西向红海伸杖，耶和华便用大东风，使海水一夜退去，水便分开，海就成了干地……到了天一亮，海水仍旧复原。埃及人避水逃跑的时候，耶和华把他们推翻在海中，水就回流，淹没了车辆和马兵。那些跟着以色列人下海法老的全军，连一个也没有剩下。</p>
                            <p>和“蓝海”相对的企业战略术语，指竞争极端激烈的已知现有市场。摩西向红海伸杖，耶和华便用大东风，使海水一夜退去，水便分开，海就成了干地……到了天一亮，海水仍旧复原。埃及人避水逃跑的时候，耶和华把他们推翻在海中，水就回流，淹没了车辆和马兵。那些跟着以色列人下海法老的全军，连一个也没有剩下。</p>
                        </div>
                        <p style="padding-top:1rem;font-size:1.3rem;color:#8c8c8c;">本文由“你是和返回i哈迪斯”提供，转载请注明来源哦</p>
                        <p class="labels">
                            <span>过富强</span><span>过富强</span><span>过富强</span>
                        </p>
                    </div>
                    <script>
                        function onSend() {
                            window.postMessage('22')
                        }
                    </script>
                </body></html>`
            this.setState({
                data: responseData,
                html: html
            })
        } catch (err) {
            Alert.alert('error home data')
        }
    }
    
    render() {
        return (
            <View style={styles.wrap}>
                <WebView
                ref={webview => { this.webview = webview; }}
                    automaticallyAdjustContentInsets={false}
                    style={styles.webView}
                    source={{ html: this.state.html }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    scalesPageToFit={true}
                    decelerationRate="normal"
                    startInLoadingState={true} 
                    onMessage={() => Alert.alert('88')} />
                <View style={styles.addClub}>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={{ uri: "http://pic4.zhimg.com/e6637a38d22475432c76e6c9e46336fb_m.jpg" }} style={styles.imgClub} />
                        <View style={{flexDirection: 'column'}}>
                            <Text style={styles.title}>士大夫大师傅大</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.info}>帖子：29.4万</Text>
                                <Text style={[styles.info,{marginLeft: px2dp(20)}]}>成员：9.4万</Text>
                            </View>
                            
                        </View>
                    </View>
                    <Button style={styles.btn}
                        onPress={() => Alert.alert('s')}
                        title="+ 加入"
                        color="#4690ff"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
                <View style={styles.addClub}>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={{ uri: "http://pic4.zhimg.com/e6637a38d22475432c76e6c9e46336fb_m.jpg" }} style={styles.imgClub} />
                        <View style={{flexDirection: 'column'}}>
                            <Text style={styles.title}>士大夫大师傅大</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.info}>帖子：29.4万</Text>
                                <Text style={[styles.info,{marginLeft: px2dp(20)}]}>成员：9.4万</Text>
                            </View>
                            
                        </View>
                    </View>
                    <Button style={styles.btn}
                        onPress={() => Alert.alert('s')}
                        title="+ 加入"
                        color="#4690ff"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'flex-start',
        borderTopWidth: 1,
        borderTopColor: "#ccc",
        height:px2dp(1400)
    },
    webView: {
        flex: 1
    },
    addClub: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: px2dp(25),
        paddingTop: px2dp(45)
    },
    imgClub: {
        width: px2dp(88),
        height:px2dp(88),
        marginRight: px2dp(20),
        borderRadius: px2dp(8)
    },
    title: {
        color: '#232328',
        fontSize: px2dp(28),
        marginBottom: px2dp(15),
        marginTop: px2dp(-5)
    },
    info: {
        fontSize:px2dp(20),
        color: "#646472"
    },
    btn: {
        borderRadius:px2dp(8),
        padding:px2dp(15),
        height: px2dp(20)
    }
})