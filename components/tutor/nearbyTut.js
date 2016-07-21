import React, { Component, PropTypes } from 'react';
import Menu from './helper/Menu';
import Home from './tutorInitial';
import Active from './active';
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

var styles = require('../styles');
var img;

export default class Nearby extends Component{
  static propTypes = {
    studentObject: PropTypes.object.isRequired,
    session: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      user: "Student",
    };

    img = require('../../images/ace.png');
  }

  componentDidMount() {
    navigator.geolocation.stopObserving(0);
  }

  cancel() {
      this.props.navigator.push({component: Home});
  }

  render() {
    return (
    	<View style={styles.mainContainer}>
         <Menu navigator={this.props.navigator}/>

           <View style={styles.container}>
         	{(() => {
            if(this.props.session.loc.indexOf('@') >= 0) {
              return(
                <View style={{alignItems: 'center'}}>
                <Image style={styles.aceImg}
                source={require('../images/ace.png')}/>
                <Text style={{fontFamily:'Montserrat-Light', color: '#4a4a4a',
                fontSize:18, textAlign:'center', marginTop: 5}}>
                Please log into Skype and begin your session with
                {' '}{this.props.studentObject.name}! Here is
                 {' '}{this.props.StudentObject.name}{'\''}s Skype username:
                </Text>

                <Text style={{fontFamily:'Montserrat-Light', color: '#3498DB',
                fontSize:22, textAlign:'center', marginTop: 40}}>
                {this.props.studentObject.skype}
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
              {this.props.studentObject.name}</Text>
              <Text style={{fontFamily:'Montserrat-Light', color: '#4a4a4a',
              fontSize:18, textAlign:'center', marginTop: 5}}>
              Your student is nearby. Don{'\''}t see them? Here{'\''}s their number:
              </Text>
              <View style={{marginTop: 15}}>
              <TouchableOpacity
              style={{width: 60, height: 40}}
              onPress={() => {
                Communications.phonecall(this.props.studentObject.phone,
                  true)}}>
                <View style={{marginTop:30,
                  backgroundColor:"blue", width: 50, height: 30}}>
                  <Text>Make phonecall</Text>
                </View>
              </TouchableOpacity>
              </View>
            </View>
          );
        }
      })() }

        <TouchableHighlight
          style={{width: 50, height: 50, marginTop:70}}
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
