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



export default class TutorPayment extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	paymentMethod: 'Bank Account'
    };
  }

  prevStep() {
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

      function renderOption(option, selected, onSelect, index){
        const style = selected ? { fontWeight: 'bold', color: '#3498DB',
        fontSize: 20, fontFamily: 'Montserrat-Regular',
        textDecorationLine:'underline'} :
        {fontWeight: 'bold', color: '#E0E0E0',
        fontSize: 20, fontFamily: 'Montserrat-Regular'};

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

  			<Text style = {{fontFamily:'Montserrat-Light', marginBottom:20,
        fontSize:28, width:210, color: '#3498DB', textAlign:'center', }}>How should we pay you?</Text>
        <View style={{height: 150, alignItems:'center'}}>
        <RadioButtons
          options={ options }
          onSelection={ setSelectedOption.bind(this) }
          selectedOption={this.state.paymentMethod}
          renderOption={renderOption}
          renderContainer={RadioButtons.getViewContainerRenderer({
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: 318,
          })}
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
        </View>

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
