import KeyboardSpacer from 'react-native-keyboard-spacer';
import React, { Component } from 'react';
import Menu from './helper/Menu';
import HistoryTags from './helper/historyTags';
import {
  Navigator,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
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
    	<View style={[styles.mainContainer, {backgroundColor: '#f6f6f6'}]}>
      <View style={[styles.toolbar]}>
            <Text style={styles.toolbarTitle}>History</Text>
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
         <HistoryTags/>
      </View>
    );
  }
}
