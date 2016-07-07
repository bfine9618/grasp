import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight } from 'react-native'
import Swiper from 'react-native-swiper'
import StuHome from "./stuInitial";
var styles = require('./onboardingStyles');


export default class BasicSample extends React.Component {
  _onMomentumScrollEnd(e, state, context) {
    // you can get `state` and `this`(ref to swiper's context) from params
    console.log(state, context.state)
  }

  stuHome ()  {
         console.log(this);

     this.props.navigator.push({component: StuHome});
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
              source={require("../images/studentHowTo1.png")}
            />
            <Text style={styles.heading}>
             Tell Ace what course you need to grasp!
             </Text>
             <Text style={styles.caption}>
              Ace will also want to know for how {"\n"}long, as well as your current {"\n"}location.
             </Text>
        </View>
        <View style={styles.container}>
            <Image
              style = { styles.howToImg }
              source={require("../images/studentHowTo2.png")}
            />
            <Text style={styles.heading}>
             Ace will match you with a tutor near you!
             </Text>
             <Text style={styles.caption}>
             We notify all tutors in your area that {"\n"} are experts in the course you need {"\n"} help with.
             </Text>
        </View>
        <View style={styles.container}>
            <Image
              style = { styles.howToImg }
              source={require("../images/studentHowTo3.png")}
            />
            <Text style={styles.heading}>
             Grasp and repeat!
             </Text>
             <TouchableHighlight
               style={styles.linkButton}
               activeOpacity={0.6}
               underlayColor={'white'}
               onPress={this.stuHome.bind(this)}>
             <Text style={styles.linkText}>OKAY, LET{"\'"}S GET STARTED</Text>
             </TouchableHighlight>
        </View>
      </Swiper>
    )
  }
}
