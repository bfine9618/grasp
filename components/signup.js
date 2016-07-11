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


export default class Signup1 extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
     	 user: "Student",
    	};
 	 }
 	 nextStep() {
     var component = BasicInfo;
 	 	this.props.navigator.push({component: component,
 	 		  passProps: { user: this.state.user
 	 		  }
		});

 	 }

   prevStep() {
    this.props.navigator.pop();
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

      function renderOption(option, selected, onSelect, index){
        const style = selected ? { fontWeight: 'bold', color: '#3498DB',
        fontSize: 34, fontFamily: 'Montserrat-Regular'} :
        {fontWeight: 'bold', color: '#E0E0E0',
        fontSize: 34, fontFamily: 'Montserrat-Regular'};

        return (
          <TouchableWithoutFeedback onPress={onSelect} key={index}>
            <Text style={style}>{option}</Text>
          </TouchableWithoutFeedback>
        );
      }

      function renderContainer(optionNodes){
        return <View>{optionNodes}</View>;
      }

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
          style = { styles.headLogo }
          source={require("../images/Logo1.png")}
        />
         <Text style={styles.heading}>
         Sign up as...
         </Text>

         <View style={{marginBottom: 100, marginTop: 37,  alignItems:'center'}}>
          <RadioButtons
            options={ options }
            onSelection={ setSelectedOption.bind(this) }
            selectedOption={this.state.user}
            renderOption={renderOption}
            renderContainer={RadioButtons.getViewContainerRenderer({
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: 318,
            })}
          />
        </View>

        <TouchableHighlight
          style={styles.fullWidthButton}
          activeOpacity={0.6}
          onPress={this.nextStep.bind(this)}>
        <Text style={styles.fullWidthButtonText}>Next</Text>
        </TouchableHighlight>
        </View>
        </View>
         );
	}
}

class BasicInfo extends Component {
  static propTypes = {
    user: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
    this.selectCheckbox = this.selectCheckbox.bind(this);
  }

  nextStep() {
   var component = TutorSignUp;
   if (this.props.user === "Student") {
     component = StudentSignUp;
   }
   this.props.navigator.push({component: component,
       passProps: { user: this.state.user
       }
   });
  }

  prevStep() {
   this.props.navigator.pop();
 }

  selectCheckbox() {
        this.setState({
            selected: !this.state.selected
        });
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
             <Text style={styles.toolbarTitle}>{this.props.user} sign up</Text>
         </View>
         <View style={styles.stepbar}>
                <Text style={styles.stepActive}>Step 1</Text>
                <Text style={styles.stepText}>Step 2</Text>
                <Text style={styles.stepText}>Step 3</Text>
                <Text style={styles.stepText}>Step 4</Text>
          </View>
          <View style={styles.statusBar}>
              <View style={styles.statusbarActive}></View>
              <View style={styles.statusbarGrey}></View>
              <View style={styles.statusbarGrey}></View>
              <View style={styles.statusbarGrey}></View>
          </View>

       <View style={styles.container}>
          <TextInput
            style={styles.wideInput}
            onChangeText={(text) => this.setState({name : text})}
            value={this.state.name}
            placeholder="Name"
          />
          <Image
            style = {styles.line}
            source={require("../images/Line.png")}
          />
          <TextInput
            style={styles.wideInput}
            onChangeText={(text) => this.setState({email : text})}
            value={this.state.email}
            placeholder="School Email"
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
            <View style={{height:50}}></View>
            <TouchableHighlight
            style={styles.fullWidthButton}
            activeOpacity={0.6}
            underlayColor={'purple'}
            onPress={this.nextStep.bind(this)}>
            <Text style={styles.fullWidthButtonText}>Next</Text>
            </TouchableHighlight>
        </View>
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

  prevStep() {
   var component = TutorSignUp;
   if (this.state.user === "Student") {
     component = StudentSignUp;
   }
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

  prevStep() {
   var component = TutorSignUp;
   if (this.state.user === "Student") {
     component = StudentSignUp;
   }
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
   var component = TutorSignUp;
   if (this.state.user === "Student") {
     component = StudentSignUp;
   }
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
