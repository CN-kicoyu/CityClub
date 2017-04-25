/*发现页 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  Dimensions,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { Actions } from 'react-native-router-flux';

var {width,height} = Dimensions.get('window');
var cols = 5 ;
var boxW = 70;
var vMargin = (width - cols*boxW)/(cols + 1);
var hMargin = 10;
var statheight= StatusBar.currentHeight;
//console.log(statheight);
const ScarletScreen = () => {
  return (
    <View>
          <StatusBar backgroundColor="#4690ff" barStyle="light-content"/>
          <View style={styles.header}>
                <View style={styles.textview}>
                      <View style={styles.textview2}>
                        <View style={styles.textview3}>
                        <Text style={styles.textstyle2}><Icon name="search" size={16} color="#999"/> 你想要的都在这儿</Text>
                      </View>
                      </View>
                </View>
            </View>
            <ScrollView style={{height:(height - 95 - statheight)}}>
            <View style={styles.body}>
                  <Text style={styles.textname}>信息港服务</Text>
                  <View style={styles.container}>
                       <View style={styles.outviews}>
                        <Text style={styles.titleName} >保洁</Text>
                      </View>
                      <View style={styles.outviews}>
                        <Text style={styles.titleName}>月嫂</Text>
                      </View>
                      <View style={styles.outviews}>
                        <Text style={styles.titleName}>美甲</Text>
                      </View>
                      <View style={styles.outviews}>
                        <Text style={styles.titleName}>洗车</Text>
                      </View>
                      <View style={styles.outviews}>
                        <Text style={styles.titleName}>旅游</Text>
                      </View>
                  </View>
            </View>
            <View style={styles.divide}></View>
            <View style={styles.body}>
                  <View style={{height:20 , flexDirection:"row",paddingLeft:10,alignItems:'center' }}>
                    <Text style={{flex:1,fontSize:16,color:'#71abf2'}}>生活服务</Text>
                    <Text style={{width:80,fontSize:16,textAlign:'center'}}><Icon name="external-link" size={16} color="#999"/> 发布</Text>
                  </View>
                  <View style={styles.container}>
                       <View style={styles.outviews}>
                        <Text style={styles.titleName}>保洁</Text>
                      </View>
                      <View style={styles.outviews}>
                        <Text style={styles.titleName}>月嫂</Text>
                      </View>
                      <View style={styles.outviews}>
                        <Text style={styles.titleName}>搬家</Text>
                      </View>
                      <View style={styles.outviews}>
                        <Text style={styles.titleName}>电脑维修</Text>
                      </View>
                      <View style={styles.outviews}>
                        <Text style={styles.titleName}>旅游</Text>
                      </View>
                       <View style={styles.outviews}>
                        <Text style={styles.titleName}>家电维修</Text>
                      </View>
                       <View style={styles.outviews}>
                        <Text style={styles.titleName}>高效办证</Text>
                      </View>
                       <View style={styles.outviews}>
                        <Text style={styles.titleName}>生活配送</Text>
                      </View>
                       <View style={styles.outviews}>
                        <Text style={styles.titleName}>房屋维修</Text>
                      </View>
                       <View style={styles.outviews}>
                        <Text style={styles.titleName}>开锁换锁</Text>
                      </View>
                       <View style={styles.outviews}>
                        <Text style={styles.titleName}>旧物回收</Text>
                      </View>
                       <View style={styles.outviews}>
                        <Text style={styles.titleName}>疏通</Text>
                      </View>
                       <View style={styles.outviews}>
                        <Text style={styles.titleName}>鲜花</Text>
                      </View>
                       <View style={styles.outviews}>
                        <Text style={styles.titleName}>省心安装</Text>
                      </View>
                       <View style={styles.outviews}>
                        <Text style={styles.titleName}>小时工</Text>
                      </View>
                  </View>
            </View>
            <View style={styles.divide}></View>
            <View style={styles.body}>
                  <View style={{height:20 , flexDirection:"row",paddingLeft:10,alignItems:'center' }}>
                    <Text style={{flex:1,fontSize:16,color:'#71abf2'}}>二手服务</Text>
                    <Text style={{width:80,fontSize:16,textAlign:'center'}}><Icon name="external-link" size={16} color="#999"/> 发布</Text>
                  </View>
                  <View style={styles.container}>
                       <View style={styles.outviews}>
                        <Text style={styles.titleName}>二手手机</Text>
                      </View>
                      <View style={styles.outviews}>
                        <Text style={styles.titleName}>二手电脑</Text>
                      </View>
                      <View style={styles.outviews}>
                        <Text style={styles.titleName}>二手家电</Text>
                      </View>
                      <View style={styles.outviews}>
                        <Text style={styles.titleName}>二手设备</Text>
                      </View>
                       <View style={styles.outviews}>
                        <Text style={styles.titleName}>二手车辆</Text>
                      </View>
                       <View style={styles.outviews}>
                        <Text style={styles.titleName}>二手家具</Text>
                      </View>
                       <View style={styles.outviews}>
                        <Text style={styles.titleName}>二手家居</Text>
                      </View>
                  </View>
            </View>
            <View style={styles.divide}></View>
            <View style={styles.body}>
                  <View style={{height:20 , flexDirection:"row",paddingLeft:10,alignItems:'center' }}>
                    <Text style={{flex:1,fontSize:16,color:'#71abf2'}}>本地服务</Text>
                    <Text style={{width:80,fontSize:16,textAlign:'center'}}><Icon name="external-link" size={16} color="#999"/> 发布</Text>
                  </View>
                  <View style={styles.container}>
                       <View style={styles.outviews}>
                        <Text style={styles.titleName}>批发采购</Text>
                      </View>
                      <View style={styles.outviews}>
                        <Text style={styles.titleName}>装修建材</Text>
                      </View>
                      <View style={styles.outviews}>
                        <Text style={styles.titleName}>全职招聘</Text>
                      </View>
                      <View style={styles.outviews}>
                        <Text style={styles.titleName}>旅游酒店</Text>
                      </View>
                       <View style={styles.outviews}>
                        <Text style={styles.titleName}>休闲娱乐</Text>
                      </View>
                       <View style={styles.outviews}>
                        <Text style={styles.titleName}>餐饮美食</Text>
                      </View>
                       <View style={styles.outviews}>
                        <Text style={styles.titleName}>美容护肤</Text>
                      </View>
                       <View style={styles.outviews}>
                        <Text style={styles.titleName}>美体瘦身</Text>
                      </View>
                       <View style={styles.outviews}>
                        <Text style={styles.titleName}>办证指南</Text>
                      </View>
                       <View style={styles.outviews}>
                        <Text style={styles.titleName}>办证指南</Text>
                      </View>
                       <View style={styles.outviews}>
                        <Text style={styles.titleName}>办证指南</Text>
                      </View>
                      <View style={styles.outviews}>
                        <Text style={styles.titleName}>办证指南</Text>
                      </View>
                       <View style={styles.outviews}>
                        <Text style={styles.titleName}>办证指南</Text>
                      </View>
                       <View style={styles.outviews}>
                        <Text style={styles.titleName}>办证指南</Text>
                      </View>
                        <View style={styles.outviews}>
                        <Text style={styles.titleName}>办证指南</Text>
                      </View>
                       <View style={styles.outviews}>
                        <Text style={styles.titleName}>办证指南</Text>
                      </View>
                  </View>
            </View>
            </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  header:{
   flexDirection:'row',
   alignItems:'center',
   alignSelf:'stretch',
   height:45,
   backgroundColor:'#4690ff'
 },
 textview:{
   flex:1,
   alignSelf:'center'
 },
 textview2:{
   width:340,
   height:30,
   alignSelf:'center',
    opacity:0.7,
   backgroundColor:'#fff',
   borderRadius:5
 },
 textview3:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    alignSelf:'center'
 },
 textstyle2:{
   fontSize:14,
   color:'#999',
   textAlign:'center'
 }
 ,
 body:{
    paddingVertical:10,
    backgroundColor:'white',
 },
 textname:{
   color:"#71abf2",
   fontSize:16,
   paddingLeft:10
 },
 container: {      
       flexDirection:'row', //设置主轴方向
       flexWrap:'wrap', //超出换行    
       width:width,  //宽度等于屏幕宽度       
 },  
 outviews:{
   alignItems:'center',
   width:boxW,
   height:30,
   marginLeft:vMargin,
   marginTop:hMargin
 } ,
 titleName:{
   color:'black',
   fontSize:14
 },
 divide:{
   height:10
 }
});

export default ScarletScreen;