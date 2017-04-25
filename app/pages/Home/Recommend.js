/**
 * Created by zhaolu on 2017/4/23.
 */
/*
 * @Author: zhaolu
 * @Date:   2017-04-21 01:17:50
 * @Last Modified by:   zhaolu
 * @Last Modified time: 2017-04-21 01:25:57
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet ,Image,ScrollView} from 'react-native';



export default class Recommend extends Component {

    render() {
        return (
            <ScrollView style={styles.container} contentContainerStyle={{flexGrow: 1}}>
                <View style={styles.newsList}>
                    <Text style={styles.newsTitle}>郭富城被方媛收服了，男明星和网红成了固 定搭配么?</Text>
                    <View style={styles.newsImgBox}>
                        <Image style={styles.newsImg} source={require('../../assets/images/news1.png')} />
                        <Image style={[styles.newsImg,styles.iconSpace]} source={require('../../assets/images/news2.png')} />
                        <Image style={styles.newsImg} source={require('../../assets/images/news3.png')} />
                    </View>
                    <View style={styles.newsUser}>
                        <View style={styles.newsuserBox}>
                            <Image style={styles.newsUserHead} source={require('../../assets/images/newsHead.png')} />
                            <Text style={styles.newsText}>我是灰灰的哈</Text>
                            <Text style={styles.newsText}>1.2万评论</Text>
                            <Text style={styles.newsText}>1小时前</Text>
                        </View>
                        <Image style={styles.newsDelete} source={require('../../assets/images/error.png')} />
                    </View>
                </View>
                <View style={styles.newsList}>
                    <Text style={styles.newsTitle}>郭富城被方媛收服了，男明星和网红成了固 定搭配么?</Text>
                    <View style={styles.newsImgBox}>
                        <Image style={[styles.newsImg,styles.newImgH]} source={require('../../assets/images/news4.png')} />
                    </View>
                    <View style={styles.newsUser}>
                        <View style={styles.newsuserBox}>
                            <Image style={styles.newsUserHead} source={require('../../assets/images/newsHead.png')} />
                            <Text style={styles.newsText}>我是灰灰的哈</Text>
                            <Text style={styles.newsText}>1.2万评论</Text>
                            <Text style={styles.newsText}>1小时前</Text>
                        </View>
                        <Image style={styles.newsDelete} source={require('../../assets/images/error.png')} />
                    </View>
                </View>
                <View style={styles.newsList}>
                    <View style={styles.newsCol}>
                        <Text style={[styles.newsTitle,styles.newsColTitle]}>郭富城被方媛收服了，男明星和网红成了固 定搭配么?</Text>
                        <Image style={styles.newsImg} source={require('../../assets/images/news1.png')} />
                    </View>
                    <View style={styles.newsUser}>
                        <View style={styles.newsuserBox}>
                            <Image style={styles.newsUserHead} source={require('../../assets/images/newsHead.png')} />
                            <Text style={styles.newsText}>我是灰灰的哈</Text>
                            <Text style={styles.newsText}>1.2万评论</Text>
                            <Text style={styles.newsText}>1小时前</Text>
                        </View>
                        <Image style={styles.newsDelete} source={require('../../assets/images/error.png')} />
                    </View>
                </View>
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        paddingTop:6,
        backgroundColor:'#d9d8d6',
    },
    newsList:{
        flexDirection: 'column',
        backgroundColor :'#fff',
    },
    newsTitle:{
        fontSize : 18,
        padding:8,
        lineHeight:22
    },
    newsColTitle:{
        flex:2,
        paddingTop:0
    },
    newsImgBox:{
        flex:1,
        flexDirection: 'row',
    },
    newsImg:{
        flex:1,
        height:80
    },
    newImgH:{
        height:160
    },
    iconSpace:{
        marginLeft:3,
        marginRight:3
    },
    newsUser:{
        flexDirection: 'row',
        padding:8,
        paddingRight:20,
        paddingLeft:20
    },
    newsuserBox:{
        flex :1,
        flexDirection: 'row',
    },
    newsUserHead:{
        width:20,
        height:20,
        borderRadius :10,
        marginRight:8,
    },
    newsText:{
        marginRight:5,
        marginTop:4,
        fontSize:12,
        color:'#888888',
    },
    newsDelete:{
        height:14,
        width:22,
        marginTop:3
    },
    newsCol:{
        flex :1,
        flexDirection: 'row',
    },

});