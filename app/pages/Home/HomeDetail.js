'use strict';

import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, WebView, Alert, TextInput, Animated, TouchableNativeFeedback } from 'react-native'

import px2dp from '../../utils/px2dp'
import config from '../../utils/config'

// ToDo  查看更多加载，分离评论

export default class HomeList extends Component {
    static navigationOptions = ({ navigation }) => ({
        // 设置标题
        headerTitle: navigation.state.params.title
    })

    constructor(props) {
        super(props)
        this.state = {
            data: {},
            slideAnim: new Animated.Value(0)
        }
        this.updateRender = this.updateRender.bind(this)
        this.updateTheme = this.updateTheme.bind(this)
        this.successSend = this.successSend.bind(this)
    }

    componentDidMount() {
        this._getDetailApiAsync()

        // 导航title的值
        this.props.navigation.setParams({
            title: <Text style={{ fontSize: px2dp(30), marginLeft: px2dp(230) }}>详情介绍</Text>
        })
    }

    // 异步加载获取数据
    async _getDetailApiAsync() {
        try {
            let url = 'http://news-at.zhihu.com/api/4/'
            const { params } = this.props.navigation.state;

            // 文章内容
            let response = await fetch(url + 'news/' + params.id)
            let responseData = await response.json()

            // 文章评论
            let comments = await fetch(url + 'story/' + params.id + '/short-comments')
            let commentResult = await comments.json()
            let commentData = commentResult.comments

            let html = `<!DOCTYPE html><html lang="en"><head>
                <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Document</title>
                <style type="text/css">
                    html,body,p {margin: 0;padding: 0;width: 100%;}
                    html {font-size: 62.5%;}
                    body {font-family: "PingFang SC", "Helvetica Neue", Helvetica, Hiragino Sans GB, Microsoft YaHei, \\5FAE软雅黑, Arial, sans-serif;}
                    .author-img {width: 2rem;height: 2rem;border-radius: 0.4rem;box-shadow: 0 1px 1px rgba(0, 0, 0, .4);position: absolute;top: 0.3rem;left: 0;}
                    .add-club {position: absolute;top: 0;right: 0;}
		            .btn {text-align: center;padding: 0.6rem 1rem;color: white;background: #4690ff;border-radius: 0.4rem;font-size: 1.1rem;border: 0;}
                    .content {margin-bottom: 1.7rem;}
                    .content>p {margin-top: 3.2rem;font-size: 1.4rem;}
                    .content>p:first-child {margin-top: 0;}
                    .labels {padding-bottom: 1.2rem;border-bottom: 1px solid #eee;}
                    .labels>span {border-radius: 0.4rem;background: #eee;padding: 0.4rem 2.6rem;color: #6a6a6a;font-size: 1.2rem;display: inline-block;margin-right: 1.3rem;margin-top: 1.7rem;}
                    .ys-btn {width:11rem;height:3rem;line-height:3rem;color:#6a6a6a;border:1px solid #b5b5b5;border-radius:50px;background-color:white;}
                    .ys-btn > i {font-style:normal;padding-left:1.6rem;}
                    .ys-btn > i.icon_1 {background:url(http://ohcaq1mqd.bkt.clouddn.com/webview-icon-1.png) no-repeat 0 0;background-size:1.2rem;}
                    .ys-btn > i.icon_2 {background:url(http://ohcaq1mqd.bkt.clouddn.com/webview-icon-2.png) no-repeat 0 0;background-size:1.2rem;}
                    .ys-flex {-webkit-box-align: center;display:flex;display: -webkit-box;-webkit-flex-direction: row;-moz-flex-direction: row;-ms-flex-direction: row;-o-flex-direction: row;flex-direction: row;-moz-justify-content:space-between;-webkit-box-pack: space-between;-webkit-justify-content:space-between;-ms-justify-content:space-between;justify-content:space-between;-o-justify-content:space-between;}
                    .addbtn {height:2.4rem;align-self: center;}
                    .zan {-webkit-box-align: center;background:url(http://ohcaq1mqd.bkt.clouddn.com/zan-off.png) no-repeat 0 0;padding-left:1.8rem;width:1.6rem;color:#818181;font-size:1rem;align-self:center;background-size:1.2rem}
                    .zan.active {background:url(http://ohcaq1mqd.bkt.clouddn.com/zan-on.png) no-repeat 0 0;color:#4690ff;background-size:1.2rem}
                    .ys-comment {margin-top:2.5rem}
                    .ys-comment:first-child {margin-top:1.7rem; }
                </style></head><body>
                  <div style="padding:1.8rem 1.2rem 0">
                    <p style="font-size:1.7rem">${responseData.title}哈哈哈哈哈，行不行</p>
                    <div style="position:relative">
                      <img src="${responseData.recommenders[0].avatar}" class="author-img" />
                      <div style="padding:0 2.5rem 0 3rem;margin:1.6rem 0 2.4rem">
                        <p style="font-size:1.3rem;">我是胡会会的话${params.id}</p>
                        <p style="color:#adadad;font-size:1.2rem;">1小时前</p>
                      </div>
                      <button type="button" class="add-club btn" onclick="javascript:window.postMessage('go')">+ 加入</button>
                    </div>
                    <img src="${responseData.images}" style="width:100%;height:auto;display:block;font-size:0;margin-bottom:2.6rem;" />
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
                	<div style="border-bottom:1px solid #eee;padding-bottom:2.1rem">
                	<div style="padding:2.2rem 1.2rem 0;" class="ys-flex">
                		<img style="width:4.4rem;height:4.4rem;border-radius:0.4rem" src="http:\/\/pic1.zhimg.com\/d9e10e2f7cce48daa885a6d3c7c09800_im.jpg"></img>
                		<div style="flex:1;-webkit-flex: 1;-webkit-box-flex: 1;justify-content: flex-start;margin-left:1rem;">
                			<p style="font-size:1.4rem;color:#232328;margin-bottom:0.8rem">娱乐八卦</p>
                			<p style="font-size:1rem;color:#646472">帖子：24.8万&nbsp;&nbsp;&nbsp;&nbsp;成员：9.9万</p>
                		</div>
                		<button type="button" class="btn addbtn">+ 加入</button>
                	</div>
                	<div style="padding:2.2rem 1.2rem 0;" class="ys-flex">
                		<img style="width:4.4rem;height:4.4rem;border-radius:0.4rem" src="http:\/\/pic3.zhimg.com\/dbf9e945ae6650d9f4a5f91f66ea49ea_im.jpg"></img>
                		<div style="flex:1;-webkit-flex: 1;-webkit-box-flex: 1;justify-content: flex-start;margin-left:1rem;">
                			<p style="font-size:1.4rem;color:#232328;margin-bottom:0.8rem">娱乐八卦</p>
                			<p style="font-size:1rem;color:#646472">帖子：24.8万&nbsp;&nbsp;&nbsp;&nbsp;成员：9.9万</p>
                		</div>
                		<button type="button" class="btn addbtn">+ 加入</button>
                	</div>
                	<div style="padding:2.2rem 1.2rem 0;" class="ys-flex">
                		<img style="width:4.4rem;height:4.4rem;border-radius:0.4rem" src="http:\/\/pic1.zhimg.com\/6349b22a8_im.jpg"></img>
                		<div style="flex:1;-webkit-flex: 1;-webkit-box-flex: 1;justify-content: flex-start;margin-left:1rem;">
                			<p style="font-size:1.4rem;color:#232328;margin-bottom:0.8rem">娱乐八卦</p>
                			<p style="font-size:1rem;color:#646472">帖子：24.8万&nbsp;&nbsp;&nbsp;&nbsp;成员：9.9万</p>
                		</div>
                		<button type="button" class="btn addbtn">+ 加入</button>
                	</div>
                	</div>
                  <div style="padding:2.1rem;text-align:center;">
                    <button class="ys-btn" style="margin-right:2rem"><i class="icon_1">234</i></button>
                    <button class="ys-btn"><i class="icon_2">不喜欢</i></button>
                  </div>
                  <div style="padding:0 1.2rem;" id="comments">
                    <h1 style="margin:0;font-size:1.4rem;color:#232328;border-bottom:1px solid #eee;padding:1.1rem 0;position:relative">评论区<span style="position:absolute;right:0;color:#8a8a90;font-size:1.2rem">18条评论</span></h1>
                    <div class="ys-comment">
                      <div class="ys-flex">
                        <img src="${commentData[0].avatar}" style="width:3.3rem;height:3.3rem;margin-right:1.2rem;border-radius:100%;"/>
                        <div style="font-size:1.1rem;color:#818181;flex:1;-webkit-flex: 1;-webkit-box-flex: 1;">
                          <p style="color:#4690ff;margin-bottom:0.5rem">${commentData[0].author}</p>
                          <p>${new Date(parseInt(commentData[0].time) * 1000).getFullYear() + '-' + parseInt(new Date(parseInt(commentData[0].time) * 1000).getMonth() + 1) + '-' + new Date(parseInt(commentData[0].time) * 1000).getDate() + ' ' + new Date(parseInt(commentData[0].time) * 1000).toLocaleTimeString()}</p>
                        </div>
                        <p class="zan">${commentData[0].likes}</p>
                      </div>
                      <div style="padding-left:4.5rem;">
                        <p style="margin-top:1.1rem;font-size:1.4rem;color:#232328;">${commentData[0].content}</p>
                        <div style="margin-top:1.4rem;display:${commentData[0].reply_to ? 'block' : 'none'}">
                            <div style="background:#f0f0f0;font-size:1.2rem;border-radius:0.1rem;padding:0.9rem;">
                                <p><span style="color:#4690ff;">${commentData[0].reply_to ? commentData[0].reply_to.author : ''}：</span>${commentData[0].reply_to ? commentData[0].reply_to.content : ''}</p>
                                <p style="margin-top:1.2rem;color:#4690ff;" onclick="javascript:window.postMessage('0')">查看全部2条回复</p>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div class="ys-comment">
                      <div class="ys-flex">
                        <img src="${commentData[1].avatar}" style="width:3.3rem;height:3.3rem;margin-right:1.2rem;border-radius:100%;"/>
                        <div style="font-size:1.1rem;color:#818181;flex:1;-webkit-flex: 1;-webkit-box-flex: 1;">
                          <p style="color:#4690ff;margin-bottom:0.5rem">${commentData[1].author}</p>
                          <p>${new Date(parseInt(commentData[1].time) * 1000).getFullYear() + '-' + parseInt(new Date(parseInt(commentData[1].time) * 1000).getMonth() + 1) + '-' + new Date(parseInt(commentData[1].time) * 1000).getDate() + ' ' + new Date(parseInt(commentData[1].time) * 1000).toLocaleTimeString()}</p>
                        </div>
                        <p class="zan">${commentData[1].likes}</p>
                      </div>
                      <div style="padding-left:4.5rem;">
                        <p style="margin-top:1.1rem;font-size:1.4rem;color:#232328;">${commentData[1].content}</p>
                        <div style="margin-top:1.4rem;display:${commentData[1].reply_to ? 'block' : 'none'}">
                            <div style="background:#f0f0f0;font-size:1.2rem;border-radius:0.1rem;padding:0.9rem;">
                                <p><span style="color:#4690ff;">${commentData[1].reply_to ? commentData[1].reply_to.author : ''}：</span>${commentData[1].reply_to ? commentData[1].reply_to.content : ''}</p>
                                <p style="margin-top:1.2rem;color:#4690ff;" onclick="javascript:window.postMessage('1')">查看全部2条回复</p>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div class="ys-comment">
                      <div class="ys-flex">
                        <img src="${commentData[2].avatar}" style="width:3.3rem;height:3.3rem;margin-right:1.2rem;border-radius:100%;"/>
                        <div style="font-size:1.1rem;color:#818181;flex:1;-webkit-flex: 1;-webkit-box-flex: 1;">
                          <p style="color:#4690ff;margin-bottom:0.5rem">${commentData[2].author}</p>
                          <p>${new Date(parseInt(commentData[2].time) * 1000).getFullYear() + '-' + parseInt(new Date(parseInt(commentData[2].time) * 1000).getMonth() + 1) + '-' + new Date(parseInt(commentData[2].time) * 1000).getDate() + ' ' + new Date(parseInt(commentData[2].time) * 1000).toLocaleTimeString()}</p>
                        </div>
                        <p class="zan">${commentData[2].likes}</p>
                      </div>
                      <div style="padding-left:4.5rem;">
                        <p style="margin-top:1.1rem;font-size:1.4rem;color:#232328;">${commentData[2].content}</p>
                        <div style="margin-top:1.4rem;display:${commentData[2].reply_to ? 'block' : 'none'}">
                            <div style="background:#f0f0f0;font-size:1.2rem;border-radius:0.1rem;padding:0.9rem;">
                                <p><span style="color:#4690ff;">${commentData[2].reply_to ? commentData[2].reply_to.author : ''}：</span>${commentData[2].reply_to ? commentData[2].reply_to.content : ''}</p>
                                <p style="margin-top:1.2rem;color:#4690ff;" onclick="javascript:window.postMessage('2')">查看全部2条回复</p>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div class="ys-comment">
                      <div class="ys-flex">
                        <img src="${commentData[3].avatar}" style="width:3.3rem;height:3.3rem;margin-right:1.2rem;border-radius:100%;"/>
                        <div style="font-size:1.1rem;color:#818181;flex:1;-webkit-flex: 1;-webkit-box-flex: 1;">
                          <p style="color:#4690ff;margin-bottom:0.5rem">${commentData[3].author}</p>
                          <p>${new Date(parseInt(commentData[3].time) * 1000).getFullYear() + '-' + parseInt(new Date(parseInt(commentData[3].time) * 1000).getMonth() + 1) + '-' + new Date(parseInt(commentData[3].time) * 1000).getDate() + ' ' + new Date(parseInt(commentData[3].time) * 1000).toLocaleTimeString()}</p>
                        </div>
                        <p class="zan">${commentData[3].likes}</p>
                      </div>
                      <div style="padding-left:4.5rem;">
                        <p style="margin-top:1.1rem;font-size:1.4rem;color:#232328;">${commentData[3].content}</p>
                        <div style="margin-top:1.4rem;display:${commentData[3].reply_to ? 'block' : 'none'}">
                            <div style="background:#f0f0f0;font-size:1.2rem;border-radius:0.1rem;padding:0.9rem;">
                                <p><span style="color:#4690ff;">${commentData[3].reply_to ? commentData[3].reply_to.author : ''}：</span>${commentData[3].reply_to ? commentData[3].reply_to.content : ''}</p>
                                <p style="margin-top:1.2rem;color:#4690ff;" onclick="javascript:window.postMessage('3')">查看全部2条回复</p>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div class="ys-comment">
                      <div class="ys-flex">
                        <img src="${commentData[4].avatar}" style="width:3.3rem;height:3.3rem;margin-right:1.2rem;border-radius:100%;"/>
                        <div style="font-size:1.1rem;color:#818181;flex:1;-webkit-flex: 1;-webkit-box-flex: 1;">
                          <p style="color:#4690ff;margin-bottom:0.5rem">${commentData[4].author}</p>
                          <p>${new Date(parseInt(commentData[4].time) * 1000).getFullYear() + '-' + parseInt(new Date(parseInt(commentData[4].time) * 1000).getMonth() + 1) + '-' + new Date(parseInt(commentData[4].time) * 1000).getDate() + ' ' + new Date(parseInt(commentData[4].time) * 1000).toLocaleTimeString()}</p>
                        </div>
                        <p class="zan">${commentData[4].likes}</p>
                      </div>
                      <div style="padding-left:4.5rem;">
                        <p style="margin-top:1.1rem;font-size:1.4rem;color:#232328;">${commentData[4].content}</p>
                        <div style="margin-top:1.4rem;display:${commentData[4].reply_to ? 'block' : 'none'}">
                            <div style="background:#f0f0f0;font-size:1.2rem;border-radius:0.1rem;padding:0.9rem;">
                                <p><span style="color:#4690ff;">${commentData[4].reply_to ? commentData[4].reply_to.author : ''}：</span>${commentData[4].reply_to ? commentData[4].reply_to.content : ''}</p>
                                <p style="margin-top:1.2rem;color:#4690ff;" onclick="javascript:window.postMessage('4')">查看全部2条回复</p>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div class="ys-comment">
                      <div class="ys-flex">
                        <img src="${commentData[5].avatar}" style="width:3.3rem;height:3.3rem;margin-right:1.2rem;border-radius:100%;"/>
                        <div style="font-size:1.1rem;color:#818181;flex:1;-webkit-flex: 1;-webkit-box-flex: 1;">
                          <p style="color:#4690ff;margin-bottom:0.5rem">${commentData[5].author}</p>
                          <p>${new Date(parseInt(commentData[5].time) * 1000).getFullYear() + '-' + parseInt(new Date(parseInt(commentData[5].time) * 1000).getMonth() + 1) + '-' + new Date(parseInt(commentData[5].time) * 1000).getDate() + ' ' + new Date(parseInt(commentData[5].time) * 1000).toLocaleTimeString()}</p>
                        </div>
                        <p class="zan">${commentData[5].likes}</p>
                      </div>
                      <div style="padding-left:4.5rem;">
                        <p style="margin-top:1.1rem;font-size:1.4rem;color:#232328;">${commentData[5].content}</p>
                        <div style="margin-top:1.4rem;display:${commentData[5].reply_to ? 'block' : 'none'}">
                            <div style="background:#f0f0f0;font-size:1.2rem;border-radius:0.1rem;padding:0.9rem;">
                                <p><span style="color:#4690ff;">${commentData[5].reply_to ? commentData[5].reply_to.author : ''}：</span>${commentData[5].reply_to ? commentData[5].reply_to.content : ''}</p>
                                <p style="margin-top:1.2rem;color:#4690ff;" onclick="javascript:window.postMessage('5')">查看全部2条回复</p>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div class="ys-comment">
                      <div class="ys-flex">
                        <img src="${commentData[6].avatar}" style="width:3.3rem;height:3.3rem;margin-right:1.2rem;border-radius:100%;"/>
                        <div style="font-size:1.1rem;color:#818181;flex:1;-webkit-flex: 1;-webkit-box-flex: 1;">
                          <p style="color:#4690ff;margin-bottom:0.5rem">${commentData[6].author}</p>
                          <p>${new Date(parseInt(commentData[6].time) * 1000).getFullYear() + '-' + parseInt(new Date(parseInt(commentData[6].time) * 1000).getMonth() + 1) + '-' + new Date(parseInt(commentData[6].time) * 1000).getDate() + ' ' + new Date(parseInt(commentData[6].time) * 1000).toLocaleTimeString()}</p>
                        </div>
                        <p class="zan">${commentData[6].likes}</p>
                      </div>
                      <div style="padding-left:4.5rem;">
                        <p style="margin-top:1.1rem;font-size:1.4rem;color:#232328;">${commentData[6].content}</p>
                        <div style="margin-top:1.4rem;display:${commentData[6].reply_to ? 'block' : 'none'}">
                            <div style="background:#f0f0f0;font-size:1.2rem;border-radius:0.1rem;padding:0.9rem;">
                                <p><span style="color:#4690ff;">${commentData[6].reply_to ? commentData[6].reply_to.author : ''}：</span>${commentData[6].reply_to ? commentData[6].reply_to.content : ''}</p>
                                <p style="margin-top:1.2rem;color:#4690ff;" onclick="javascript:window.postMessage('6')">查看全部2条回复</p>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div class="ys-comment">
                      <div class="ys-flex">
                        <img src="${commentData[7].avatar}" style="width:3.3rem;height:3.3rem;margin-right:1.2rem;border-radius:100%;"/>
                        <div style="font-size:1.1rem;color:#818181;flex:1;-webkit-flex: 1;-webkit-box-flex: 1;">
                          <p style="color:#4690ff;margin-bottom:0.5rem">${commentData[7].author}</p>
                          <p>${new Date(parseInt(commentData[7].time) * 1000).getFullYear() + '-' + parseInt(new Date(parseInt(commentData[7].time) * 1000).getMonth() + 1) + '-' + new Date(parseInt(commentData[7].time) * 1000).getDate() + ' ' + new Date(parseInt(commentData[7].time) * 1000).toLocaleTimeString()}</p>
                        </div>
                        <p class="zan">${commentData[7].likes}</p>
                      </div>
                      <div style="padding-left:4.5rem;">
                        <p style="margin-top:1.1rem;font-size:1.4rem;color:#232328;">${commentData[7].content}</p>
                        <div style="margin-top:1.4rem;display:${commentData[7].reply_to ? 'block' : 'none'}">
                            <div style="background:#f0f0f0;font-size:1.2rem;border-radius:0.1rem;padding:0.9rem;">
                                <p><span style="color:#4690ff;">${commentData[7].reply_to ? commentData[7].reply_to.author : ''}：</span>${commentData[7].reply_to ? commentData[7].reply_to.content : ''}</p>
                                <p style="margin-top:1.2rem;color:#4690ff;" onclick="javascript:window.postMessage('7')">查看全部2条回复</p>
                            </div>
                        </div>
                      </div>
                    </div>
                    <p style="text-align:center;color:#999;margin:3rem 0 2.3rem">显示全部评论</p>
                  </div>
                  <script src="https://cdn.bootcss.com/jquery/1.7/jquery.min.js"></script>
                </body></html>`
            this.setState({
                data: responseData,
                html: html,
                commentData: commentData
            })
        } catch (err) {
            Alert.alert('error home data')
        }
    }

