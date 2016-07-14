import React, { Component } from 'react';
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
import Login from "./login";
import stuHome from "./stuInitial";

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }
   signup ()  {
          console.log(this);

      this.props.navigator.push({component: Signup1});
    }

    signIn() {
      console.log(this);

      this.props.navigator.push({component: stuHome});
    }

  render () {
    if (! this.state.loggedIn) {
     return (
       <View style={styles.container}>
        <Image
          style = {styles.logo}
          source={require("../images/Logo1.png")}
        />

        <Text style={styles.heading}>
          Welcome to Grasp
        </Text>
        <View style={{marginTop:40}}>
            <TouchableHighlight
              style={styles.fullWidthButton}
              activeOpacity={0.6}
              underlayColor={'white'}
              onPress={this.signIn.bind(this)}>
            <Text style={styles.fullWidthButtonText}>Log In</Text>
            </TouchableHighlight>
            <View style={{marginTop:15, alignItems: 'center'}}>
              <TouchableHighlight
                style={styles.textLinkButton}
                activeOpacity={0.6}
                underlayColor={'white'}
                onPress={this.signup.bind(this)}>
              <Text style={{textAlign: 'center', fontFamily: 'Montserrat-Light',
            color: "#3498DB"}}> or Sign Up
              </Text>
              </TouchableHighlight>
            </View>
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
