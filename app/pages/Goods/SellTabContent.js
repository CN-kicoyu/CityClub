'use strict';

import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native'
import px2dp from '../../utils/px2dp';
import ThemeIMG from '../../components/ThemeIMG';

export default class GoodsSell extends Component {

  render() {
    return (
      <View style={{ justifyContent: 'flex-start' }}>
        <ScrollView>
          {/*做是否成功加载数据判断，没有就显示正在加载*/}
          {
            this.props.contentImgs ? this.props.contentImgs.map((items, i) => {
              return (
                <View key={i} style={{ flexDirection: 'column', alignItems: 'center', }}>
                  <Image source={items.titleURL} style={styles.contentImg} />
                  <View style={styles.contentTitle}>
                    <View style={styles.contentHr}></View>
                    <Text style={styles.contentTxt}>{items.title}</Text>
                    <View style={styles.contentHr}></View>
                  </View>
                  <View style={styles.contentMore}>
                    <Image source={require('../../assets/images/icon_rank.png')} style={styles.contentRank} />
                    <Text style={styles.contentMoreTxt}>排行榜</Text>
                    <Image source={require('../../assets/images/icon_arrow-right.png')} style={styles.contentArrow} />
                  </View>
                  <ThemeIMG urlSource={items.subURL} onPress={this.props.onPress}/>
                </View>
              )
            }) : <Text style={styles.loading}>数据正在加载中...</Text>
          }
        </ScrollView>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  contentMore: {
    position: 'absolute',
    top: px2dp(230),
    right: px2dp(25),
    flexDirection: 'row',
    alignItems: 'center'
  },
  contentRank: {
    width: px2dp(18),
    height: px2dp(15)
  },
  contentArrow: {
    width: px2dp(11),
    height: px2dp(20)
  },
  contentMoreTxt: {
    color: "#ff8a00",
    fontSize: px2dp(20),
    marginLeft: px2dp(4),
    marginRight: px2dp(12)
  },
  contentImg: {
    width: px2dp(750),
    height: px2dp(200),
    resizeMode: Image.resizeMode.contain,
    justifyContent: 'flex-start'
  },
  contentTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: "relative",
    marginTop: px2dp(26),
    marginBottom: px2dp(26)
  },
  contentHr: {
    height: px2dp(1),
    backgroundColor: '#585858',
    width: px2dp(100)
  },
  contentTxt: {
    marginLeft: px2dp(33),
    marginRight: px2dp(33),
    color: "#585858",
    fontSize: px2dp(28)
  },
  tabDown: {
    width: px2dp(100),
    backgroundColor: '#fff',
    height: px2dp(110),
    borderLeftWidth: 1,
    borderLeftColor: '#e5e5e5',
    shadowOffset: { width: 2, height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.9,
    shadowRadius: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  tabDownIcon: {
    marginTop: px2dp(50),
    width: px2dp(30),
    height: px2dp(17),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  loading: {
    textAlign: 'center',
    marginTop: px2dp(100)
  }
})