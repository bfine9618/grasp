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
var ProgressBar = require('ProgressBarAndroid')
export default class loading extends Component{
	constructor(props) {
    super(props);
    this.state = {
      loggedIn: true
    };
  }

  render () {
    var progressBar =
      <View style={styles.container}>
        <ProgressBar styleAttr="Inverse" />
      </View>;

    return (
      <View style={styles.container}>
        <Text style={styles.caption}>
        {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"} {"\n"}
        {"\n"}{"\n"}{"\n"}{"\n"}
        </Text>
        <ProgressBar styleAttr="Large" color="blue"/>
         <Text style={styles.heading}>
         {"\n"}{"\n"}
         We"\'"re finding you a tutor.
         </Text>
      </View>
    );
  }
}
