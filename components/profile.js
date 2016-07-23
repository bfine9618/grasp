import KeyboardSpacer from 'react-native-keyboard-spacer';
import React, { Component } from 'react';
import Menu from './helper/Menu';  // Step 1
import {
  Navigator,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  Animated,
  ScrollView,
  AsyncStorage
} from 'react-native';

var styles = require('./styles');
var that;

export default class Profile extends Component{


	constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      loading: true
    };
    that = this;
  }

  componentDidMount() {
    var defaultUser= {
      type: 'student',
      name: 'Jeff Wang',
      phone: '123-456-789',
      major: 'Digital Media',
      year: '2017',
      email: 'dudejeff@gmail.com',
      bio: 'UX Designer from San Francisco'
    }
    AsyncStorage.getItem('user')
    .then((value) => {
      if (value !== null){
        that.setState({user: JSON.parse(value)});
      } else {
        // default should probably redirect to login
        that.setState({user: defaultUser});
        AsyncStorage.setItem('user', JSON.stringify(defaultUser));
      }
      that.setState({loading: false});
    }, function(error) {
      // something went wrong
      console.log(error);
    }).done();

  }
  back() {
    this.props.navigator.pop();
  }

  render() {
    if (this.state.loading) {
      // Data retrieval is asynchronous and React is strictly non-blocking,
      // so we need a loading screen while we're grabbing data
      return <View><Text>Loading...</Text></View>;
    } else {
        return (
      	<View style={styles.mainContainer}>
        <View style={styles.toolbar}>
              <Text style={styles.toolbarTitle}>Profile</Text>
              <TouchableHighlight
                 style={styles.prevButton}
                 activeOpacity={0.6}
                 underlayColor={'#3498DB'}
                 onPress={this.back.bind(this)}>
                 <Image
                   style = {styles.prevImg}
                   source={require("../images/back_white.png")}
                 />
               </TouchableHighlight>

           </View>
           <View style={{alignItems:'center', height: 190, backgroundColor:'#3498DB'}}>
             <Image
               style={[styles.avatar, {borderColor: 'white', borderWidth: 3}]}
               source={require("Grasp/images/jeff.png")}
               />
             <Text style={[styles.menuText, {fontSize:20, marginTop:5}]}>{this.state.user.name}</Text>
             <Text style={[styles.menuText, {marginTop:5}]}>{this.state.user.type}</Text>
           </View>

            <View>
            <Text style={[styles.profileText, {fontFamily:'Montserrat-Light',
            textAlign:'center', marginTop:30}]}>{'\"'}{this.state.user.bio}{'\"'}</Text></View>
            <View style={{paddingLeft: 30}}>
              <Text style={[styles.profileText, {fontFamily:'Montserrat-Light',
              textAlign:'left', marginTop:25}]}>Major:</Text>
              <Text style={[styles.profileText, {fontFamily:'Montserrat-Regular',
              textAlign:'left', marginTop:5}]}>{this.state.user.major}</Text>
              <Text style={[styles.profileText, {fontFamily:'Montserrat-Light',
              textAlign:'left', marginTop:20}]}>Graduation Year:</Text>
              <Text style={[styles.profileText, {fontFamily:'Montserrat-Regular',
              textAlign:'left', marginTop:5}]}>{this.state.user.year}</Text>
              <Text style={[styles.profileText, {fontFamily:'Montserrat-Light',
              textAlign:'left', marginTop:20}]}>Phone Number:</Text>
              <Text style={[styles.profileText, {fontFamily:'Montserrat-Regular',
              textAlign:'left', marginTop:5}]}>{this.state.user.phone}</Text>
              <Text style={[styles.profileText, {fontFamily:'Montserrat-Light',
              textAlign:'left', marginTop:20}]}>email</Text>
              <Text style={[styles.profileText, {fontFamily:'Montserrat-Regular',
              textAlign:'left', marginTop:5}]}>{this.state.user.email}</Text>
            </View>

        </View>
      );
    }
  }
}
