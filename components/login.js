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
import stuHome from "./studentOnboarding";

export default class Login extends Component {
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

    onboarding() {
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
         <TextInput
          style={styles.wideInput}
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
        <TouchableHighlight
          style={styles.fullWidthButton}
          activeOpacity={0.6}
          underlayColor={'purple'}
          onPress={this.onboarding.bind(this)}>
        <Text style={styles.fullWidthButtonText}>Log In</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.fullWidthButton}
          activeOpacity={0.6}
          underlayColor={'purple'}
          onPress={this.signup.bind(this)}>
        <Text style={styles.fullWidthButtonText}>Register</Text>
        </TouchableHighlight>
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
