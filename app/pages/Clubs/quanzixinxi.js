import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Navgator,
  Image,
  TouchableOpacity
} from 'react-native';
import stlyes from './styls.js'

var Quanzixinxi= React.createClass({
   render:function(){

  return(
    <View>
  <View style={[stlyes.Urow,stlyes.Uhabetween,stlyes.Uvacenter,stlyes.Umt2,stlyes.Umb2]}>
 <View style={[stlyes.Urow,stlyes.Uml10]}>
 <Image source={require('../../assets/images/Arrow.png')} style={{height:55,width:55,borderRadius:10}}></Image> 
 <View style={[stlyes.Umt2]}>
 <Text style={[stlyes.Uttfs17,stlyes.Uttfbd]}>{this.props.titleheader}</Text>
 <View style={[stlyes.Urow,stlyes.Umt5]}>
 <Text >帖子:</Text>
  <Text style={[stlyes.Uml5]}>{this.props.tiezinum}</Text>
  <Text style={[stlyes.Uml10]}>成员:</Text>  
  <Text style={[stlyes.Uml5]}>{this.props.chengyuannum}</Text> 
 </View>

 </View> 
 </View>
 <View style={[stlyes.Ubgcred,stlyes.Urow,stlyes.Uhacenter,stlyes.Uvacenter,stlyes.Umr10,stlyes.Ubdr10,{width:20,height:20}]}><Text onPress={this.props._onress} style={[stlyes.Uttfs10,stlyes.Uttcwhite]}>{this.props.xinxinum}</Text></View>
  </View>
  </View>
    );

    }
});
module.exports=Quanzixinxi;