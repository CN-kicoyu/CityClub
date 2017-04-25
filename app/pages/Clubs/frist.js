import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Navgator,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import stlyes from './styls.js'
import Header from './Header.js'
import Quanzi from './Quanzi.js'
import Sousuo from './sousuo.js'
import Tab from './Tab.js'
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width
var height = Dimensions.get('window').height
export default class FirstPage extends Component {
  render() {

    return (



      <View>
        <StatusBar backgroundColor='#6495ed' />
        <Header titleleft='加入' titleright='创建' titlecenter='圈子'></Header>

        <ScrollView style={{ height: height }}>
          <Sousuo title='北京娱乐扒'> </Sousuo>

          <View style={[stlyes.Ucolumn, stlyes.Uvacenter]}>

            <Image source={require('../img/mengmeng.png')} style={{ height: 200, width: 200, borderRadius: 10 }}></Image>
            <Text>亲，你还没自己的圈子</Text>
            <Text>赶紧过来看看吧</Text>
          </View>


          <Tab></Tab>
          <Quanzi img='' titleheader='徒步旅行' tiezinum='362' chengyuannum='500' ></Quanzi>
          <Quanzi img='' titleheader='徒步旅行' tiezinum='362' chengyuannum='500' ></Quanzi>
          <Quanzi img='' titleheader='徒步旅行' tiezinum='362' chengyuannum='500' ></Quanzi>
          <Quanzi img='' titleheader='徒步旅行' tiezinum='362' chengyuannum='500' ></Quanzi>
          <Quanzi img='' titleheader='徒步旅行' tiezinum='362' chengyuannum='500' ></Quanzi>
          <Quanzi img='' titleheader='徒步旅行' tiezinum='362' chengyuannum='500' ></Quanzi>
          <Quanzi img='' titleheader='徒步旅行' tiezinum='362' chengyuannum='500' ></Quanzi>
          <Quanzi img='' titleheader='徒步旅行' tiezinum='362' chengyuannum='500' ></Quanzi>

        </ScrollView>
      </View>


































    );
  }
}


