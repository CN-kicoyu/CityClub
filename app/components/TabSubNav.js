'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, Alert } from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import px2dp from '../utils/px2dp';
import Mock from 'mockjs';
import SellTabContent from '../pages/Goods/SellTabContent';
import CustomTab from '../components/CustomTab';
import HomeList from '../pages/Home/HomeList'


export default class TabSubNav extends Component {

    constructor(props) {
        super(props)
        this.state = {
            homeName: ['推荐', '精品', '美食', '旅游', '时尚', '招聘', '医疗', '城市', '活动', '鸡汤', '精品'],
            subName: [
                {
                    title: '推荐',
                    normalURL: require('../assets/images/icon_subnav-1.png'),
                    hoverURL: require('../assets/images/icon_subnav-1-hover.png')
                },
                {
                    title: '女装',
                    normalURL: require('../assets/images/icon_subnav-4.png'),
                    hoverURL: require('../assets/images/icon_subnav-4-hover.png')
                },
                {
                    title: '男装',
                    normalURL: require('../assets/images/icon_subnav-2.png'),
                    hoverURL: require('../assets/images/icon_subnav-2-hover.png')
                },
                {
                    title: '鞋靴',
                    normalURL: require('../assets/images/icon_subnav-3.png'),
                    hoverURL: require('../assets/images/icon_subnav-3-hover.png')
                },
                {
                    title: '箱包',
                    normalURL: require('../assets/images/icon_subnav-5.png'),
                    hoverURL: require('../assets/images/icon_subnav-5-hover.png')
                },
                {
                    title: '母婴',
                    normalURL: require('../assets/images/icon_subnav-6.png'),
                    hoverURL: require('../assets/images/icon_subnav-6-hover.png')
                },
                {
                    title: '内衣',
                    normalURL: require('../assets/images/icon_subnav-7.png'),
                    hoverURL: require('../assets/images/icon_subnav-7-hover.png')
                },
                {
                    title: '内衣',
                    normalURL: require('../assets/images/icon_subnav-7.png'),
                    hoverURL: require('../assets/images/icon_subnav-7-hover.png')
                },
            ],
            currentData: []
        }
    }

    // 初始页面数据渲染
    componentDidMount() {
        this.props.mode !== 'Home' ? this._getFromApiAsync() : this._getHomeApiAsync()
    }

