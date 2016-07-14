import React, { Component } from 'react';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight
} from 'react-native';
import Grasp from './home';
var styles = require('./styles');
import Signup1 from "./signup";
import stuHome from "./stuInitial";
import Welcome from "./welcome";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }

    prevStep() {
     var component = Welcome;
     if (this.state.user === "Student") {
       component = StudentSignUp;
     }
     this.props.navigator.pop();
   }

    signIn() {
      console.log(this);
      if (this.state.email && this.state.password){
        this.props.navigator.push({component: stuHome});
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
          source={require("../images/Logo1.png")}
        />
        <View style={{height:15}}></View>
        <Text style={styles.heading}>
          Login
         </Text>
         <View style={{height:25}}></View>
         <TextInput
          style={styles.wideInput}
          keyboardType={'email-address'}
          returnKeyType={'next'}
          onChangeText={(text) => this.setState({email : text})}
          value={this.state.email}
          placeholder=".edu email"
        />
        <Image
          style = {styles.line}
          source={require("../images/Line.png")}
        />
        <TextInput
          secureTextEntry={true}
          style={styles.wideInput}
          onChangeText={(text) => this.setState({password : text})}
          value={this.state.password}
          placeholder="password"
        />

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
