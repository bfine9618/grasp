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

export default class initial extends Component{
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
          Hi there! I&#39!m Ace
         </Text>
         <Text style={styles.caption}>
         What do you need to grasp today?
         </Text>
         <TextInput
          style={styles.wideInput}
          onChangeText={(text) => this.setState({coursecode : text})}
          value={this.state.coursecode}
          placeholder="course code"
        />
        <TouchableHighlight
          style={styles.fullWidthButton}
          activeOpacity={0.6}
          underlayColor={'purple'}
          onPress={() => console.log("Find")}>
        <Text style={styles.fullWidthButtonText}>Find me a Tutor!</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
