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
import Topic from "./topicInput"

export default class stuInitial extends Component{
	constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      user: "Student"
    };
  }

  nextStep() {
   var component = Login;
   if (this.state.user === "Student") {
     component = StudentSignUp;
   }

   if(this.canNext()) {
   this.props.navigator.push({component: Topic,
       passProps: { coursecode: this.state.coursecode || ''
       }
   });
 }

  }

  menu() {
 }

 canNext() {
        return this.state.coursecode
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
            <Image
              style = {styles.aceImg}
              source={require("../images/ace.png")}
              />
            <Text style={styles.courseCodeAsk}>
              Hi there! I{"\'"}m Ace.
             What do you need to grasp today?
             </Text>
             <View style={{paddingTop: 49, alignItems: 'center', justifyContent: 'center'}}>
             <TextInput
              style={styles.wideInput}
              onChangeText={(text) => this.setState({coursecode : text})}
              value={this.state.coursecode}
              placeholder="course code"
            />
            <View style={[styles.line, !this.canNext() && styles.disabledLine]}>
            </View>

            </View>
          </View>

          <View>
            <View style={styles.nextBackView}>
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
