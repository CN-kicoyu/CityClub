'use strict';

import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import px2dp from '../../utils/px2dp';

export default class GoodsDetails extends Component {
    // static navigationOptions = {
    //     headerTitle: (
    //         <Text style={{ color: '#fff', fontSize: px2dp(38), marginLeft: px2dp(230) }}>商品介绍</Text>
    //     ),
    //     // 字和后退按钮的颜色
    //     headerTintColor: "#fff",
    //     headerStyle: {
    //         backgroundColor: 'red',
    //     }
    // }

    static navigationOptions = ({ navigation }) => ({
        headerTitle: <Text style={{ color: "#282828", fontSize: px2dp(36), marginLeft: px2dp(250) }}>实时推荐</Text>,
        headerStyle: {
            backgroundColor: '#f8f8f8'
        }
    })

    render() {
        const { params } = this.props.navigation.state;
        return (
            <ScrollView>
                <View style={styles.wrap}>
                    <Image style={styles.img} source={{ uri: params.goods.imgURL }} />
                    <View style={styles.header}>
                        <View style={styles.head}>
                            <Text style={styles.name}>{params.goods.name}</Text>
                            <Text style={styles.people}>123人浏览</Text>
                        </View>
                        <View style={styles.flexRow}>
                            <Text style={styles.starTxt}>搭配指数</Text>
                            <Image source={require("../../assets/images/star.png")} style={styles.star} />
                            <Image source={require("../../assets/images/star.png")} style={styles.star} />
                            <Image source={require("../../assets/images/star.png")} style={styles.star} />
                            <Image source={require("../../assets/images/star.png")} style={styles.star} />
                        </View>
                        <View style={styles.btns}>
                            <View style={[styles.btn, styles.marginR]}>
                                <Text style={styles.num}>299 +</Text>
                                <Text style={styles.txt}>搭配还凑合</Text>
                            </View>
                            <View style={styles.btn}>
                                <Text style={[styles.num, styles.bg1]}>299 +</Text>
                                <Text style={styles.txt}>棒极了，很有范</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.titleHead}>商品描述</Text>
                        <Text style={styles.headDetail}>裂帛在大众的感受里被指认为自然风、民族风，却不以其为终点。裂帛的设计，是来自对模板化的反对。她们是自由、自我、直接的，她们遇见什么，感受到什么，就有可能创作出另外的什么。她们会一直走向自己本具的情感土壤。这也是向内行走的含义。裂帛本身就是动态的，如果说她在参考、比照什么，那就是内心了。于是，用现有，常见的‘风格’ 形容词来诠释裂帛甚至是不合适的，因为裂帛不隶属于哪一段历史，或哪一类文化。她们的裂帛不为一片风格领土，却为最初和最终的自由，她们的所做，多聆听来 自内心的声音。她们称自己为‘本体设计’，不断蜕变，表现出来的色彩，质地和形式仅属于新的视野，因为所有的‘与众不同’不过是与心相同。 　　所以，裂帛的风格就是参照本心，无拘无束。</Text>
                    </View>
                    <View style={[styles.content,{paddingHorizontal:0}]}>
                        <Text style={[styles.titleHead,{paddingHorizontal:px2dp(25)}]}>相关宝贝</Text>
                        <View style={styles.imgList}>
                            <Image source={{ uri: "http:\/\/pic2.zhimg.com\/2cacc4d6d_m.jpg" }} style={styles.pic} />
                            <Image source={{ uri: "http:\/\/pic2.zhimg.com\/71d001b31_m.jpg" }} style={styles.pic} />
                            <Image source={{ uri: "http:\/\/pic4.zhimg.com\/3553d57db_m.jpg" }} style={styles.pic} />
                            <Image source={{ uri: "https:\/\/pic2.zhimg.com\/645cde143c9a371005f3f749366cffad.jpg" }} style={styles.pic} />
                            <Image source={{ uri: "http:\/\/p2.zhimg.com\/55\/e0\/55e06f8fe322fd87b3261b204bae4786.jpg" }} style={styles.pic} />
                            <Image source={{ uri: "http:\/\/pic3.zhimg.com\/9382872f7b2e5d898ffa11eb915ed992_t.jpg" }} style={styles.pic} />
                            <Image source={{ uri: "http:\/\/pic4.zhimg.com\/ed17bcfd735977314cf70be104f78d63_t.jpg" }} style={styles.pic} />
                            <Image source={{ uri: "http:\/\/pic4.zhimg.com\/b7463eb15e4b8179add9fd3778f7305f_t.jpg" }} style={styles.pic} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'column'
    },
    img: {
        width: px2dp(750),
        height: px2dp(750)
    },
    header: {
        paddingHorizontal: px2dp(25),
        backgroundColor: '#fff'
    },
    head: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: px2dp(36),
        marginBottom: px2dp(27)
    },
    name: {
        fontSize: px2dp(36)
    },
    people: {
        borderWidth: 1,
        borderColor: "#2294ff",
        width: px2dp(132),
        height: px2dp(46),
        borderRadius: px2dp(8),
        textAlign: 'center',
        alignSelf: 'center',
        paddingTop: px2dp(8),
        color: '#2294ff',
        fontSize: px2dp(22)
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    starTxt: {
        fontSize: px2dp(26),
        color: '#989898',
        marginRight: px2dp(17)
    },
    star: {
        width: px2dp(25),
        height: px2dp(24),
        marginRight: px2dp(14)
    },
    btns: {
        marginVertical: px2dp(40),
        flexDirection: 'row',
        justifyContent: 'center'
    },
    btn: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    num: {
        borderRadius: 100,
        width: px2dp(170),
        height: px2dp(56),
        textAlign: 'center',
        alignSelf: 'center',
        color: '#fff',
        backgroundColor: '#ffc193',
        paddingTop: px2dp(10),
        marginBottom: px2dp(24)
    },
    txt: {
        fontSize: px2dp(22),
        color: '#898989'
    },
    marginR: {
        marginRight: px2dp(117)
    },
    bg1: {
        backgroundColor: '#ff9a4f'
    },
    titleHead: {
        fontSize: px2dp(34)
    },
    content: {
        backgroundColor: 'white',
        marginTop: px2dp(10),
        paddingTop: px2dp(30),
        paddingHorizontal: px2dp(25),
        flexDirection: 'column'
    },
    headDetail: {
        marginTop: px2dp(24),
        fontSize: px2dp(28),
        color: '#686868',
        lineHeight: 30,
        marginBottom: px2dp(40)
    },
    imgList: {
        marginTop: px2dp(20),
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: px2dp(22),
    },
    pic: {
        width: px2dp(176),
        height: px2dp(176),
        marginRight: px2dp(10),
        marginBottom: px2dp(10)
    },
})