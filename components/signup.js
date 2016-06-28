import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TextInput, 
  TouchableHighlight
} from 'react-native';

import { SegmentedControls } from 'react-native-radio-buttons';

var styles = require('./styles');


export default class Signup1 extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
     	 user: "Student",
    	};
 	 }
 	 nextStep() {
 	 	var component = TutorSignUp;
 	 	if (this.state.user === "Student") {
 	 		component = StudentSignUp;
 	 	}
 	 	this.props.navigator.push({component: component, 
 	 		  passProps: { name: this.state.name || '', 
 	 		  	email: this.state.email|| '',
 	 		  	password: this.state.password || ''
 	 		  }
		});

 	 }
	render() {
		  const options = [
			"Student", 
			"Tutor"
			];

		function setSelectedOption(selectedOption){
    		this.setState({
      			user: selectedOption
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
       <View style={styles.container}>
        <Image
          style = { styles.icon }
          source={require("../images/Logo1.png")} 
        />
        <Text style={styles.heading}>
          Welcome to Grasp
         </Text>
         <Text style={styles.caption}>
         Sign up as...
         </Text>
         <SegmentedControls
  			tint= {'#f80046'}
  			selectedTint= {'white'}
  			backTint= {'#1e2126'}
  			options={ options }
  			allowFontScaling={ false } // default: true
  			onSelection={ setSelectedOption.bind(this) }
  			selectedOption={ this.state.user }
			/>
		<TextInput
          style={styles.wideInput}
          onChangeText={(text) => this.setState({name : text})}
          value={this.state.name}
          placeholder="Name"
        /> 
        <TextInput
          style={styles.wideInput}
          onChangeText={(text) => this.setState({email : text})}
          value={this.state.email}
          placeholder="School Email"
        /> 
        <TextInput
          style={styles.wideInput}
          onChangeText={(text) => this.setState({password : text})}
          value={this.state.password}
          placeholder="Password"
        /> 
        <TouchableHighlight 
          style={styles.fullWidthButton}
          activeOpacity={0.6}
          underlayColor={'purple'}
          onPress={this.nextStep.bind(this)}>
        <Text style={styles.fullWidthButtonText}>Next Step</Text>
        </TouchableHighlight>

         </View>
         );
	}
}

class TutorSignUp extends Component {
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
	render() {
		return (  <View style={styles.container}>
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
        	<TextInput
          		style={styles.wideInput}
          		onChangeText={(text) => this.setState({major : text})}
          		value={this.state.major}
          		placeholder="Major"
        	/> 
        	<TextInput
          		style={styles.wideInput}
          		onChangeText={(text) => this.setState({graduatingYear : text})}
          		value={this.state.graduatingYear}
          		placeholder="Year/Class"
        	/> 
			<TextInput
          		style={styles.wideInput}
          		onChangeText={(text) => this.setState({password : text})}
          		value={this.state.password}
          		placeholder="Password"
        	/> 
        	<TextInput
          		style={{ height: 100}, styles.wideInput }
          		onChangeText={(text) => this.setState({bio : text})}
          		value={this.state.bio}
          		placeholder="Short bio (optional, but helpful for students)"
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
        <Text style={styles.fullWidthButtonText}>Continue to Payment</Text>
        </TouchableHighlight>
        </View>
			);
	}
}

class StudentSignUp extends Component{
	constructor(props) {
    super(props);
    this.state = {
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
	render() {
		return ( <View style={styles.container}>
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
        	<TextInput
          		style={styles.wideInput}
          		onChangeText={(text) => this.setState({major : text})}
          		value={this.state.major}
          		placeholder="Major (optional)"
        	/> 
        	<TextInput
          		style={styles.wideInput}
          		onChangeText={(text) => this.setState({graduatingYear : text})}
          		value={this.state.graduatingYear}
          		placeholder="Year/Class (optional)"
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
        <Text style={styles.fullWidthButtonText}>Continue to Payment Info</Text>
        </TouchableHighlight>
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

  render() {
  	return (
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
          		placeholder="Expiration Date"
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
        <Text style={styles.fullWidthButtonText}>Complete Sign Up!</Text>
        </TouchableHighlight>
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
          			<View style={{width: 300}} >
          			<TextInput
          				style={styles.wideInput}
          				onChangeText={(text) => this.setState({accountNumber : text})}
          				value={this.state.accountNumber}
          				placeholder="Account Number"
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
        <Text style={styles.fullWidthButtonText}>Start Tutoring!</Text>
        </TouchableHighlight>
  		</View>
		);
  }
}
