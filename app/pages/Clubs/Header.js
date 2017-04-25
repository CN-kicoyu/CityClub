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

var Header= React.createClass({
   render:function(){

  return(
        <View style={[stlyes.Ubgccornflowerblue,stlyes.Urow,stlyes.Uvacenter,stlyes.Uhabetween,{height:55,}]}> 
       <View style={[stlyes.Urow]}>
       <Image source={require('../../assets/images/Arrow.png')} style={[stlyes.Uwh25,stlyes.Uht25,stlyes.Uml10,stlyes.Umb2]}></Image>
       <Text style={[stlyes.Uttfs16]}>{this.props.titleleft}</Text>
       </View>
      <Text style={[stlyes.Uttfs20]}>{this.props.titlecenter}</Text>
      <Text style={[stlyes.Uttfs16,stlyes.Umr10]}>{this.props.titleright}</Text>
      </View> 
    );

    }
});
module.exports=Header;


