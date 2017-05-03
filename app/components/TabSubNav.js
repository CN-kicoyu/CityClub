'use strict';

import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import px2dp from '../utils/px2dp';
import SellTabContent from '../pages/Goods/SellTabContent';
import CustomTab from '../components/CustomTab';

export default class TabSubNav extends Component {

    constructor(props) {
        super(props)
        this.state = {
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
            ]
        }
    }

    componentDidMount() {
        this._getFromApiAsync()
        console.log(this.props.newnum)
    }

    _getFromApiAsync() {
        fetch('http://v2.mashupcloud.cn/developer/auth.do?appkey=UotqFqitgOlLtisTMtMBwAfvmzPjdoTo&appsecret=orBlqdwKIZOwiTvEWmrZfpKysvDLLIwn')
            .then((response) => response.json())
            .then((responseJson) => {
                this._getListsApiAsync(responseJson[1])
            })
            .catch((error) => {
                console.error(error);
            });
    }

    _getListsApiAsync(tokenApi) {
        fetch('http://v2.mashupcloud.cn/LIST/BizChannel/?appid=337&pageSize=108&token=' + tokenApi)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    contentImgs0: [
                        {
                            title: '母婴分类推荐',
                            titleURL: require('../assets/images/bg_img-2.jpg'),
                            subURL: responseJson[2].filter((item) => {
                                return item.titleId === 5 && item.sort === 1
                            })
                        },
                        {
                            title: '男神绅士之家',
                            titleURL: require('../assets/images/bg_img-1.jpg'),
                            subURL: responseJson[2].filter((item) => {
                                return item.titleId === 2 && item.sort === 1
                            })
                        },
                        {
                            title: '女神夏季专场',
                            titleURL: require('../assets/images/bg_img-2.jpg'),
                            subURL: responseJson[2].filter((item) => {
                                return item.titleId === 1 && item.sort === 1
                            })
                        }
                    ],
                    contentImgs1: [
                        {
                            title: '女神夏季专场-裙子',
                            titleURL: require('../assets/images/bg_img-2.jpg'),
                            subURL: responseJson[2].filter((item) => {
                                return item.subId === 101
                            })
                        },
                        {
                            title: '女神夏季专场-上衣',
                            titleURL: require('../assets/images/bg_img-1.jpg'),
                            subURL: responseJson[2].filter((item) => {
                                return item.subId === 102
                            })
                        },
                        {
                            title: '女神夏季专场-裤子',
                            titleURL: require('../assets/images/bg_img-2.jpg'),
                            subURL: responseJson[2].filter((item) => {
                                return item.subId === 103
                            })
                        }
                    ],
                    contentImgs3: [
                        {
                            title: '女鞋',
                            titleURL: require('../assets/images/bg_img-2.jpg'),
                            subURL: responseJson[2].filter((item) => {
                                return item.subId === 301
                            })
                        },
                        {
                            title: '男鞋',
                            titleURL: require('../assets/images/bg_img-1.jpg'),
                            subURL: responseJson[2].filter((item) => {
                                return item.subId === 302
                            })
                        },
                        {
                            title: '靴子',
                            titleURL: require('../assets/images/bg_img-1.jpg'),
                            subURL: responseJson[2].filter((item) => {
                                return item.subId === 303
                            })
                        }
                    ],
                    contentImgs2: [
                        {
                            title: '男神绅士之家-风衣',
                            titleURL: require('../assets/images/bg_img-1.jpg'),
                            subURL: responseJson[2].filter((item) => {
                                return item.subId === 201
                            })
                        },
                        {
                            title: '男神绅士之家-T恤',
                            titleURL: require('../assets/images/bg_img-1.jpg'),
                            subURL: responseJson[2].filter((item) => {
                                return item.subId === 202
                            })
                        },
                        {
                            title: '男神绅士之家-裤子',
                            titleURL: require('../assets/images/bg_img-2.jpg'),
                            subURL: responseJson[2].filter((item) => {
                                return item.subId === 203
                            })
                        }
                    ],
                    contentImgs4: [
                        {
                            title: '女包',
                            titleURL: require('../assets/images/bg_img-1.jpg'),
                            subURL: responseJson[2].filter((item) => {
                                return item.subId === 401
                            })
                        },
                        {
                            title: '男包',
                            titleURL: require('../assets/images/bg_img-2.jpg'),
                            subURL: responseJson[2].filter((item) => {
                                return item.subId === 402
                            })
                        },
                        {
                            title: '拉杆箱',
                            titleURL: require('../assets/images/bg_img-2.jpg'),
                            subURL: responseJson[2].filter((item) => {
                                return item.subId === 403
                            })
                        }
                    ],
                    contentImgs5: [
                        {
                            title: '女包',
                            titleURL: require('../assets/images/bg_img-1.jpg'),
                            subURL: responseJson[2].filter((item) => {
                                return item.subId === 501
                            })
                        },
                        {
                            title: '男包',
                            titleURL: require('../assets/images/bg_img-2.jpg'),
                            subURL: responseJson[2].filter((item) => {
                                return item.subId === 502
                            })
                        },
                        {
                            title: '拉杆箱',
                            titleURL: require('../assets/images/bg_img-2.jpg'),
                            subURL: responseJson[2].filter((item) => {
                                return item.subId === 503
                            })
                        }
                    ],
                    contentImgs6: [
                        {
                            title: '婴儿',
                            titleURL: require('../assets/images/bg_img-2.jpg'),
                            subURL: responseJson[2].filter((item) => {
                                return item.subId === 601
                            })
                        },
                        {
                            title: '孕妇',
                            titleURL: require('../assets/images/bg_img-2.jpg'),
                            subURL: responseJson[2].filter((item) => {
                                return item.subId === 602
                            })
                        },
                        {
                            title: '护肤品',
                            titleURL: require('../assets/images/bg_img-2.jpg'),
                            subURL: responseJson[2].filter((item) => {
                                return item.subId === 603
                            })
                        }
                    ],
                    contentImgs7: [
                        {
                            title: '保暖衫',
                            titleURL: require('../assets/images/bg_img-1.jpg'),
                            subURL: responseJson[2].filter((item) => {
                                return item.subId === 701
                            })
                        },
                        {
                            title: '女性内衣',
                            titleURL: require('../assets/images/bg_img-2.jpg'),
                            subURL: responseJson[2].filter((item) => {
                                return item.subId === 702
                            })
                        },
                        {
                            title: '男性内衣',
                            titleURL: require('../assets/images/bg_img-2.jpg'),
                            subURL: responseJson[2].filter((item) => {
                                return item.subId === 703
                            })
                        }
                    ]
                })
            })
            .catch((error) => {
                console.error(error)
            })
    }

    render() {
        return (
            <ScrollableTabView
                tabBarUnderlineColor="#4f95ff"
                tabBarActiveTextColor="#4f95ff"
                tabBarInactiveTextColor="#585858"
                renderTabBar={() => <CustomTab tabLists={this.state.subName} />}
                tabBarBackgroundColor="#fff">
                {
                    this.state.subName.map((item, i) => {
                        return (
                            <View tabLabel={item.title} key={i} tabTag={item.title} >
                                <SellTabContent contentImgs={this.state['contentImgs'+i]} />
                            </View>
                        )
                    })
                }
            </ScrollableTabView>
        )
    }
}

