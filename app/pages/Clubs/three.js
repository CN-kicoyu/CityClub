

 


import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Navgator,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import stlyes from './styls.js'
import Header from './Header.js'
import Quanzi from './Quanzi.js'
import Sousuo from './sousuo.js'
import Tab from './Tab.js'
import Quanzixinxi from './quanzixinxi.js'

var Dimensions= require('Dimensions');
var width=Dimensions.get('window').width
var height=Dimensions.get('window').height
export default class FirstPage extends Component {
  render() {

    return (
     
       
       
      <View>
     <Header titleleft='加入' titleright='创建' titlecenter='圈子'></Header> 

    <ScrollView style={{height:height}}> 
    <Sousuo title='北京娱乐扒'> </Sousuo>
    <View>
     <Text style={[stlyes.Uttfbd,stlyes.Uttfs16,stlyes.Umt5]}>我加入的</Text>
     <Quanzixinxi img='' titleheader='徒步旅行' tiezinum='362'chengyuannum='500' xinxinum='50' ></Quanzixinxi>
      <Quanzixinxi img='' titleheader='徒步旅行' tiezinum='362'chengyuannum='500' xinxinum='80' ></Quanzixinxi>
   <Text style={[stlyes.Uttac,stlyes.Uttfbd,stlyes.Uttfs16,stlyes.Umt5]}>+发现更多乐趣的</Text>
    </View>
   
        
  
   

    <Tab></Tab>
    <Quanzi img='' titleheader='徒步旅行' tiezinum='362'chengyuannum='500' ></Quanzi>
   <Quanzi img='' titleheader='徒步旅行' tiezinum='362'chengyuannum='500' ></Quanzi>
   <Quanzi img='' titleheader='徒步旅行' tiezinum='362'chengyuannum='500' ></Quanzi>
   <Quanzi img='' titleheader='徒步旅行' tiezinum='362'chengyuannum='500' ></Quanzi>
   <Quanzi img='' titleheader='徒步旅行' tiezinum='362'chengyuannum='500' ></Quanzi>
   <Quanzi img='' titleheader='徒步旅行' tiezinum='362'chengyuannum='500' ></Quanzi>
   <Quanzi img='' titleheader='徒步旅行' tiezinum='362'chengyuannum='500' ></Quanzi>
   <Quanzi img='' titleheader='徒步旅行' tiezinum='362'chengyuannum='500' ></Quanzi>
   </ScrollView>
         </View>

             );
  }
}
 




  
 


        
               





      




 





