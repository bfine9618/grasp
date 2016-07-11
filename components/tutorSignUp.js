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


export default class TutorSignUp extends Component {
	constructor(props) {
    super(props);
    this.state = {
    };
  }
  payment() {
  	this.props.navigator.push({component: TutorPayment,
 	 		  passProps: { phoneNumber: this.state.phoneNumber || '',
 	 		  	major: this.state.major|| '',
 	 		  	graduatingYear: this.state.graduatingYear || '',
 	 		  	bio: this.state.bio || '',
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
             <Text style={styles.toolbarTitle}>Tutor sign up</Text>
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
          		style = {{height:76, width: 56,} }
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
          		placeholder="Major"
        	/>
          <Image
            style = {styles.line}
            source={require("../images/Line.png")}
          />
        	<TextInput
          		style={styles.wideInput}
          		onChangeText={(text) => this.setState({graduatingYear : text})}
          		value={this.state.graduatingYear}
          		placeholder="Year/Class"
        	/>
          <Image
            style = {styles.line}
            source={require("../images/Line.png")}
          />
			<TextInput
          		style={styles.wideInput}
          		onChangeText={(text) => this.setState({password : text})}
          		value={this.state.password}
          		placeholder="Password"
        	/>
          <Image
            style = {styles.line}
            source={require("../images/Line.png")}
          />
        	<TextInput
          		style={{ height: 100}, styles.wideInput }
          		onChangeText={(text) => this.setState({bio : text})}
          		value={this.state.bio}
          		placeholder="Short bio (optional, but helpful for students)"
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
          <Image
            style = {styles.line}
            source={require("../images/Line.png")}
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



class TutorPayment extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	paymentMethod: 'Bank Account'
    };
  }

  prevStep() {
   var component = TutorSignUp;
   if (this.state.user === "Student") {
     component = StudentSignUp;
   }
   this.props.navigator.pop();
 }


  register() {}
  render() {
  	const options = [
			"Bank Account",
			"Venmo"
			];

		function setSelectedOption(selectedOption){
    		this.setState({
      			paymentMethod: selectedOption
   			 });
  		}


 		 function renderContainer(optionNodes){
   		 return <View>{optionNodes}</View>;
  		}
  		function renderOption(option, selected, onSelect, index){
    		const style = selected ? { fontWeight: 'bold'} : {};
    		return (
      		<TouchableWithoutFeedback onPress={onSelect} key={index}>
       		 <Text style={style}>{option}</Text>
     		 </TouchableWithoutFeedback>
   		 );
 		 }
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
             <Text style={styles.toolbarTitle}>Tutor sign up</Text>
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

  			<Text style = {styles.heading}>How should we pay you?</Text>
			<SegmentedControls
  			tint= {'#f80046'}
  			selectedTint= {'white'}
  			backTint= {'#1e2126'}
  			options={ options }
  			allowFontScaling={ false } // default: true
  			onSelection={ setSelectedOption.bind(this) }
  			selectedOption={ this.state.paymentMethod }
			/>
			{(() => {
        		switch (this.state.paymentMethod) {
          		case "Bank Account":   return (
          			<View>
          			<TextInput
          				style={styles.wideInput}
          				onChangeText={(text) => this.setState({accountNumber : text})}
          				value={this.state.accountNumber}
          				placeholder="Account Number"
        			/>
              <Image
                style = {styles.line}
                source={require("../images/Line.png")}
              />
        			<TextInput
          				style={styles.wideInput}
          				onChangeText={(text) => this.setState({routingNumber : text})}
          				value={this.state.routingNumber}
          				placeholder="Routing Number"
        			/>
        			</View>
          			);
         		 case "Venmo": return (
          			<TextInput
          				style={styles.wideInput}
          				onChangeText={(text) => this.setState({venmo : text})}
          				value={this.state.venmo}
          				placeholder="Venmo Email"
        			/>
          			);
          		default:      return "";
        	}
     		})() }

        	<TouchableHighlight
          style={styles.fullWidthButton}
          activeOpacity={0.6}
          underlayColor={'purple'}
          onPress={this.register.bind(this)}>
        <Text style={styles.fullWidthButtonText}>FINISH</Text>
        </TouchableHighlight>
        <Text style={{textAlign: 'center', fontFamily: 'Montserrat-Light',
      color: "#3498DB"}}> by submitting, i agree to all terms and services.</Text>
      </View>
  		</View>
		);
  }
}
