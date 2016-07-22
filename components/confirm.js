import KeyboardSpacer from 'react-native-keyboard-spacer';
import React, { Component, PropTypes } from 'react';
import Menu from './helper/Menu';
import {
  Navigator, Alert,
  Text, View,
  Image, TextInput,
  TouchableHighlight
} from 'react-native';

import Loading from './loading';

var styles = require('./styles');

export default class Location extends Component{
  static propTypes = {
    coursecode: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired,
    len: PropTypes.string.isRequired,
    loc: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      user: "Student",
      coursecode: this.props.coursecode,
      topic: this.props.topic,
      len: this.props.len,
      loc: this.props.loc,
      tutor: '',
      date: new Date().toDateString(),
    };
  }

  canSubmit() {
    if (this.state.coursecode && this.state.topic && this.state.len){
        return true;
    } else {
      Alert.alert(
    'I need more information!',
    'Please fill in all of the entries (course, topic, and length).',
    [{text: 'OK', onPress: () => {}}]);
    }
    return false;
  }

 submit() {
   console.log(this.state);
   if (this.canSubmit()){
   this.props.navigator.push({component: Loading,
     passProps: {
       session: this.state,
     }
   });
  }
 }

  render() {
    return (
    	<View style={styles.mainContainer}>
         <Menu navigator={this.props.navigator}/>

         <Image
           style = {[styles.aceImg, {alignSelf: 'center', marginTop:10}]}
           source={require("../images/ace.png")}
           />
         <Text style={[styles.courseCodeAsk,{marginLeft: 20,
           marginRight: 20, marginTop: -9}]}>
           If the information below is correct, I{'\''}ll find you a tutor.
          </Text>

          <View style={[styles.container, {marginTop:10}]}>
          <Text style={styles.confirmHead}> Course:</Text>
          <TextInput
            style={[styles.cInput]}
            onChangeText={(text) => this.setState({coursecode: text})}
            value={this.state.coursecode}
            placeholder='Course Code'
           />
          <Text style={styles.confirmHead}> Topic:</Text>
          <TextInput
            style={[styles.cInput]}
            onChangeText={(text) => this.setState({topic : text})}
            value={this.state.topic}
            placeholder='Topic'
           />
          <Text style={styles.confirmHead}> For how long (minutes):</Text>
          <Text style={[styles.cInput]}>
            {this.state.len}
           </Text>
        {(() => {
          if(this.props.loc.indexOf('@') >= 0 ){
            return(
            <Text style={styles.confirmHead}> Skype Email:</Text>
          );} else {
            return(
            <Text style={styles.confirmHead}> Where:</Text>
          );}
        })() }
        <Text style={[styles.cInput]}>
          {this.props.loc}</Text>
           <KeyboardSpacer/>
          <View style={{paddingTop: 80}}>
              <TouchableHighlight
                style={styles.fullWidthButton}
                activeOpacity={0.6}
                underlayColor={'white'}
                onPress={this.submit.bind(this)}>
              <Text style={styles.fullWidthButtonText}>Find me a tutor</Text>
              </TouchableHighlight>

          </View>
          <View style={{paddingTop: 10}}>
          <Text style={styles.footerText}>
          or tap course code or topic to revise
          </Text>
          </View>

        </View>
      </View>
    );
  }
}
