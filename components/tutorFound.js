import React, { Component, PropTypes } from 'react';
import Menu from './helper/Menu';
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
import TimerMixin from 'react-timer-mixin';

import { RadioButtons } from 'react-native-radio-buttons';
import Nearby from './nearby';
import Home from './stuInitial';
import Reciept from './reciept';


var styles = require('./styles');
var that;
var first = true;
var timer;
var image;
var i;
var near;

export default class TutorFound extends Component {
  static propTypes = {
    tutorObject: PropTypes.object.isRequired,
    session: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "REVIEWS",
      animation: new Animated.Value(77),
      expanded: false,
      initialPosition: "",
      lastPosition: "",
      lat: "",
      long: "",
      inSession: false,
      time: 0,
      cancel: true,
      mixins: [TimerMixin],
      centerLat: 0,
      centerLong: 0,
      watchID: '',
    };

    this.icons = {
        'up'    : require('../images/up_blue.png'),
        'down'  : require('../images/down.png')
    };
    that = this;
    image = require('../images/jeff.png');
  }

  toggle() {
    let initialValue    = this.state.expanded? 516 : 77,
        finalValue      = this.state.expanded? 77 : 516;

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
    if(this.state.cancel){
      navigator.geolocation.stopObserving(0);
      this.props.navigator.push({component: Home});
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

  cancelTimer() {
    let cur = 0;
    i = setInterval(() => {
        cur += 1;
        this.setState({time:  cur});
        if(cur == 20){
          this.setState({cancel: false});
          clearInterval( i );
        }
      }, 15000);
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
      (parseFloat(this.props.tutorObject.lat))), 2);
    var deltaX = Math.pow((parseFloat(this.state.long) -
    (parseFloat(this.props.tutorObject.long))), 2);
    if (Math.sqrt(deltaX + deltaY) <= 0.0011) {
      clearInterval(near);
      clearInterval(i);
      navigator.geolocation.clearWatch(this.watchID);
      that.props.navigator.push({component: Nearby,
        passProps: { time: this.state.time || 0,
        tutorObject: this.props.tutorObject,
        session: this.props.session
      }});
    }
  }

  componentDidMount() {
    this.locate();
    this.nearby();
    this.cancelTimer();
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

      const options = [
        "REVIEWS",
        "ABOUT"
        ];

        function setSelectedOption(selectedOption){
          this.setState({
            selectedOption: selectedOption
          });
        }

        function renderOption(option, selected, onSelect, index){
          const style = selected ? { fontWeight: 'bold', color: '#3498DB',
          fontSize: 20, fontFamily: 'Montserrat-Light',
          textDecorationLine:'underline'} :
          {color: '#d3d3d3', fontSize: 20, fontFamily: 'Montserrat-Light'};

          return (
            <TouchableWithoutFeedback onPress={onSelect} key={index}>
              <View><Text style={style}>{option}</Text></View>
            </TouchableWithoutFeedback>
          );
        }

        function renderContainer(optionNodes){
          return <View>{optionNodes}</View>;
        }

    var region = {
      latitude:((parseFloat(this.state.lat) +
      (parseFloat(this.props.tutorObject.lat)))/2),
      longitude:((parseFloat(this.state.long) +
      (parseFloat(this.props.tutorObject.long)))/2),
      latitudeDelta: 0.01517391,
      longitudeDelta: 0.01014492,
    }

    return (
      <View>
        <Menu navigator={this.props.navigator}/>
        <Animated.View style={{height:this.state.animation}}>
          <MapView
            style={{height: 516}}
            showsUserLocation={true}
            region={region}
            annotations={[{
              latitude: this.props.tutorObject.lat,
              longitude: this.props.tutorObject.long,
              view: <Image style={{width:40, height:40,
                borderRadius:20, borderWidth:3, borderColor:'#3498DB'}}
                source={image}/>
            }]}
            onAnnotationPress={this.toggle.bind(this)}/>
        </Animated.View>
        <View style={{backgroundColor:"#f6f6f6", paddingTop:10}}>
          <View style={{justifyContent:'space-around', flexDirection:'row'}}>
            <View>
            <Image
              style={{marginTop:-65, borderWidth:6, borderRadius:54,
                borderColor:'#3498DB', width:108, height:108}}
                source={image}/>
                <Text style={{fontFamily:'Montserrat-Regular',
                fontSize: 24, color: '#4a4a4a', textAlign: 'center'}}>
                {this.props.tutorObject.name}</Text>
            </View>
            <View>
            <TouchableHighlight
                style={styles.menuButton}
                onPress={this.toggle.bind(this)}
                underlayColor="#f6f6f6">
                <Image
                    style={styles.hamburger}
                    source={icon}
                ></Image>
            </TouchableHighlight>
            <TouchableOpacity
            style={{width: 60, height: 40}}
            onPress={() => {
              Communications.phonecall(this.props.tutorObject.phone,
                true)}}>
              <View style={{marginTop:-30, marginBottom: 10,
                backgroundColor:"blue", width: 50, height: 30}}>
                <Text>Make phonecall</Text>
              </View>
            </TouchableOpacity>
            </View>
            <View style={{alignItems:'center'}}>
              <Text style={{color:'#3498DB', fontSize:24,
                fontFamily: "Montserrat-Light"}}>Eta: </Text>
              <Text style={{fontFamily: "Montserrat-Regular",
                color:'#3498DB', fontSize:24}}>4 min.</Text>
            </View>
          </View>
          <View style={{justifyContent:'center', alignItems:'center'}}>
            <Text style={{color:'#4a4a4a', fontSize:16, marginBottom: 7,
            fontFamily: "Montserrat-Light", marginTop: 10,}}>
            {this.props.tutorObject.reviewCount} reviews</Text>
            <Image style={{width: 168, resizeMode:'contain', height: 27}}
              source={require('../images/reviews.png')}/>
          </View>
          <View style={{height: 350, alignItems:'center', marginTop: 25}}>
          <RadioButtons
            options={options}
            onSelection={ setSelectedOption.bind(this) }
            selectedOption={this.state.selectedOption}
            renderOption={renderOption}
            renderContainer={RadioButtons.getViewContainerRenderer({
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: 318,
            })}
          />
  			{(() => {
          		switch (this.state.selectedOption) {
            		case "REVIEWS":   return (
            			<View>
          			</View>
            			);
           		 case "ABOUT": return (
                <View>
                 <View>
                    <Text style={[styles.profileText, {fontFamily:'Montserrat-Light',
                    textAlign:'center', marginTop:30, width: 300}]}>{'\"'}
                    {this.props.tutorObject.bio}{'\"'}</Text>
                </View>
                 <View style={{paddingLeft: 30}}>
                   <Text style={[styles.profileText, {fontFamily:'Montserrat-Light',
                   textAlign:'left', marginTop:25}]}>Major:</Text>
                   <Text style={[styles.profileText, {fontFamily:'Montserrat-Regular',
                   textAlign:'left', marginTop:5}]}>
                   {this.props.tutorObject.major}</Text>
                   <Text style={[styles.profileText, {fontFamily:'Montserrat-Light',
                   textAlign:'left', marginTop:20}]}>Graduation Year:</Text>
                   <Text style={[styles.profileText, {fontFamily:'Montserrat-Regular',
                   textAlign:'left', marginTop:5}]}>{this.props.tutorObject.year}</Text>
                  </View>
                  </View>
            			);
            		default:      return <Text>""</Text>;
          	}
       		})() }
          <View style={{paddingTop: 10, alignItems: 'center'}}>
              <TouchableHighlight
                style={{width: 50, height: 50}}
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
          </View>

          </View>
        </View>
      </View>
    );
  }
}
