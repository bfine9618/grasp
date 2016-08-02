import KeyboardSpacer from 'react-native-keyboard-spacer';
import React, { Component, PropTypes } from 'react';
import Menu from './helper/Menu';
import Home from './stuInitial';
import Active from './Session';
import Reciept from './reciept';
import Communications from 'react-native-communications';
import {
  Navigator, TouchableOpacity,
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
    session: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      user: "Student",
      time: '0',
      cancel: true,
    };

    img = require('../images/jeff.png');
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

  formatPhone() {
    var tel = this.props.tutorObject.phone;
    return '(' + tel.substring(0,3) + ') ' + tel.substring(3,6) +
      '-' + tel.substring(6);
  }

  render() {
    return (
    	<View style={styles.mainContainer}>
         <Menu navigator={this.props.navigator}/>

           <View style={styles.container}>
         	{(() => {
            if(false) {
              return(
                <View style={{alignItems: 'center'}}>
                <Image style={styles.aceImg}
                source={require('../images/ace.png')}/>
                <Text style={{fontFamily:'Montserrat-Light', color: '#4a4a4a',
                fontSize:18, textAlign:'center', marginTop: 5}}>
                Please log into Skype and begin your session with
                {' '}{this.props.tutorObject.name}! Here is
                 {' '}{this.props.tutorObject.name}{'\''}s Skype username:
                </Text>

                <Text style={{fontFamily:'Montserrat-Light', color: '#3498DB',
                fontSize:22, textAlign:'center', marginTop: 40}}>
                {this.props.tutorObject.skype}
                </Text>
                </View>
              );
          } else {
            return (
              <View style={{alignItems:'center'}}>
              <Image style={{width:210, height: 210, borderRadius:105,
              borderWidth: 5, borderColor: '#3498DB', marginTop: 20}}
              source={img}/>
              <Text style={[styles.nearbyHeading, {marginTop:15}]}>
              this.props.tutorObject.name}</Text>
              <Text style={{fontFamily:'Montserrat-Light', color: '#4a4a4a',
              fontSize:18, textAlign:'center', marginTop: 5}}>
              Your tutor is nearby. Can{'\''}t find them? Here{'\''}s their number:
              </Text>
              <View style={{marginTop: 20}}>
              <TouchableOpacity
              style={{height: 60, alignItems: 'center'}}
              onPress={() => {
                Communications.phonecall(this.props.tutorObject.phone,
                  true)}}>
                  <Text style={[styles.nearbyHeading,
                    {color: '#3498DB'}]}>
                  {this.formatPhone()}</Text>
              </TouchableOpacity>
              </View>
            </View>
          );
        }
      })() }

        <TouchableHighlight
          style={{width: 50, height: 50, marginTop:45}}
          activeOpacity={0.6}
          underlayColor={'white'}
          onLongPress={this.cancel.bind(this)}>
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
              tutorObject: this.props.tutorObject,
              session: this.props.session
            }})}>
            <Text style={styles.fullWidthButtonText}>active</Text>
            </TouchableHighlight>
      </View>
    </View>
  );
  }
}
