import React, { Component } from 'react';
import {
  Navigator,
  Text,
  View,
  Image,
  TextInput, 
  TouchableHighlight
} from 'react-native';

var styles = require('./styles');

export default class onboarding2 extends Component{
	constructor(props) {
    super(props);
    this.state = {
      loggedIn: true
    };
  }
  render() {
    return (
    	<View style={styles.container}>
        <Image
          style = { styles.icon }
          source={require("../images/Logo1.png")} 
        />
        <Text style={styles.heading}>
        {"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}
         Ace will match you with a tutor near you!
         </Text>
         <Text style={styles.caption}>
         {"\n"}{"\n"}
         We notify all tutors in your area that {"\n"} are experts in the course you need {"\n"} help with.
         </Text>
      </View>
    );
  }
}