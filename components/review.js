import KeyboardSpacer from 'react-native-keyboard-spacer';
import React, { Component, PropTypes } from 'react';
import CustomStarExample from './helper/rating';
import Menu from './helper/Menu';
import Home from './stuInitial';
import {
  Navigator, Animated,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight
} from 'react-native';

var styles = require('./styles');

var img;

export default class Reciept extends Component{
  static propTypes = {
    tutorObject: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      user: "Student",
      expanded: true,
      animation: new Animated.Value(185),
    };

    img = require('../images/jeff.png');
  }

  toggle() {
    let initialValue    = this.state.expanded? 185 : 10,
        finalValue      = this.state.expanded? 10 : 185;

    this.setState({
        expanded : !this.state.expanded
    });

    this.state.animation.setValue(initialValue);
    Animated.spring(
        this.state.animation,
        {
            toValue: finalValue
        },
    ).start();
  }

  home(){
    this.props.navigator.resetTo({component: Home});
  }

  render() {
    return (
    	<View style={[styles.mainContainer, {backgroundColor: '#f6f6f6'}]}>
      <Menu navigator={this.props.navigator}/>

       <View style={[styles.container, {marginTop:15}]}>
       <Animated.View style={{height:this.state.animation, overflow: 'hidden',
        alignItems:'center', paddingTop:15}}>
       <Image
         style = {[styles.avatar, {flex: 1,
           borderWidth:5, borderColor:'#3498DB'}]}
         source={img}
         />
         <Text style={styles.courseCodeAsk}>
           What did you think of this.props.tutorObject.name}?
          </Text>
          </Animated.View>

        <Text style={{fontFamily: 'Montserrat-Regular', fontSize:24,
          color: '#3498DB', marginTop:20}}>Session Ended</Text>

       <View style={{backgroundColor: 'white', marginTop: 5, paddingLeft: 20,
        height: 250, paddingTop:10, width: 300}}>
       <Text style={{fontFamily: 'Montserrat-Light', fontSize: 18,
       color: '#4a4a4a'}}> Overal Rating: </Text>
       <View style={{width: 190, marginTop:10}}><CustomStarExample/></View>

       <Text style={{fontFamily: 'Montserrat-Light', fontSize: 20,
       color: '#4a4a4a', marginTop: 15}}> Comments (Optional): </Text>
       <TextInput
       style={{borderRadius:5, borderWidth:3, marginTop:10, paddingLeft: 5,
         borderColor: '#979797', width: 260, height: 105,
       color: '#3498DB', fontSize: 16}}
        multiline={true}
        numberOfLines= {5}
        maxLength={135}
        blurOnSubmit={true}
        onFocus={this.toggle.bind(this)}
        returnKeyType={'done'}
        onSubmitEditing={this.toggle.bind(this)}
        onChangeText={(text) => this.setState({comment: text})}
        value={this.state.text}></TextInput>
       </View>


       <TouchableHighlight
         style={[styles.fullWidthButton, {marginTop:20}]}
         activeOpacity={0.6}
         underlayColor={'white'}
         onPress={this.home.bind(this)}>
       <Text style={styles.fullWidthButtonText}>FINISH</Text>
       </TouchableHighlight>
       </View>
    </View>
 );
}
}
