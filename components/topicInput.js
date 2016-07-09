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

export default class topicInput extends Component{
	constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      user: "Student",
    };
  }

  menu() {

  }

  canNext() {
         return this.state.topic
     }

  prevStep() {
   var component = Login;
   if (this.state.user === "Student") {
     component = StudentSignUp;
   }
   this.props.navigator.pop();
 }

 nextStep() {
   if (this.canNext()){
    console.log("Next");
  }
  else{
    return null;
  }
 }

  render() {
    return (
    	<View style={styles.mainContainer}>
        <View style={styles.toolbar}>
              <TouchableHighlight
                 style={styles.prevButton}
                 activeOpacity={0.6}
                 underlayColor={'#3498DB'}
                 onPress={this.menu.bind(this)}>
                 <Image
                   style = {styles.hamburger}
                   source={require("../images/hamburger.png")}
                 />
               </TouchableHighlight>
           </View>

          <View style={styles.container}>
            <Text style={styles.confirmHead}> Course:</Text>
            <Text style={[styles.confirmInput, {marginBottom:68}]}>courseCode</Text>
            <Text style={[{marginBottom: 34}, styles.courseCodeAsk]}>
              What topic?
             </Text>
             <TextInput
              style={styles.wideInput}
              onChangeText={(text) => this.setState({topic : text})}
              value={this.state.topic}
              placeholder="ie. animal vs plant cells"
            />
            <View style={[styles.line, !this.canNext() && styles.disabledLine]}>
            </View>
          </View>

          <View>
              <View style={styles.nextBackView}>
                <TouchableHighlight
                  style={styles.textLinkButton}
                  activeOpacity={0.6}
                  underlayColor={'white'}
                  onPress={this.prevStep.bind(this)}>
                  <Text style={styles.textLink}>BACK</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.textLinkButton}
                  activeOpacity={0.6}
                  underlayColor={'white'}
                  onPress={this.nextStep.bind(this)}>
                <Text style={[styles.textLink, !this.canNext() && styles.disabled]}>NEXT</Text>
                </TouchableHighlight>
              </View>
            <KeyboardSpacer/>
          </View>
      </View>
    );
  }
}
