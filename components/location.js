import KeyboardSpacer from 'react-native-keyboard-spacer';
import React, { Component, PropTypes } from 'react';
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

 request() {}

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
                onPress={this.request.bind(this)}>
              <Text style={styles.fullWidthButtonText}>YES</Text>
              </TouchableHighlight>
          </View>
          <View style={{paddingTop: 20}}>
              <TouchableHighlight
                style={{width: 240, height: 34}}
                activeOpacity={0.6}
                underlayColor={'white'}
                onPress={this.nextStep.bind(this)}>
              <Text style={{fontFamily: 'Montserrat-Light',
              fontSize: 14, color: '#4A4A4A', textAlign:'center'}}>
              No, I’ll type in where I want to meet manually
              </Text>
              </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}
