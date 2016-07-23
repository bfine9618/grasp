import React, { Component } from 'react';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import {
  Text, Animated,
  View,
  Image,
  TextInput,
  TouchableHighlight
} from 'react-native';
import Grasp from './home';
var styles = require('./styles');
import Signup1 from "./signup";
import stuHome from "./stuInitial";
import onBoardingStu from "./studentOnboarding";
import onBoardingTut from './tutor/tutorOnboarding';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }

    prevStep() {
     this.props.navigator.pop();
   }

   canNext() {
     return this.state.email && this.state.password;
   }

    signIn() {
      if (this.canNext){
        if(this.state.email === 'Tutor'){
          this.props.navigator.push({component: onBoardingTut});
      } else if(this.state.email=== 'Student'){
        this.props.navigator.push({component: onBoardingStu});
      }
    } else {
    }
  }

    forgotPass() {
      console.log("well, fuck");
    }

  render () {
    if (! this.state.loggedIn) {
     return (
       <View style={styles.mainContainer}>

       <View style={{paddingTop:25}}>
             <TouchableHighlight
                style={styles.prevButton}
                activeOpacity={0.6}
                underlayColor={'white'}
                onPress={this.prevStep.bind(this)}>
                <Image
                  style = {styles.prevImg}
                  source={require("../images/back.png")}
                />
              </TouchableHighlight>
          </View>
        <View style={styles.container}>
        <Image
          style = {styles.headLogo}
          source={require("../images/logo1.png")}
        />
        <View style={{height:15}}></View>
        <Text style={styles.heading}>
          Login
         </Text>
         <View style={{height:25}}></View>
         <View style={{alignItems: 'center'}} ref='inputs'>
         <TextInput ref={component => this.usrname = component}
          style={styles.wideInput}
          keyboardType={'email-address'}
          returnKeyType={'next'}
          autoCorrect={false}
          onChangeText={(text) => this.setState({email : text})}
          onSubmitEditing={(event) => {
            this.refs.Password.focus();
          }}
          value={this.state.email}
          placeholder=".edu email"
        />
        <View style={[styles.line]}>
        </View>
        <TextInput
          ref='Password'
          secureTextEntry={true}
          style={styles.wideInput}
          returnKeyType={'done'}
          autoCorrect={false}
          onChangeText={(text) => this.setState({password : text})}
          value={this.state.password}
          placeholder="password"
        />
        </View>

        <KeyboardSpacer/>
        <View style={{height: 20}}></View>
        <TouchableHighlight
          style={styles.fullWidthButton}
          activeOpacity={0.6}
          underlayColor={'white'}
          onPress={this.signIn.bind(this)}>
        <Text style={styles.fullWidthButtonText}>Log In</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.textLinkButton}
          activeOpacity={0.6}
          underlayColor={'white'}
          onPress={this.forgotPass}>
        <Text style={{textAlign: 'center', fontFamily: 'Montserrat-Light',
          color: "#3498DB"}}> forgot password
        </Text>
        </TouchableHighlight>
      </View>
      </View>
     );
    }
    else {
      return (
        <Grasp />
      );
    }

  }
}
