import React, { Component, PropTypes } from 'react';
import Menu from '../helper/Menu';
import Communications from 'react-native-communications';
import {
  Text,
  ListView,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableOpacity,
  MapView, Animated,
  Alert,
} from 'react-native';

import Active from './active';
import Home from '../welcome';

var styles = require('../styles');
var image;
var active = false;

export default class TutorFound extends Component {

  constructor(props) {
    super(props);
    this.state = {
      studentObject: {
        name: 'Jeff W',
        phone: '1234567899',
      },
      session: {
        coursecode: 'Econ 001',
        topic: 'Oligopoly Graphs',
        len: '25',
        skype: 'dudejeff@gmail.com',
        loc: {
          long: -75.190677,
          lat: 39.953008,
          name: 'hill 419',
          skype: false,
        },
      },
      initialPosition: "",
      lat: "",
      long: "",
      inSession: false,
      watchID: '',
      opacity: 1,
    };

    this.icons = {
        'up'    : require('../../images/up_blue.png'),
        'down'  : require('../../images/down.png')
    };
    that = this;
    image = require('../../images/jeff.png');
  }

  locate() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var init = JSON.stringify(position);
        this.setState({
            initialPosition : init,
            lat: position.coords.latitude,
            long: position.coords.longitude,
        });
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, maximumAge: 10000}
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lastPosition = JSON.stringify(position);
      this.setState({
          initialPosition : lastPosition,
          lat: position.coords.latitude,
          long: position.coords.longitude,
      });
      this.nearby();
    }, (error) => {},
    {enableHighAccuracy: true, maximumAge: 500});
  }

  nearby() {
    var deltaY = Math.pow((parseFloat(this.state.lat) -
      (parseFloat(this.state.session.loc.lat))), 2);
    var deltaX = Math.pow((parseFloat(this.state.long) -
    (parseFloat(this.state.session.loc.long))), 2);
    console.log(this.state.inSession);
    if (Math.sqrt(deltaX + deltaY) <= 0.0009 && active) {
      navigator.geolocation.clearWatch(this.watchID);
      that.props.navigator.push({component: Active,
        passProps: { time: this.state.time || 0,
        studentObject: this.state.studentObject,
        session: this.state.session,
      }});
    }
  }

  where() {
    active = true;
    this.setState({inSession: true,
      opacity: 0});
    this.nearby();
  }

  componentDidMount() {
    this.locate();
    this.nearby();
  }

  componentWillUnmount() {
  clearInterval(timer);
  clearInterval(i);
  clearInterval(near);
  navigator.geolocation.clearWatch(this.watchID);
}
  render() {
    let icon = this.icons['down'];

      if(this.state.expanded){
          icon = this.icons['up'];
      }

    var region = {
      latitude:((parseFloat(this.state.lat) +
      (parseFloat(this.state.session.loc.lat)))/2),
      longitude:((parseFloat(this.state.long) +
      (parseFloat(this.state.session.loc.long)))/2),
      latitudeDelta: 0.01217391,
      longitudeDelta: 0.00614492,
    }

    return (
      <View>
        <Menu navigator={this.props.navigator}/>
        <SessionInfo inSession={this.state.inSession}
        session={this.state.session}
        studentObject={this.state.studentObject}
        />

        <MapView
          style={{height: 1000}}
          showsUserLocation={true}
          region={region}
          annotations={[{
            latitude: this.state.session.loc.lat,
            longitude: this.state.session.loc.long,
            view: <Image style={{width:40, height:40,
              borderRadius:20, borderWidth:3, borderColor:'#3498DB'}}
              source={image}/>
          }]}>
          </MapView>

        <View style={{height: 70, paddingTop: 5, alignItems: 'center',
        opacity: this.state.opacity,
        paddingLeft: 20, backgroundColor:'transparent', position: 'absolute',
          justifyContent: 'space-around', left: 0, top: 570, width: 180}}>
          <TouchableHighlight
            style={[styles.fullWidthButton, {width: 154}]}
            activeOpacity={0.6}
            underlayColor={'white'}
            onPress={() => this.where()}>
          <Text style={styles.fullWidthButtonText}>ACCEPT</Text>
          </TouchableHighlight>
        </View>
        <Ignore inSession={this.state.inSession}
        navigator={this.props.navigator}/>
      </View>
    );
  }
}

