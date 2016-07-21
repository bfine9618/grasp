import React, { Component, PropTypes } from 'react';
import Menu from '../helper/Menu';
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

import Nearby from '../nearby';

var styles = require('../styles');
var that;
var first = true;
var timer;
var image;
var i;
var near;

export default class TutorFound extends Component {

  constructor(props) {
    super(props);
    this.state = {
      studentObject: {

      },
      session: {
        coursecode: 'Econ 001',
        topic: 'Oligopoly Graphs',
        len: '25',
        loc: {
          long: -75.190677,
          lat: 39.953008,
          name: 'hill 419',
        },
      },
      selectedOption: "REVIEWS",
      animation: new Animated.Value(75),
      expanded: false,
      initialPosition: "",
      lat: "",
      long: "",
      inSession: false,
      time: 0,
      cancel: true,
      centerLat: 0,
      centerLong: 0,
      watchID: '',
    };

    this.icons = {
        'up'    : require('../../images/up_blue.png'),
        'down'  : require('../../images/down.png')
    };
    that = this;
    image = require('../../images/jeff.png');
  }

  toggle() {
    let initialValue    = this.state.expanded? 260 : 77,
        finalValue      = this.state.expanded? 77 : 260;

    this.setState({
        expanded : !this.state.expanded
    });

    this.state.animation.setValue(initialValue);
    Animated.spring(
        this.state.animation,
        {
            toValue: finalValue
        }
    ).start();
  }

  cancel() {
      navigator.geolocation.stopObserving(0);
      this.props.navigator.push({component: Home});
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
    if (Math.sqrt(deltaX + deltaY) <= 0.0009) {
      clearInterval(near);
      clearInterval(i);
      console.log(this.props.session);
      navigator.geolocation.clearWatch(this.watchID);
      that.props.navigator.push({component: Nearby,
        passProps: { time: this.state.time || 0,
        studentObject: this.state.studentObject,
        session: this.state.session,
      }});
    }
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
      latitudeDelta: 0.01517391,
      longitudeDelta: 0.00614492,
    }

    var mapHeight = (1075 - this.state.animation);

    return (
      <View>
        <Menu navigator={this.props.navigator}/>
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
          }]}
          onAnnotationPress={this.toggle.bind(this)}>
          </MapView>
        <TouchableWithoutFeedback
            style={{height: this.state.animation, position: 'absolute',
            left: 0, top: 60}}
            onPress={this.toggle.bind(this)}
            underlayColor="#f6f6f6">
            <Animated.View style={{height: this.state.animation,
              overflow: 'hidden', alignItems: 'center', paddingTop:15,
              backgroundColor:'#f6f6f6', position: 'absolute',
              left: 0, top: 60,
              borderBottomColor:'rgba(74, 74, 74, 0.08)',
              borderBottomWidth: 4}}>
              <Text style={{fontFamily: 'Montserrat-Light', color: '#4a4a4a',
              textAlign: 'center', fontSize:22, paddingLeft: 30, paddingRight: 30}}>
                Hey! A student nearby needs your help!
                </Text>
                <Text style={[styles.confirmHead, {marginTop:15}]}> Course:</Text>
                <Text style={[styles.cInput]}>
                  {this.state.session.coursecode}
                 </Text>
                <Text style={styles.confirmHead}> Topic:</Text>
                <Text style={[styles.cInput]}>
                  {this.state.session.topic}</Text>
                  <Text style={styles.confirmHead}> For how long (minutes):</Text>
                  <Text style={[styles.cInput]}>
                    {this.state.session.len}
                   </Text>
                  <Text style={styles.confirmHead}> Where:</Text>
                  <Text style={[styles.cInput]}>
                    {this.state.session.loc.name}</Text>
            </Animated.View>
        </TouchableWithoutFeedback>

        <View style={{height: 70, paddingTop: 5, alignItems: 'center',
        paddingLeft: 20, backgroundColor:'transparent', position: 'absolute',
          justifyContent: 'space-around', left: 0, top: 570, width: 180}}>
          <TouchableHighlight
            style={[styles.fullWidthButton, {width: 154}]}
            activeOpacity={0.6}
            underlayColor={'white'}
            onPress={this.toggle.bind(this)}>
          <Text style={styles.fullWidthButtonText}>ACCEPT</Text>
          </TouchableHighlight>
        </View>
        <View style={{height: 70, paddingTop: 5, alignItems: 'center',
        paddingLeft: 20, backgroundColor:'transparent', position: 'absolute',
          justifyContent: 'space-around', left: 180, top: 570, width: 180}}>
          <TouchableHighlight
            style={[styles.fullWidthButton, {width: 154,
              borderColor: 'rgba(0,0,0,.1)', borderWidth: 1,
              backgroundColor:'rgba(255,255,255, .7)'}]}
            activeOpacity={0.6}
            underlayColor={'white'}
            onPress={this.toggle.bind(this)}>
          <Text style={[styles.fullWidthButtonText,
            {color: '#4a4a4a'}]}>Ignore</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
