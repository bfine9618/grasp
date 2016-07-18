import KeyboardSpacer from 'react-native-keyboard-spacer';
import React, { Component, PropTypes } from 'react';
import Menu from './helper/Menu';
import Reciept from './reciept';
import {
  Navigator,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight
} from 'react-native';

var styles = require('./styles');
var i;

export default class Session extends Component{
  static propTypes = {
    tutorName: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      user: "Student",
      minutes: '00',
      seconds: '00',
    };
  }

  componentDidMount(){
    this.timer();
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


  cancel() {
    this.props.navigator.push({component: Reciept,
      passProps: {
        minutes: this.state.minutes || 0,
        seconds: this.state.seconds || 0,
        tutorName: this.props.tutorName || "",
      }});
  }

  render() {
    return (
    	<View style={[styles.mainContainer,{backgroundColor: '#f6f6f6'}]}>
         <Menu navigator={this.props.navigator}/>

          <View style={[styles.container]}>
          <Text style={styles.confirmHead}> Course:</Text>
          <Text style={styles.confirmInput}>server ask/local cache</Text>
          <Text style={styles.confirmHead}> Topic:</Text>
          <Text style={styles.confirmInput}>server ask/local cache</Text>
          <Text style={styles.confirmHead}> You{'\''}re working with::</Text>
          <Text style={styles.confirmInput}>{this.props.tutorName}</Text>

          <View style={{backgroundColor: 'white', marginTop: 60,
            alignItems:'center', height: 150, paddingTop:10, width: 300}}>
          <Text style={{fontFamily: 'Montserrat-Regular', fontSize:24,
          color: '#3498DB'}}>Session Started</Text>

          <Text style={{fontFamily: 'Montserrat-Light', fontSize: 20,
          color: '#4a4a4a', marginTop: 30}}> Elapsed Time: </Text>

          <Text style={{fontFamily: 'Montserrat-Regular', fontSize:36,
          color: '#4a4a4a', marginTop: 5, textAlign:'center'}}>
          {this.state.minutes} : {this.state.seconds}</Text>
          </View>
          <Text style={[styles.footerText, {fontSize: 22, marginTop:75}]}>
          Has there been a mistake?</Text>
          <TouchableHighlight
            style={{width: 50, height: 50, marginTop:10}}
            activeOpacity={0.6}
            underlayColor={'white'}
            onPress={this.cancel.bind(this)}>
          <Image
              style = {{width:50, height:50}}
              source={require("../images/cancel.png")}
            />
          </TouchableHighlight>
          <Text style={styles.footerText}>
            <Text style={{marginTop:15}}>HOLD TO END SESSION</Text>
          </Text>
          </View>

      </View>
    );
  }
}
