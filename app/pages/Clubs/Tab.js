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

var Tab= React.createClass({
   render:function(){

  return(
     <View style={[stlyes.Urow,stlyes.Uhabetween,stlyes.Uvacenter,stlyes.Umt5]}>
    <Text style={[stlyes.Uttfs15,stlyes.Uttfbd,stlyes.Uml10]}>有兴趣一起玩</Text>
     <View style={[stlyes.Urow,stlyes.Uvacenter,stlyes.Umr10]}>
     <Image source={require('../../assets/images/Arrow.png')} style={[stlyes.Uht28,stlyes.Uwh28,stlyes.Umr5]}></Image> 
     <Text style={[stlyes.Uttfs15,stlyes.Uttfbd]}>换一组</Text>
     </View>
    </View>
  
    );

    }
});
module.exports=Tab;