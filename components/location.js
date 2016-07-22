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
  canNext() {
         return this.state.loc
     }

  prevStep() {
   this.props.navigator.pop();
 }

 nextStep() {
  if(this.canNext()) {
    this.props.navigator.push({component: Confirm,
        passProps: { topic: this.props.topic || '',
        coursecode: this.props.coursecode || '',
        len: this.props.len || '',
        loc: this.state.loc
        }
    });
 }
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

          <Text style={[{marginBottom: 34}, styles.courseCodeAsk]}>
            Where are you, specifically?
           </Text>
           <TextInput
            style={styles.wideInput}
            onChangeText={(text) => this.setState({loc : text})}
            autoFocus={true}
            autoCorrect={false}
            value={this.state.loc}
            placeholder="library basement, by the cafe"
          />
          <View style={[styles.line, !this.canNext() && styles.disabledLine]}/>
          <View style={{paddingTop: 10}}>
              <TouchableHighlight
                style={{width: 240, height: 34}}
                activeOpacity={0.6}
                underlayColor={'white'}
                onPress={this.skype.bind(this)}>
              <Text style={styles.footerText}>
              I want to skype
              </Text>
              </TouchableHighlight>
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
