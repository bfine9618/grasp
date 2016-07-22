import KeyboardSpacer from 'react-native-keyboard-spacer';
import React, { Component, PropTypes } from 'react';
import Menu from '../helper/Menu';
import Reciept from './payStamp';
import Communications from 'react-native-communications';
import {
  Navigator,
  Text, TouchableOpacity,
  View,
  Image,
  TextInput,
  TouchableHighlight
} from 'react-native';

var styles = require('../styles');
var i;

export default class Session extends Component{
  static propTypes = {
    studentObject: PropTypes.object.isRequired,
    session: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      user: "Student",
      minutes: '00',
      seconds: '00',
      inSession: false,
      cur: 'start'
    };
  }

  timer() {
    var min = 0;
    var sec = 0;
    i = setInterval(()=> {
      sec += 1;
      min = parseInt(sec/60);
      let strSec = '' + sec%60;
      if (strSec.length < 2) {
        strSec="0"+sec%60;
      }
      let strMin = '' + min;
      if(strMin.length < 2) {
        strMin = "0" + min
      }

      this.setState({
        seconds: strSec,
        minutes: strMin,
      })
    }, 1000);
  }

  start() {
    if(!this.state.inSession){
      this.timer();
      this.setState({
        inSession: true,
        cur: 'stop'
      });
    } else{
      this.cancel()
    }
  }


  cancel() {
    clearInterval(i);
    this.props.navigator.push({component: Reciept,
      passProps: {
        minutes: this.state.minutes || 0,
        seconds: this.state.seconds || 0,
        studentObject: this.props.studentObject,
        session: this.props.session
      }});
  }

  render() {
    return (
       <View style={[styles.mainContainer, {backgroundColor: '#f6f6f6'}]}>
          <Menu navigator={this.props.navigator}/>

          <View style={styles.container}>
          <Image style={{width:100, height: 100, borderRadius:50,
          borderWidth: 5, borderColor: '#3498DB', marginTop: -10}}
          source={require('../../images/ace.png')}/>
          <Text style={[styles.nearbyHeading, {marginTop:10}]}>
          {this.props.studentObject.name}</Text>
          <Info inSession= {this.state.inSession}
            session= {this.props.session}
            studentObject={this.props.studentObject}/>

          <View style={[styles.container, {marginTop:10}]}>
          <Text style={{fontFamily: 'Montserrat-Regular', fontSize:24,
          color: '#3498DB', marginTop: 25}}>Session Started</Text>
          <View style={{backgroundColor: 'white', marginTop: 5,
          justifyContent: 'center', alignItems:'center',
          height: 150, paddingTop:10, width: 300}}>

          <Text style={{fontFamily: 'Montserrat-Light', fontSize: 20,
          color: '#4a4a4a'}}> Elapsed Time: </Text>

          <Text style={{fontFamily: 'Montserrat-Regular', fontSize:36,
          color: '#4a4a4a', marginTop: 5, textAlign:'center'}}>
          {this.state.minutes} : {this.state.seconds}</Text>
          </View>
          <View style={{marginTop: 40}}>
            <TouchableHighlight
              style={styles.fullWidthButton}
              activeOpacity={0.6}
              underlayColor={'white'}
              onLongPress={() => this.start()}>
            <Text style={styles.fullWidthButtonText}>Hold to {this.state.cur}</Text>
            </TouchableHighlight>
          </View>
          </View>
        </View>
      </View>
    );
  }
}

var Info = React.createClass({
  propTypes: {
    inSession: React.PropTypes.bool.isRequired,
    session: React.PropTypes.object.isRequired,
    studentObject: React.PropTypes.object.isRequired,
  },
  render: function() {
    if (this.props.inSession){
      return (
        <View style={{justifyContent: 'space-around', flexDirection: 'row',
        marginTop: 5}}>
          <View>
          <Text style={styles.confirmHead}> Course:</Text>
          <Text style={[styles.confirmInput,
          {width: 100}]}>{this.props.session.coursecode}</Text>
          </View>
          <View>
          <Text style={styles.confirmHead}> Topic:</Text>
          <Text style={[styles.confirmInput, {width: 100}]}>
          {this.props.session.topic}</Text>
          </View>
          <View>
          <Text style={styles.confirmHead}>Length:</Text>
          <Text style={[styles.confirmInput, {width: 100}]}>
          {this.props.session.len} minutes</Text>
          </View>
        </View>
      );} else {
           if(this.props.session.loc.skype) {
             return(
               <View style={{alignItems: 'center'}}>
               <Image style={styles.aceImg}
               source={require('../../images/ace.png')}/>
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
             );} else {
            return (
             <View style={{alignItems:'center'}}>
             <Text style={{fontFamily:'Montserrat-Light', color: '#4a4a4a',
             fontSize:18, textAlign:'center', marginTop: 5}}>
             Your student is nearby. Don{'\''}t see them? Here{'\''}s their number:
             </Text>
             <TouchableOpacity
             style={{width: 150, height: 20, marginTop: 10}}
             onPress={() => {
               Communications.phonecall(this.props.studentObject.phone,
                 true)}}>
                <Text style={{fontFamily:'Montserrat-Light', color: '#3498DB',
                fontSize:22, textAlign:'center'}}>
                {this.props.studentObject.phone}</Text>
             </TouchableOpacity>
           </View>
         );}
      }}
  });
