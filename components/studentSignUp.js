import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback
} from 'react-native';

import { SegmentedControls } from 'react-native-radio-buttons';
import { RadioButtons } from 'react-native-radio-buttons';

var styles = require('./styles');

export default class StudentSignUp extends Component{
	constructor(props) {
    super(props);
    this.state = {
      user:"Student",
    };
  }
  payment() {
  	this.props.navigator.push({component: StudentPayment,
 	 		  passProps: { phoneNumber: this.state.phoneNumber || '',
 	 		  	major: this.state.major|| '',
 	 		  	graduatingYear: this.state.graduatingYear || '',
 	 		  	skype: this.state.skype || ''
 	 		  }
		});
  }

  prevStep() {
   this.props.navigator.pop();
 }

	render() {
		return (
      <View style={styles.mainContainer}>

      <View style={styles.toolbar}>
            <TouchableHighlight
               style={styles.prevButton}
               activeOpacity={0.6}
               underlayColor={'#3498DB'}
               onPress={this.prevStep.bind(this)}>
               <Image
                 style = {styles.prevImg}
                 source={require("../images/back_white.png")}
               />
             </TouchableHighlight>
             <Text style={styles.toolbarTitle}>Student sign up</Text>
         </View>
         <View style={styles.stepbar}>
                <Text style={styles.stepComplete}>Step 1</Text>
                <Text style={styles.stepActive}>Step 2</Text>
                <Text style={styles.stepText}>Step 3</Text>
                <Text style={styles.stepText}>Step 4</Text>
          </View>
          <View style={styles.statusBar}>
              <View style={styles.statusbarActive}></View>
              <View style={styles.statusbarActive}></View>
              <View style={styles.statusbarGrey}></View>
              <View style={styles.statusbarGrey}></View>
          </View>

       <View style={styles.container}>
 			<Image
          		style = { styles.icon, { height:76, width: 56, } }
          		source={require("../images/Logo1.png")}
       		 />

			<Text style={styles.caption}> Photo upload coming soon! </Text>
			<TextInput
          		style={styles.wideInput}
          		onChangeText={(text) => this.setState({phoneNumber : text})}
          		value={this.state.phoneNumber}
          		placeholder="Phone number (xxx)-xxx-xxxx"
        	/>
          <Image
            style = {styles.line}
            source={require("../images/Line.png")}
          />
        	<TextInput
          		style={styles.wideInput}
          		onChangeText={(text) => this.setState({major : text})}
          		value={this.state.major}
          		placeholder="Major (optional)"
        	/>
          <Image
            style = {styles.line}
            source={require("../images/Line.png")}
          />
        	<TextInput
          		style={styles.wideInput}
          		onChangeText={(text) => this.setState({graduatingYear : text})}
          		value={this.state.graduatingYear}
          		placeholder="Year/Class (optional)"
        	/>

          <Image
            style = {styles.line}
            source={require("../images/Line.png")}
          />

        	<TextInput
          		style={styles.wideInput}
          		onChangeText={(text) => this.setState({skype : text})}
          		value={this.state.skype}
          		placeholder="Skype Username (optional)"
        	/>
        	<TouchableHighlight
          style={styles.fullWidthButton}
          activeOpacity={0.6}
          underlayColor={'purple'}
          onPress={this.payment.bind(this)}>
        <Text style={styles.fullWidthButtonText}>Next</Text>
        </TouchableHighlight>
        </View>
        </View>
			);
	}
}



class StudentPayment extends Component {
	constructor(props) {
    super(props);
    this.state = {

    };
  }
  register() {

  }

  prevStep() {
   this.props.navigator.pop();
 }

  render() {
  	return (
      <View style={styles.mainContainer}>

      <View style={styles.toolbar}>
            <TouchableHighlight
               style={styles.prevButton}
               activeOpacity={0.6}
               underlayColor={'#3498DB'}
               onPress={this.prevStep.bind(this)}>
               <Image
                 style = {styles.prevImg}
                 source={require("../images/back_white.png")}
               />
             </TouchableHighlight>
             <Text style={styles.toolbarTitle}>Student sign up</Text>
         </View>
         <View style={styles.stepbar}>
                <Text style={styles.stepComplete}>Step 1</Text>
                <Text style={styles.stepComplete}>Step 2</Text>
                <Text style={styles.stepComplete}>Step 3</Text>
                <Text style={styles.stepActive}>Step 4</Text>
          </View>
          <View style={styles.statusBar}>
              <View style={styles.statusbarActive}></View>
              <View style={styles.statusbarActive}></View>
              <View style={styles.statusbarActive}></View>
              <View style={styles.statusbarActive}></View>
          </View>

       <View style={styles.container}>
  			<Text style = {styles.heading}>Enter Payment Info</Text>
  			<TextInput
          		style={styles.wideInput}
          		onChangeText={(text) => this.setState({creditCardNumber : text})}
          		value={this.state.creditCardNumber}
          		placeholder="Credit Card Number"
        	/>
        	<View style = { styles.container, { flexDirection: 'row'}}>
        	<TextInput
          		style={styles.wideInput}
          		onChangeText={(text) => this.setState({ccExpDate : text})}
          		value={this.state.ccExpDate}
          		placeholder="Exp."
        	/>
        	<TextInput
          		style={styles.wideInput}
          		onChangeText={(text) => this.setState({CVV : text})}
          		value={this.state.CVV}
          		placeholder="CVV"
        	/>
        	</View>
        	<TouchableHighlight
          style={styles.fullWidthButton}
          activeOpacity={0.6}
          underlayColor={'purple'}
          onPress={this.register.bind(this)}>
        <Text style={styles.fullWidthButtonText}>FINISH</Text>
        </TouchableHighlight>
        <Text style={{textAlign: 'center', fontFamily: 'Montserrat-Light',
      color: "#3498DB"}}> by continuing, i agree to all terms and services.</Text>
      </View>
      </View>
		);
  }
}
