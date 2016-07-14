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
import StudentSignUp from "./signup";
import LengthReq from "./length";
import ManLoc from "./manLocation";
import Loading from "./loading";

export default class Location extends Component{
  static propTypes = {
    coursecode: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired,
    len: PropTypes.string.isRequired,
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
  this.props.navigator.push({component: ManLoc,
      passProps: { topic: this.props.topic || '',
      coursecode: this.props.coursecode || '',
      len: this.props.len || '',
      }
  });
 }

 submit() {
   this.props.navigator.push({component: Loading});
 }

  render() {
    return (
    	<View style={styles.mainContainer}>
        <Menu/>

          <View style={styles.container}>
          <Text style={styles.confirmHead}> Course:</Text>
          <Text style={styles.confirmInput}>{this.props.coursecode}</Text>
          <Text style={styles.confirmHead}> Topic:</Text>
          <Text style={styles.confirmInput}>{this.props.topic}</Text>
          <Text style={styles.confirmHead}> For how long:</Text>
          <Text style={styles.confirmInput}>{this.props.len} minutes</Text>

          <View style={{paddingTop:34}}>
            <Text style={styles.courseCodeAsk}>
              Meet at your current location?
            </Text>
          </View>
          <View style={{paddingTop: 39}}>
              <TouchableHighlight
                style={styles.fullWidthButton}
                activeOpacity={0.6}
                underlayColor={'white'}
                onPress={this.submit.bind(this)}>
              <Text style={styles.fullWidthButtonText}>YES</Text>
              </TouchableHighlight>
          </View>
          <View style={{paddingTop: 20}}>
              <TouchableHighlight
                style={{width: 240, height: 34}}
                activeOpacity={0.6}
                underlayColor={'white'}
                onPress={this.nextStep.bind(this)}>
              <Text style={styles.footerText}>
              No, I’ll type in where I want to meet manually
              </Text>
              </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}
