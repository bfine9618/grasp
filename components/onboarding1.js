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

export default class onboarding1 extends Component{
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
         Tell Ace what course you need to grasp!
         </Text>
         <Text style={styles.caption}>
         {"\n"}{"\n"}
         Ace will also want to know for how {"\n"}long, as well as your current {"\n"}location.
         </Text>
      </View>
    );
  }
}