var SessionInfo = React.createClass({
  propTypes: {
    inSession: React.PropTypes.bool.isRequired,
    session: React.PropTypes.object.isRequired,
    studentObject: React.PropTypes.object.isRequired,
  },

  formatPhone: function() {
    var tel = this.props.studentObject.phone;
    return '(' + tel.substring(0,3) + ') ' + tel.substring(3,6) +
      '-' + tel.substring(6);
  },

  render: function() {
    if (!this.props.inSession){
      return (
        <View style={{height: 260,
          overflow: 'hidden', alignItems: 'center', paddingTop:15,
          backgroundColor:'#f6f6f6',
          borderBottomColor:'rgba(74, 74, 74, 0.08)',
          borderBottomWidth: 4}}>
          <Text style={{fontFamily: 'Montserrat-Light', color: '#4a4a4a',
          textAlign: 'center', fontSize:22, paddingLeft: 30, paddingRight: 30}}>
            A student nearby needs your help!
            </Text>
            <Text style={[styles.confirmHead, {marginTop:15}]}> Course:</Text>
            <Text style={[styles.cInput]}>
              {this.props.session.coursecode}
             </Text>
            <Text style={styles.confirmHead}> Topic:</Text>
            <Text style={[styles.cInput]}>
              {this.props.session.topic}</Text>
            <Text style={styles.confirmHead}> For how long (minutes):</Text>
            <Text style={[styles.cInput]}>
              {this.props.session.len}
             </Text>
            <Text style={styles.confirmHead}> Where:</Text>
            <Text style={[styles.cInput]}>
              {this.props.session.loc.name}</Text>
          </View>
      );} else {
        return (
          <View style={{height: 260,
            overflow: 'hidden', alignItems: 'center', paddingTop:15,
            backgroundColor:'#f6f6f6',
            borderBottomColor:'rgba(74, 74, 74, 0.08)',
            borderBottomWidth: 4}}>
          <Image style={{borderWidth:6, borderRadius:54,
            borderColor:'#3498DB', width:108, height:108}}
            source={require('../../images/jeff.png')}/>
          <Text style={{fontFamily: 'Montserrat-Light', color: '#4a4a4a',
          textAlign: 'center', fontSize:22, paddingLeft: 30, paddingRight: 30}}>
            {this.props.studentObject.name}
          </Text>
          <TouchableOpacity
          style={{height: 20}}
          onPress={() => {
            Communications.phonecall(this.props.studentObject.phone,
              true)}}>
             <Text style={{fontFamily:'Montserrat-Light', color: '#3498DB',
             fontSize:22, textAlign:'center'}}>
             {this.formatPhone()}</Text>
          </TouchableOpacity>
          <View style={{justifyContent: 'space-around', flexDirection: 'row',
          marginTop: 15}}>
            <View>
            <Text style={[styles.confirmHead,{marginBottom: 0}]}> Course:</Text>
            <Text style={[styles.confirmInput,{width: 100}]}>{this.props.session.coursecode}</Text>
            </View>
            <View>
            <Text style={[styles.confirmHead,{marginBottom: 0}]}> Topic:</Text>
            <Text style={[styles.confirmInput, {width: 100}]}>
            {this.props.session.topic}</Text>
            </View>
            <View>
            <Text style={[styles.confirmHead,{marginBottom: 0}]}>Length:</Text>
            <Text style={[styles.confirmInput, {width: 100}]}>
            {this.props.session.len} minutes</Text>
            </View>
          </View>
        </View>
          );}
        }
  });

  var Ignore = React.createClass({
    propTypes: {
      inSession: React.PropTypes.bool.isRequired,
    },

    ignore: function() {
      this.props.navigator.push({component: Home});
    },

    render: function() {
      if (!this.props.inSession){
        return (
          <View style={{height: 70, paddingTop: 5, alignItems: 'center',
          paddingLeft: 20, backgroundColor:'transparent', position: 'absolute',
            justifyContent: 'space-around', left: 180, top: 570, width: 180}}>
            <TouchableHighlight
              style={[styles.fullWidthButton, {width: 154,
                borderColor: 'rgba(0,0,0,.1)', borderWidth: 1,
                backgroundColor:'rgba(255,255,255, .7)'}]}
              activeOpacity={0.6}
              underlayColor={'white'}
              onPress={() => this.ignore()}>
            <Text style={[styles.fullWidthButtonText,
              {color: '#4a4a4a'}]}>IGNORE</Text>
            </TouchableHighlight>
          </View>
        );} else {
          return (
            <View style={{height: 70, paddingTop: 5, alignItems: 'center',
            paddingLeft: 20, backgroundColor:'transparent', position: 'absolute',
              justifyContent: 'space-around', left: 90, top: 570, width: 180}}>
            <TouchableHighlight
              style={{width: 50, height: 50}}
              activeOpacity={0.6}
              underlayColor={'transparent'}
              onLongPress={() => this.ignore()}>
            <Image
                style = {{width:50, height:50}}
                source={require("../../images/cancel.png")}
              />
            </TouchableHighlight>
            <Text style={styles.footerText}>
              <Text style={{marginTop:15}}>HOLD TO CANCEL</Text>
            </Text>
            </View>
            );}
          }
    });
