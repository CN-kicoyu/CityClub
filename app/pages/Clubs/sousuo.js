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

var Sousuo= React.createClass({
   render:function(){

  return(
      <View style={[stlyes.Uht35,stlyes.Urow,stlyes.Uhacenter,stlyes.Umt5,stlyes.Uvacenter,stlyes.Ubw1,stlyes.Ubcblack,stlyes.Umh10]}> 
      <Image source={require('../../assets/images/Arrow.png')} style={[stlyes.Uht16,stlyes.Uwh16,stlyes.Umr5]}></Image> 
      <Text style={[stlyes.Uttfs17]}>大家都在搜:<Text>{this.props.title}</Text></Text>
      </View>
     
    );

    }
});
module.exports=Sousuo;