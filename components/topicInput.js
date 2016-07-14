import KeyboardSpacer from 'react-native-keyboard-spacer';
import React, { Component, PropTypes } from 'react';
import Menu from './helper/Menu';
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
import LengthReq from "./length"

export default class topicInput extends Component{
  static propTypes = {
    coursecode: PropTypes.string.isRequired
  }

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
  var component = Login;
  if (this.state.user === "Student") {
    component = StudentSignUp;
  }

  if(this.canNext()) {
  this.props.navigator.push({component: LengthReq,
      passProps: { topic: this.state.topic || '',
      coursecode: this.props.coursecode || '',
      }
  });
 }
 }

  render() {
    return (
    	<View style={styles.mainContainer}>
        <Menu/>

          <View style={styles.container}>
            <Text style={styles.confirmHead}> Course:</Text>
            <Text style={[styles.confirmInput, {marginBottom:68}]}>{this.props.coursecode}</Text>
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
