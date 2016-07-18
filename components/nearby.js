import KeyboardSpacer from 'react-native-keyboard-spacer';
import React, { Component, PropTypes } from 'react';
import Menu from './helper/Menu';
import Home from './stuInitial';
import Active from './Session';
import Reciept from './reciept';
import {
  Navigator,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  Alert
} from 'react-native';

var styles = require('./styles');
var img;

export default class Nearby extends Component{
  static propTypes = {
    time: PropTypes.number.isRequired,
    tutorObject: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      user: "Student",
      time: '0',
      cancel: true,
    };

    img = require(this.props.tutorObject.img);
  }

  componentDidMount() {
    if(this.props.time >= 20){
      this.setState({cancel: false});
    }
    navigator.geolocation.stopObserving(0);
    this.cancelTimer();
  }

  cancelTimer() {
    let cur = this.props.time;
    var i = setInterval(() => {
        cur += 1;
        this.setState({time:  cur});
        if(cur == 20){
          this.setState({cancel: false});
          clearInterval( i );
        }
      }, 15000);
  }

  cancel() {
    if(this.state.cancel){
      this.props.navigator.push({component: Home})
    }
    else {
        Alert.alert(
      'Are you sure?',
      'You will be charged a $3.50 inertia fee' +
      'because you were assigned a tutor more than 5 minutes ago.',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'YES', onPress: () => this.props.navigator.push({component: Reciept,
          passProps: { cancelFee: true,
            tutorObject: this.props.tutorObject,
            seconds: "0",
            minutes: "0"
          }})},
      ]
    );
    }
  }

  render() {
    return (
    	<View style={styles.mainContainer}>
         <Menu navigator={this.props.navigator}/>

          <View style={styles.container}>
            <Image style={{width:210, height: 210, borderRadius:105,
            borderWidth: 5, borderColor: '#3498DB', marginTop: 20}}
            source={img}/>

            <Text style={[styles.nearbyHeading, {marginTop:15}]}>
            {this.props.tutorObject.name}</Text>
            <Text style={{fontFamily:'Montserrat-Light', color: '#4a4a4a',
            fontSize:18, textAlign:'center', marginTop: 5}}>
            Your tutor is nearby. Don{'\''}t see them? Here{'\''}s their number:
            </Text>
            <Text style={[styles.nearbyHeading, {marginTop:25}]}>
            {this.props.tutorObject.phone}</Text>
            <TouchableHighlight
              style={{width: 50, height: 50, marginTop:70}}
              activeOpacity={0.6}
              underlayColor={'white'}
              onPress={this.cancel.bind(this)}>
            <Image
                style = {{width:50, height:50}}
                source={require("../images/cancel.png")}
              />
            </TouchableHighlight>
            <Text style={styles.footerText}>
              <Text style={{marginTop:15}}>HOLD TO CANCEL</Text>
            </Text>
            <TouchableHighlight
              style={styles.fullWidthButton}
              activeOpacity={0.6}
              underlayColor={'white'}
              onPress={() => this.props.navigator.push({component: Active,
                passProps:{
                  tutorObject: this.props.tutorObject
                }})}>
                <Text style={styles.fullWidthButtonText}>active</Text>
                </TouchableHighlight>
          </View>
      </View>
    );
  }
}
