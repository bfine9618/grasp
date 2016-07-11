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
import StudentSignUp from './studentSignUp';
import TutorSignUp from './tutorSignUp';

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
