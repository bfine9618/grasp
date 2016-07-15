import React, { Component, PropTypes } from 'react';
import Menu from './helper/Menu';
import {
  Text,
  ListView,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableOpacity,
  MapView, Animated
} from 'react-native';

import { RadioButtons } from 'react-native-radio-buttons';


var styles = require('./styles');

var that;
export default class TutorFound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tutorObject: {
        name: "Braden",
        phone: "(123)-456-789",
        rating: "4.5",
        reviewCount: "12",
      },
      info: "Reviews",
      animation: new Animated.Value(77),
      expanded: false,
    };

    this.icons = {
        'up'    : require('Grasp/images/up_blue.png'),
        'down'  : require('Grasp/images/down.png')
    };

    that = this;
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

  render() {
    let icon = this.icons['down'];

      if(this.state.expanded){
          icon = this.icons['up'];
      }

    return (
      <View>
        <Menu/>
        <Animated.View style={{height:this.state.animation}}>
          <MapView
            style={{height: 516}}
            showsUserLocation={true}
            followUserLocation={true}/>
        </Animated.View>
        <View style={{backgroundColor:"#f6f6f6", paddingTop:10}}>
          <View style={{justifyContent:'space-around', flexDirection:'row'}}>
            <View>
            <Image
              style={{marginTop:-65, borderWidth:6, borderRadius:54,
                borderColor:'#3498DB', width:108, height:108}}
                source={require('../images/jeff.png')}/>
                <Text style={{fontFamily:'Montserrat-Regular',
                fontSize: 24, color: '#4a4a4a', textAlign: 'center'}}>
                {this.state.tutorObject.name}</Text>
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
            <TouchableHighlight
                style={[styles.menuButton, {marginTop:-20}]}
                onPress={this.toggle.bind(this)}
                underlayColor="#f6f6f6">
                <Image
                    style={styles.hamburger}
                    source={icon}
                ></Image>
            </TouchableHighlight>
            </View>
            <View style={{alignItems:'center'}}>
              <Text style={{color:'#3498DB', fontSize:24,
                fontFamily: "Montserrat-Light"}}>Eta: </Text>
              <Text style={{fontFamily: "Montserrat-Regular",
                color:'#3498DB', fontSize:24}}>4 min.</Text>
            </View>
          </View>
          <View style={{justifyContent:'space-between', marginTop: 20,
          flexDirection:'row', paddingLeft: 20, paddingRight:20}}>
          </View>
        </View>
      </View>
    );
  }
}
