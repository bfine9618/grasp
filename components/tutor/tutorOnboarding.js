import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight } from 'react-native'
import Swiper from 'react-native-swiper';
import tutorInitial from './tutorInitial';
//import StuHome from "./tutInitial";
var styles = require('../onboardingStyles');


export default class BasicSample extends React.Component {
  _onMomentumScrollEnd(e, state, context) {
    // you can get `state` and `this`(ref to swiper's context) from params
    console.log(state, context.state)
  }

  home ()  {
     this.props.navigator.push({component: tutorInitial});
   }

  render() {
    return (
      <Swiper style={styles.wrapper}
      onMomentumScrollEnd={this._onMomentumScrollEnd}
      showsButtons={false}
      loop={false}
      dot={<View style={{backgroundColor:'#D3D3D3', width: 13, height: 13,borderRadius: 7, marginLeft: 7, marginRight: 7,}} />}
      activeDot={<View style={{backgroundColor: '#3498DB', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
      //nextButton= {<Text style={styles.buttonText}>NEXT</Text>}
      >
        <View style={styles.container}>
            <Image
              style = { styles.howToImg}
              source={require("../../images/tutorHowTo1.png")}
            />
            <Text style={styles.heading}>
            Get notified when a student near you needs tutoring.
            </Text>
             <Text style={styles.caption}>
             If a student near you needs help on a subject you{"\'"}ve aced,
             we{"\'"}ll send you a notification.
             </Text>
        </View>
        <View style={styles.container}>
            <Image
              style = { styles.howToImg }
              source={require("../../images/tutorHowTo2.png")}
            />
            <Text style={styles.heading}>
             Go to the student{"\'"}s location and provide some help!
             </Text>
             <Text style={styles.caption}>
             We{"\'"}ll send you the user{"\'"}s precise locaion;
             then start the tutoring timer once you begin the session.
             </Text>
        </View>
        <View style={styles.container}>
            <Image
              style = { styles.howToImg }
              source={require("../../images/tutorHowTo3.png")}
            />
            <Text style={styles.heading}>
             Make $16-$20 per hour!
             </Text>
             <Text style={styles.caption}>
             We{"\'"}ll deposit the money into your bank or Venmo
             account in 2-3 processing days.
             </Text>
             <TouchableHighlight
               style={[styles.linkButton, {marginTop: 15}]}
               activeOpacity={0.6}
               underlayColor={'white'}
               onPress={this.home.bind(this)}>
             <Text style={styles.linkText}>OKAY, LET{"\'"}S GET STARTED</Text>
             </TouchableHighlight>
        </View>
      </Swiper>
    )
  }
}
