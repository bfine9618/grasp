import KeyboardSpacer from 'react-native-keyboard-spacer';
import React, { Component } from 'react';
import Menu from './helper/Menu';  // Step 1
import {
  Navigator,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  Animated,
  ScrollView
} from 'react-native';

var styles = require('./styles');

export default class stuInitial extends Component{
	constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      user: {
        type: 'student',
        name: 'Jeff Wang',
        phone: '123-456-789',
        major: 'Digital Media',
        year: '2017',
        email: 'dudejeff@gmail.com',
        bio: 'UX Designer from San Francisco'
      }
    };
  }

  back() {
    this.props.navigator.pop();
  }

  render() {
    return (
    	<View style={styles.mainContainer}>
      <View style={styles.toolbar}>
            <Text style={styles.toolbarTitle}>Profile</Text>
            <TouchableHighlight
               style={styles.prevButton}
               activeOpacity={0.6}
               underlayColor={'#3498DB'}
               onPress={this.back.bind(this)}>
               <Image
                 style = {styles.prevImg}
                 source={require("../images/back_white.png")}
               />
             </TouchableHighlight>

         </View>
         <View style={{alignItems:'center', height: 190, backgroundColor:'#3498DB'}}>
           <Image
             style={[styles.avatar, {borderColor: 'white', borderWidth: 3}]}
             source={require("Grasp/images/jeff.png")}
             />
           <Text style={[styles.menuText, {fontSize:20, marginTop:5}]}> Jeff Wang</Text>
           <Text style={[styles.menuText, {marginTop:5}]}> student</Text>
         </View>

          <View>
          <Text style={[styles.profileText, {fontFamily:'Montserrat-Light',
          textAlign:'center', marginTop:30}]}>{'\"'}{this.state.user.bio}{'\"'}</Text></View>
          <View style={{paddingLeft: 30}}>
            <Text style={[styles.profileText, {fontFamily:'Montserrat-Light',
            textAlign:'left', marginTop:25}]}>Major:</Text>
            <Text style={[styles.profileText, {fontFamily:'Montserrat-Regular',
            textAlign:'left', marginTop:5}]}>{this.state.user.major}</Text>
            <Text style={[styles.profileText, {fontFamily:'Montserrat-Light',
            textAlign:'left', marginTop:20}]}>Graduation Year:</Text>
            <Text style={[styles.profileText, {fontFamily:'Montserrat-Regular',
            textAlign:'left', marginTop:5}]}>{this.state.user.year}</Text>
            <Text style={[styles.profileText, {fontFamily:'Montserrat-Light',
            textAlign:'left', marginTop:20}]}>Phone Number:</Text>
            <Text style={[styles.profileText, {fontFamily:'Montserrat-Regular',
            textAlign:'left', marginTop:5}]}>{this.state.user.phone}</Text>
            <Text style={[styles.profileText, {fontFamily:'Montserrat-Light',
            textAlign:'left', marginTop:20}]}>email</Text>
            <Text style={[styles.profileText, {fontFamily:'Montserrat-Regular',
            textAlign:'left', marginTop:5}]}>{this.state.user.email}</Text>
          </View>

      </View>
    );
  }
}
