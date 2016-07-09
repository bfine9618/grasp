import KeyboardSpacer from 'react-native-keyboard-spacer';
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
import Login from "./login";
import StudentSignUp from "./signup"

export default class stuInitial extends Component{
	constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      user: "Student"
    };
  }

  prevStep() {
   var component = Login;
   if (this.state.user === "Student") {
     component = StudentSignUp;
   }
   this.props.navigator.pop();
 }

  render() {
    return (
    	<View style={styles.mainContainer}>
        <View style={styles.toolbar}>
              <TouchableHighlight
                 style={styles.prevButton}
                 activeOpacity={0.6}
                 underlayColor={'#3498DB'}
                 onPress={this.prevStep.bind(this)}>
                 <Image
                   style = {styles.prevImg}
                   source={require("../images/back_white.png")}
                 />
               </TouchableHighlight>
               <Text style={styles.toolbarTitle}>Tutor sign up</Text>
           </View>

          <View style={styles.container}>
            <Image
              style = {styles.aceImg}
              source={require("../images/ace.png")}
              />
            <Text style={styles.courseCodeAsk}>
              Hi there! I{"\'"}m Ace
             What do you need to grasp today?
             </Text>
             <TextInput
              style={styles.wideInput}
              onChangeText={(text) => this.setState({coursecode : text})}
              value={this.state.coursecode}
              placeholder="course code"
            />
            <Image
              style = {styles.line}
              source={require("../images/Line.png")}
            />
          </View>

          <View style={styles.next}>
            <TouchableHighlight
              style={styles.textLinkButton}
              activeOpacity={0.6}
              underlayColor={'purple'}
              onPress={() => console.log("Find")}>
            <Text style={styles.textLink}>NEXT</Text>
            </TouchableHighlight>

            <KeyboardSpacer/>
          </View>
      </View>
    );
  }
}
