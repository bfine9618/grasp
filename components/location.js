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
import ManLoc from "./manLocation";
import Confirm from "./confirm";

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
      student: {
        skype: 'braden.fineberg@gmail.com',
      }
    };
  }

  menu() {

  }


  prevStep() {
   this.props.navigator.pop();
 }

 nextStep() {
  this.props.navigator.push({component: Confirm,
      passProps: { topic: this.props.topic || '',
      coursecode: this.props.coursecode || '',
      len: this.props.len || '',
      loc: 'Your current location'
      }
  });
 }

 manLoc() {
  this.props.navigator.push({component: ManLoc,
      passProps: { topic: this.props.topic || '',
      coursecode: this.props.coursecode || '',
      len: this.props.len || '',
      }
  });
 }

 skype() {
   this.props.navigator.push({component: Confirm,
       passProps: { topic: this.props.topic || '',
       coursecode: this.props.coursecode || '',
       len: this.props.len || '',
       loc: this.state.student.skype
       }
   });
 }

  render() {
    return (
    	<View style={styles.mainContainer}>
         <Menu navigator={this.props.navigator}/>

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
                autoFocus={true}
                underlayColor={'white'}
                onPress={this.nextStep.bind(this)}>
              <Text style={styles.fullWidthButtonText}>YES</Text>
              </TouchableHighlight>
          </View>
          <View style={{paddingTop: 20}}>
              <TouchableHighlight
                style={{width: 240, height: 34}}
                activeOpacity={0.6}
                underlayColor={'white'}
                onPress={this.skype.bind(this)}>
              <Text style={styles.footerText}>
              No, I want to skype
              </Text>
              </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}