    // 评论框获取焦点改变样式
    updateRender() {
        this.setState({
            isShow: !this.state.isShow,
        })

        // 动态改变title的值
        if (this.state.isShow) {
            this.props.navigation.setParams({
                title: <Text style={{ fontSize: px2dp(30), marginLeft: px2dp(230) }}>详情介绍</Text>
            })
            // onblur不能传回输入的文本
        } else {
            this.props.navigation.setParams({
                title: (<View style={{ flexDirection: 'row', marginLeft: px2dp(200) }}>
                    <Image style={{ width: px2dp(40), height: px2dp(40), borderRadius: px2dp(8) }} source={{ uri: this.state.data.recommenders[0].avatar }} />
                    <Text style={{ fontSize: px2dp(30), marginLeft: px2dp(20) }}>过富强</Text>
                </View>)
            })


        }

        // 设置发表动画
        // Animated.timing(
        //     this.state.slideAnim, {toValue:1,duration:500}
        // ).start()
    }

    webview = null

    successSend = () => {
        const zanScript = `$('.zan').each(function() {
                            $(this).on('click', function(){
                            if($(this).hasClass('active')) {
                                $(this).removeClass('active')
                                $(this).text(parseInt($(this).text()-1))
                            } else {
                                $(this).addClass('active' )
                                $(this).text(parseInt($(this).text()+1))
                            }
                            })
                        })`
        if (this.webview) {
            this.webview.injectJavaScript(zanScript);
        }
    }

