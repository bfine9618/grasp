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
import Loc from "./location";

export default class length extends Component{
  static propTypes = {
    coursecode: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired
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
         return this.state.len
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
  this.props.navigator.push({component: Loc,
      passProps: { topic: this.props.topic,
      coursecode: this.props.coursecode || '',
      len: this.state.len,
      }
  });
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
            <Text style={styles.confirmInput}>{this.props.coursecode}</Text>
            <Text style={styles.confirmHead}> Topic:</Text>
            <Text style={styles.confirmInput}>{this.props.topic}</Text>

            <View style={{paddingTop:30}}>
                <Text style={styles.courseCodeAsk}>
                  For how long?
                </Text>
                <View style={styles.howLongView}>
                <View>
                  <TextInput
                      style={styles.wideInput}
                      onChangeText={(text) => this.setState({len : text})}
                      value={this.state.len}
                      placeholder="20"
                   />
                    <View style={[styles.shortLine, !this.canNext() && styles.disabledLine]}>
                    </View>
                  </View>

                  <View style={{marginTop: 8}}>
                  <Text style={{fontFamily: 'Montserrat-Light', fontSize: 20, color: '#3498DB'}}> minutes</Text>
                  </View>

                </View>
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
