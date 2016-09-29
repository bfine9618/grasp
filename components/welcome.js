import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Grasp from './home';
var styles = require('./styles');
import Signup1 from "./signup";
import Login from "./login";
import onBoardingStu from "./studentOnboarding";
import onBoardingTut from './tutor/tutorOnboarding';


export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      myBorderColor1: '#DBDBDB',
      myBorderColor2: '#DBDBDB'

    };
  }
   signup ()  {
        //   console.log(this);

      this.props.navigator.push({component: Signup1});
    }

    // signIn() {
    //   console.log(this);
    //
    //   this.props.navigator.push({component: Login});
    // }

    canNext() {
      return this.state.email && this.state.password;
    }

/*
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
*/

    signIn() {
        this.props.navigator.push({component: onBoardingStu});
    }
   onInputFocus() {
    this.state = {
        myBorderColor: '#3498DB'
    };
    Alert.alert(
      'Focused Alert',
      'onInputFocus',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]
    )
    }

   onInputBlur() {
       this.state = {
           myBorderColor: '#DBDBDB'
    };
    Alert.alert(
      'Blurred Alert',
      'onInputBlur',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]
    )
    }

  render () {
    if (! this.state.loggedIn) {
     return (
       <View style={styles.container}>

        <Text style={styles.heading}>
          Welcome to GRASP
        </Text>
        <View style={{height:30}}></View>
        <View style={{alignItems: 'center'}} ref='inputs'>
        <TextInput ref={component => this.usrname = component}
         style={{fontFamily:'FontAwesome', height:60, width: 344, paddingLeft: 20, paddingRight: 20, alignSelf: 'center', marginTop:10, marginBottom: 0, textAlign: 'left', fontSize: 16, color: '#4A4A4A' ,borderWidth: 1, borderColor: this.state.myBorderColor1}}
         onBlur={ () => this.setState({myBorderColor1 : '#DBDBDB'}) }
         onFocus={ () => this.setState({myBorderColor1 : '#3498DB'}) }
         keyboardType={'email-address'}
         returnKeyType={'next'}
         autoCorrect={false}
         onChangeText={(text) => this.setState({email : text})}
         onSubmitEditing={(event) => {
           this.refs.Password.focus();
         }}
         value={this.state.email}
         placeholder="&#xf003;    .edu email"
       />
       </View>
       <View style={{alignItems: 'center'}} ref='inputs'>
       <TextInput
         ref='Password'
         secureTextEntry={true}
         style={{fontFamily:'FontAwesome', height:60, width: 344, paddingLeft: 20, paddingRight: 20, alignSelf: 'center', marginTop:10, marginBottom: 0, textAlign: 'left', fontSize: 16, letterSpacing: 9, color: '#4A4A4A' ,borderWidth: 1, borderColor: this.state.myBorderColor2}}
         onBlur={ () => this.setState({myBorderColor2 : '#DBDBDB'}) }
         onFocus={ () => this.setState({myBorderColor2 : '#3498DB'}) }
         returnKeyType={'done'}
         autoCorrect={false}
         onChangeText={(text) => this.setState({password : text})}
         value={this.state.password}
         placeholder="&#xf023;     password"
       />
       </View>
        <View style={{marginTop: 20, alignItems: 'center'}}>
            <TouchableHighlight
              style={styles.fullWidthButton}
              activeOpacity={0.6}
              underlayColor={'white'}
              onPress={this.signIn.bind(this)}>
            <Text style={styles.fullWidthButtonText}>SIGN IN</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.textLinkButton}
              activeOpacity={0.6}
              underlayColor={'white'}
              onPress={this.forgotPass}>
            <Text style={{textAlign: 'center', marginTop: 20, fontFamily: "Montserrat-Regular", fontSize: 14,
              color: "#4A4A4A"}}>I forgot my password</Text>
            </TouchableHighlight>

            <View style={{width: 344, marginTop: 30, borderBottomWidth: 1, borderBottomColor: '#4A4A4A', alignItems: 'center'}}>
            <Text style={{alignSelf: 'auto', lineHeight: 0.1, marginTop: 10, paddingRight: 10, marginBottom: -10, paddingLeft: 10, textAlign: 'center',
              color: "#4A4A4A", backgroundColor: "#FFFFFF", fontFamily: "Montserrat-Regular", fontSize: 18}}>OR</Text>
            </View>

            <Text style={{textAlign: 'center', marginTop: 40, marginBottom: 25, fontFamily: "Montserrat-Regular",
              color: "#4A4A4A", fontSize: 18}}>New to GRASP?</Text>

            <TouchableHighlight
              style={styles.fullWidthButtonWhite}
              activeOpacity={0.6}
              underlayColor={'white'}
              onPress={this.signup.bind(this)}>
            <Text style={styles.fullWidthButtonTextWhite}>REGISTER</Text>
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