    // 评论框获取焦点改变样式
    updateTheme() {
        this.setState({
            inputFocus: true
        })
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
                    onLoadEnd={this.successSend}
                    onMessage={(event) => this.props.navigation.navigate('Comments', { detail: this.state.commentData[event.nativeEvent.data] })} />
                {this.state.isShow ? (<View style={[styles.comment, { height: px2dp(362), paddingVertical: px2dp(27) }]}>
                    <TextInput
                        placeholder="优质评论将会被优先展示"
                        placeholderTextColor="#999"
                        style={styles.realWrite}
                        textAlignVertical="top"
                        autoFocus={true}
                        underlineColorAndroid="transparent"
                        selectionColor="#4690ff"
                        multiline={true}
                        onChangeText={(text) => { this.setState({ text }) }}
                        onBlur={this.updateRender}
                        value={this.state.text}
                    />
                    <TouchableNativeFeedback
                        onPress={this.props.onPress}
                        style={styles.sendText}>
                        <Text style={[styles.subText, !this.state.text ? { backgroundColor: '#bbb' } : { backgroundColor: '#4690ff' }]}>发表</Text>
                    </TouchableNativeFeedback>
                </View>) : (<View style={[styles.comment, styles.flexRow]}>
                    <TextInput ref="textInput"
                        placeholder="写评论..."
                        placeholderTextColor="#999"
                        numberOfLines={1}
                        style={styles.write}
                        underlineColorAndroid="transparent"
                        selectionColor="#4690ff"
                        onFocus={this.updateRender}
                        value={this.state.text}
                    />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require("../../assets/images/comment-icon3.png")} style={styles.imgIcons} />
                        <Image source={require("../../assets/images/comment-icon2.png")} style={styles.imgIcons} />
                        <Image source={require("../../assets/images/comment-icon1.png")} style={styles.imgIcons} />
                    </View>
                </View>)}
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
    },
    webView: {
        flex: 1
    },
    title: {
        color: '#232328',
        fontSize: px2dp(28),
        marginBottom: px2dp(15),
        marginTop: px2dp(-5)
    },
    btn: {
        borderRadius: px2dp(8),
        padding: px2dp(15),
        height: px2dp(20)
    },
    comment: {
        paddingHorizontal: px2dp(25),
        backgroundColor: "#f0f0f0",
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
    realWrite: {
        padding: px2dp(21),
        borderRadius: px2dp(8),
        borderColor: '#dadada',
        backgroundColor: 'white',
        borderWidth: 1,
        flex: 1,
    },
    sendText: {
        flex: 1,
        height: px2dp(48),
        paddingHorizontal: px2dp(25)

    },
    subText: {
        borderRadius: px2dp(8),
        width: px2dp(130),
        color: 'white',
        textAlign: 'center',
        alignSelf: 'flex-end',
        height: px2dp(48),
        marginVertical: px2dp(20)
    }
})