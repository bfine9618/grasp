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
         Grasp and repeat!
         </Text>
      </View>
    );
  }
}