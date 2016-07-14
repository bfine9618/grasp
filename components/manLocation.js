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

 canNext() {
        return this.state.loc;
    }

 submit() {
   if (this.canNext()){
     this.props.navigator.push({component: Loading,
       passProps: { loc: this.state.loc || ''
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
          <Text style={styles.confirmInput}>{this.props.coursecode}</Text>
          <Text style={styles.confirmHead}> Topic:</Text>
          <Text style={styles.confirmInput}>{this.props.topic}</Text>
          <Text style={styles.confirmHead}> Length:</Text>
          <Text style={styles.confirmInput}>{this.props.len}</Text>


          <View style={{paddingTop:15}}>
            <Text style={styles.courseCodeAsk}>
              Where would you like to meet?
            </Text>
          </View>
          <View style={{paddingTop: 15}}>
              <TextInput
               style={styles.wideInput}
               onChangeText={(text) => this.setState({loc : text})}
               value={this.state.loc}
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
