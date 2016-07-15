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
    };
  }

 submit() {
   this.props.navigator.push({component: Loading});
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
            onChangeText={(text) => this.setState({coursecode : text})}
            value={this.state.coursecode}
            placeholderTextColor={'#3498DB'}
            placeholder={this.props.coursecode}
           />
          <Text style={styles.confirmHead}> Topic:</Text>
          <TextInput
            style={[styles.cInput]}
            onChangeText={(text) => this.setState({topic : text})}
            value={this.state.topic}
            placeholderTextColor={'#3498DB'}
            placeholder={this.props.topic}
           />
          <Text style={styles.confirmHead}> For how long (minutes):</Text>
          <TextInput
            style={[styles.cInput]}
            onChangeText={(text) => this.setState({len : text})}
            value={this.state.len}
            placeholderTextColor={'#3498DB'}
            placeholder={this.props.len}
           />
          <Text style={styles.confirmHead}> Where:</Text>
          <TextInput
            style={[styles.cInput]}
            onChangeText={(text) => this.setState({loc : text})}
            value={this.state.loc}
            placeholderTextColor={'#3498DB'}
            placeholder={this.props.loc}
           />

           <KeyboardSpacer/>
          <View style={{paddingTop: 50}}>
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
          or tap the section above that you would like to revise
          </Text>
          </View>

        </View>
      </View>
    );
  }
}
