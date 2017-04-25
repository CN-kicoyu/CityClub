import React, { Component } from 'react';
import { View, Text, StyleSheet ,Image} from 'react-native';


export default class Title extends Component {


  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.inforport}>信息港</Text>
        <View style={styles.address}>
          <Text style={styles.addressTitle}>北京</Text>
          <Image style={styles.iconArrow} source={require('../assets/images/Arrow.png')} />
        </View>
        <View style={styles.findMessage}>
          <Image style={styles.findIcon} source={require('../assets/images/icon_search.png')} />
          <Image style={styles.messageIcon} source={require('../assets/images/message.png')} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',//设置主轴方向
    alignItems: 'center' ,
    justifyContent:'center',
    padding:10,
    paddingTop :30,
    backgroundColor:'#4690ff'
  },
  inforport:{
    flex:1,
    fontSize : 20,
    color:'#fff',
  },
  address:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  addressTitle:{
    color:'#fff',
    fontSize :16,
    marginRight:2
  },
  iconArrow:{
    width:12,
    height:12,
  },
  findMessage:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  findIcon:{
    width:22,
    height:18,
    marginRight:20
  },
  messageIcon:{
    width:22,
    height:18,
  }
})
