import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback
} from 'react-native';

var styles = require('./styles');


export default class StudentPayment extends Component {
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
          <Text style={styles.toolbarTitle}>Student sign up</Text>
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
        fontSize:28, width:210, color: '#3498DB', textAlign:'center', }}>
        Enter payment info</Text>
  			<TextInput
          		style={styles.wideInput}
          		onChangeText={(text) => this.setState({creditCardNumber : text})}
          		value={this.state.creditCardNumber}
          		placeholder="Credit Card Number"
        	/>
          <View style={[styles.line]}/>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View style={{alignItems:"center"}}>
              <TextInput
              		style={[styles.wideInput, {width:100}]}
              		onChangeText={(text) => this.setState({ccExpDate : text})}
              		value={this.state.ccExpDate}
                  maxLength={5}
              		placeholder="MM/YY"
            	/>
              <Image
                style = {[styles.shortLine,{width:80}]}
                source={require("../images/Line.png")}
              />
          </View>

          <View style={{alignItems:"center"}}>

        	<TextInput
          		style={[styles.wideInput, {width:80}]}
          		onChangeText={(text) => this.setState({CVV : text})}
          		value={this.state.CVV}
              maxLength= {3}
          		placeholder="CVV"
        	/>
          <Image
            style = {[styles.shortLine,{width:80}]}
            source={require("../images/Line.png")}
          />
          </View>

          </View>
          <View style={{height:30}}></View>
        	<TouchableHighlight
          style={styles.fullWidthButton}
          activeOpacity={0.6}
          underlayColor={'white'}
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