    // 传递给子元素，下拉刷新
    _refresh() {
        this.props.mode !== 'Home' ? this._getFromApiAsync() : this._getHomeApiAsync()
        return true
    }
    // 使用mock获取数据
    async _getHomeApiAsync() {
        try {
            let url = 'http://news-at.zhihu.com/api/4/theme/'
            let currentData = []
            for (let i = 0; i < this.state.homeName.length - 1; i++) {
                let response = await fetch(url + (i + 2))
                let responseData = await response.json()
                const imgs_1 = responseData.background
                const imgs_2 = responseData.image
                responseData.stories.shift()
                responseData.stories.forEach((item, index) => {
                    if (item.images && Math.random() > 0.5) {
                        item.images.push(imgs_1)
                        item.images.push(item.images[0])
                    } else if (!item.images) {
                        item.images = [imgs_2]
                    }
                    item.title = item.title + "哈哈哈哈哈，行不行"
                    item.avatar = "http://pic2.zhimg.com/fcb7039c1_m.jpg"
                    item.editor_name = "哈哈哈就是我"
                    item.date = new Date().toLocaleDateString()
                })
                currentData.push(responseData.stories)
            }
            console.log(currentData)

            this.setState({
                currentData: currentData
            })

        } catch (err) {
            Alert.alert('error home data')
        }
    }
    // 异步获取数据
    async _getFromApiAsync() {

        try {
            // 获取token
            let response = await fetch('http://v2.mashupcloud.cn/developer/auth.do?appkey=UotqFqitgOlLtisTMtMBwAfvmzPjdoTo&appsecret=orBlqdwKIZOwiTvEWmrZfpKysvDLLIwn')
            let responseResult = await response.json()

            // 获取数据
            let responseData = await fetch('http://v2.mashupcloud.cn/LIST/BizChannel/?appid=337&pageSize=108&token=' + responseResult[1])
            let result = await responseData.json()

            // 不用await
            if (result[0] === 'OK' && result[2].length !== 0) {
                this.setState({
                    contentImg0: [
                        {
                            title: '母婴分类推荐',
                            titleURL: require('../assets/images/bg_img-2.jpg'),
                            subURL: result[2].filter((item) => {
                                return item.titleId === 5 && item.sort === 1
                            })
                        },
                        {
                            title: '男神绅士之家',
                            titleURL: require('../assets/images/bg_img-1.jpg'),
                            subURL: result[2].filter((item) => {
                                return item.titleId === 2 && item.sort === 1
                            })
                        },
                        {
                            title: '女神夏季专场',
                            titleURL: require('../assets/images/bg_img-2.jpg'),
                            subURL: result[2].filter((item) => {
                                return item.titleId === 1 && item.sort === 1
                            })
                        }
                    ],
                    contentImg1: [
                        {
                            title: '女神夏季专场-裙子',
                            titleURL: require('../assets/images/bg_img-2.jpg'),
                            subURL: result[2].filter((item) => {
                                return item.subId === 101
                            })
                        },
                        {
                            title: '女神夏季专场-上衣',
                            titleURL: require('../assets/images/bg_img-1.jpg'),
                            subURL: result[2].filter((item) => {
                                return item.subId === 102
                            })
                        },
                        {
                            title: '女神夏季专场-裤子',
                            titleURL: require('../assets/images/bg_img-2.jpg'),
                            subURL: result[2].filter((item) => {
                                return item.subId === 103
                            })
                        }
                    ],
                    contentImg3: [
                        {
                            title: '女鞋',
                            titleURL: require('../assets/images/bg_img-2.jpg'),
                            subURL: result[2].filter((item) => {
                                return item.subId === 301
                            })
                        },
                        {
                            title: '男鞋',
                            titleURL: require('../assets/images/bg_img-1.jpg'),
                            subURL: result[2].filter((item) => {
                                return item.subId === 302
                            })
                        },
                        {
                            title: '靴子',
                            titleURL: require('../assets/images/bg_img-1.jpg'),
                            subURL: result[2].filter((item) => {
                                return item.subId === 303
                            })
                        }
                    ],
                    contentImg2: [
                        {
                            title: '男神绅士之家-风衣',
                            titleURL: require('../assets/images/bg_img-1.jpg'),
                            subURL: result[2].filter((item) => {
                                return item.subId === 201
                            })
                        },
                        {
                            title: '男神绅士之家-T恤',
                            titleURL: require('../assets/images/bg_img-1.jpg'),
                            subURL: result[2].filter((item) => {
                                return item.subId === 202
                            })
                        },
                        {
                            title: '男神绅士之家-裤子',
                            titleURL: require('../assets/images/bg_img-2.jpg'),
                            subURL: result[2].filter((item) => {
                                return item.subId === 203
                            })
                        }
                    ],
                    contentImg4: [
                        {
                            title: '女包',
                            titleURL: require('../assets/images/bg_img-1.jpg'),
                            subURL: result[2].filter((item) => {
                                return item.subId === 401
                            })
                        },
                        {
                            title: '男包',
                            titleURL: require('../assets/images/bg_img-2.jpg'),
                            subURL: result[2].filter((item) => {
                                return item.subId === 402
                            })
                        },
                        {
                            title: '拉杆箱',
                            titleURL: require('../assets/images/bg_img-2.jpg'),
                            subURL: result[2].filter((item) => {
                                return item.subId === 403
                            })
                        }
                    ],
                    contentImg5: [
                        {
                            title: '女包',
                            titleURL: require('../assets/images/bg_img-1.jpg'),
                            subURL: result[2].filter((item) => {
                                return item.subId === 501
                            })
                        },
                        {
                            title: '男包',
                            titleURL: require('../assets/images/bg_img-2.jpg'),
                            subURL: result[2].filter((item) => {
                                return item.subId === 502
                            })
                        },
                        {
                            title: '拉杆箱',
                            titleURL: require('../assets/images/bg_img-2.jpg'),
                            subURL: result[2].filter((item) => {
                                return item.subId === 503
                            })
                        }
                    ],
                    contentImg6: [
                        {
                            title: '婴儿',
                            titleURL: require('../assets/images/bg_img-2.jpg'),
                            subURL: result[2].filter((item) => {
                                return item.subId === 601
                            })
                        },
                        {
                            title: '孕妇',
                            titleURL: require('../assets/images/bg_img-2.jpg'),
                            subURL: result[2].filter((item) => {
                                return item.subId === 602
                            })
                        },
                        {
                            title: '护肤品',
                            titleURL: require('../assets/images/bg_img-2.jpg'),
                            subURL: result[2].filter((item) => {
                                return item.subId === 603
                            })
                        }
                    ],
                    contentImg7: [
                        {
                            title: '保暖衫',
                            titleURL: require('../assets/images/bg_img-1.jpg'),
                            subURL: result[2].filter((item) => {
                                return item.subId === 701
                            })
                        },
                        {
                            title: '女性内衣',
                            titleURL: require('../assets/images/bg_img-2.jpg'),
                            subURL: result[2].filter((item) => {
                                return item.subId === 702
                            })
                        },
                        {
                            title: '男性内衣',
                            titleURL: require('../assets/images/bg_img-2.jpg'),
                            subURL: result[2].filter((item) => {
                                return item.subId === 703
                            })
                        }
                    ]
                })
            }
        } catch (error) {
            Alert.alert('error')
        }
    }

    render() {
        return (
            /*locked={true}禁止拖动切换*/
            < ScrollableTabView
                locked={true}
                tabBarUnderlineColor="#4f95ff"
                tabBarActiveTextColor="#4f95ff"
                tabBarInactiveTextColor="#585858"
                renderTabBar={() => <CustomTab tabLists={this.props.mode === 'Home' ? this.state.homeName : this.state.subName} />
                }
                tabBarBackgroundColor="#fff" >
                {
                    this.props.mode !== 'Home' ? this.state.subName.map((item, i) => {
                        return (
                            <View tabLabel={item.title} key={i} tabTag={item.title} >
                                {/*不同页面渲染不同数据*/}
                                <SellTabContent contentImgs={this.state['contentImg' + i]} onPress={this.props.onPress} />
                            </View>
                        )
                    }) : this.state.homeName.map((item, i) => {
                        return (
                            <View tabLabel={item} key={i} tabTag={item} >
                                <HomeList currentData={this.state.currentData[i]} onPress={this.props.onPress} refresh={this._refresh.bind(this)}/>
                            </View>
                        )
                    })
                }
            </ScrollableTabView>
        )
    }
}
