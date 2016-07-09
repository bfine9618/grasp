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
import StudentSignUp from "./signup"
import LengthReq from "./length"

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
      len: this.props.len || '',
      }
  });
 }
 }

 submit() {}

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
          <Text style={styles.confirmHead}> Length:</Text>
          <Text style={styles.confirmInput}>{this.props.len}</Text>


          <View style={{paddingTop:25}}>
            <Text style={styles.courseCodeAsk}>
              Where would you like to meet?
            </Text>
          </View>
          <View style={{paddingTop: 25}}>
              <TextInput
               style={styles.wideInput}
               onChangeText={(text) => this.setState({topic : text})}
               value={this.state.topic}
               placeholder="ie Houston, downstairs"
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
            onPress={this.submit.bind(this)}>
          <Text style={[styles.textLink, !this.canNext() && styles.disabled]}>FINISH</Text>
          </TouchableHighlight>
          </View>
          <KeyboardSpacer/>
        </View>
      </View>
    );
  }
}
