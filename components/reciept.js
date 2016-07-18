import KeyboardSpacer from 'react-native-keyboard-spacer';
import React, { Component, PropTypes } from 'react';
import Menu from './helper/Menu';
import Home from './stuInitial';
import {
  Navigator,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight
} from 'react-native';

var styles = require('./styles');

export default class Reciept extends Component{
  static propTypes = {
    seconds: PropTypes.string.isRequired,
    minutes: PropTypes.string.isRequired,
    tutorName: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      user: "Student",
      cost: 0,
    };
  }

  componentDidMount() {
    this.cost();
  }

  cost() {
    let totTime = this.props.minutes + (this.props.seconds/60);
    let timeRate = (.42*totTime).toFixed(2);
    this.setState({cost: timeRate});
  }

  review(){
    this.props.navigator.push({component: Home});
  }

  render() {
    return (
    	<View style={[styles.mainContainer, {backgroundColor: '#f6f6f6'}]}>
      <Menu navigator={this.props.navigator}/>

       <View style={[styles.container]}>
       <Image
         style = {styles.aceImg}
         source={require("../images/ace.png")}
         />
         <Text style={styles.courseCodeAsk}>
           I hope that you enjoyed your session
           with {this.props.tutorName}!
          </Text>

       <View style={{backgroundColor: 'white', marginTop: 40,
         alignItems:'center', height: 250, paddingTop:10, width: 300}}>
       <Text style={{fontFamily: 'Montserrat-Regular', fontSize:24,
       color: '#3498DB'}}>Session Ended</Text>

       <Text style={{fontFamily: 'Montserrat-Light', fontSize: 20,
       color: '#4a4a4a', marginTop: 30}}> Total Time: </Text>

       <Text style={{fontFamily: 'Montserrat-Regular', fontSize:36,
       color: '#4a4a4a', marginTop: 5, textAlign:'center'}}>
       {this.props.minutes} : {this.props.seconds}</Text>

       <Text style={{fontFamily: 'Montserrat-Light', fontSize: 20,
       color: '#4a4a4a', marginTop: 25}}> Total Cost: </Text>

       <Text style={{fontFamily: 'Montserrat-Regular', fontSize:36,
       color: '#4a4a4a', marginTop: 5, textAlign:'center'}}>
       ${this.state.cost}</Text>
       </View>
       <TouchableHighlight
         style={[styles.fullWidthButton, {marginTop:40}]}
         activeOpacity={0.6}
         underlayColor={'white'}
         onPress={this.review.bind(this)}>
       <Text style={styles.fullWidthButtonText}>WRITE A REVIEW</Text>
       </TouchableHighlight>
       </View>

   </View>
 );
}
}
