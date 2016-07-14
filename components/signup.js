import React, { Component, PropTypes } from 'react';
import ImagePicker from 'react-native-image-picker';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import {
  Alert,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native';

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
            <View><Text style={style}>{option}</Text></View>
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
      email: '',
    };
  }

  canNext() {
    var ans = this.state.name && (this.state.email.indexOf("upenn.edu") > -1)
    && (this.state.password === this.state.cpassword) &&
    !(this.state.password === null);

    if (!ans) {
      Alert.alert(
        'Uh Oh!',
        "")}

    return ans;
  }

  renderProblems() {
  }

  nextStep() {
    if (this.canNext()) {
   this.props.navigator.push({component: BasicInfo2,
       passProps: { user: this.props.user,
         name: this.state.name || '',
         email: this.state.email || '',
         password: this.state.password || '',
       }
     });
    }
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
            secureTextEntry={true}
            placeholder="Password"
          />
          <Image
            style = {styles.line}
            source={require("../images/Line.png")}
          />
          <TextInput
            style={styles.wideInput}
            onChangeText={(text) => this.setState({cpassword : text})}
            value={this.state.cpassword}
            secureTextEntry={true}
            placeholder="Confirm Password"
          />
          <Image
            style = {styles.line}
            source={require("../images/Line.png")}
          />

          <KeyboardSpacer/>
            <View style={{height:50}}></View>
            <TouchableHighlight
            style={styles.fullWidthButton}
            activeOpacity={0.6}
            underlayColor={'white'}
            onPress={this.nextStep.bind(this)}>
            <Text style={styles.fullWidthButtonText}>Next</Text>
            </TouchableHighlight>
        </View>
        </View>
        );
      }
}

class BasicInfo2 extends Component {
  static propTypes = {
    user: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      avatarSource: null,
      videoSource: null
    };
  }

  nextStep() {
   this.props.navigator.push({component: BasicInfo3,
       passProps: { user: this.props.user,
         phoneNumber: this.state.phoneNumber || '',
  	 		  	skype: this.state.skype || '',
            profpic: this.state.avatarSource,
       }
   });
  }

  prevStep() {
   this.props.navigator.pop();
 }

 selectPhotoTapped() {
   const options = {
     quality: 0.5,
     maxWidth: 300,
     maxHeight: 300,
     allowsEditing: false,
     mediaType: 'photo',
     storageOptions: {
       skipBackup: true
     }
   };

   ImagePicker.showImagePicker(options, (response) => {
     console.log('Response = ', response);

     if (response.didCancel) {
       console.log('User cancelled photo picker');
     }
     else if (response.error) {
       console.log('ImagePicker Error: ', response.error);
     }
     else if (response.customButton) {
       console.log('User tapped custom button: ', response.customButton);
     }
     else {
       var source;

       // You can display the image using either:
       source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

       // Or:
       // if (Platform.OS === 'android') {
       //   source = {uri: response.uri, isStatic: true};
       // } else {
       //   source = {uri: response.uri.replace('file://', ''), isStatic: true};
       // }

       this.setState({
         avatarSource: source
       });
     }
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

          <View style={styles.avatarContainer}>
           <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
             <View style={[styles.avatar, styles.avatar, {marginBottom: 20}]}>
             { this.state.avatarSource === null ?
               <View>
               <Image style={styles.avatar} source={require("../images/profpicture.png")}/>
               <Text style={{fontFamily: 'Montserrat-Regular',
               fontSize: 14, color:'#8D8D8D', marginTop:12}}>+ profile picture</Text></View> :
               <Image style={styles.avatar} source={this.state.avatarSource} />
             }
           </View>
           </TouchableOpacity>
         </View>

       <View style={styles.container}>
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
          		onChangeText={(text) => this.setState({skype : text})}
          		value={this.state.skype}
          		placeholder="Skype Username (optional)"
        	/>
          <Image
            style = {styles.line}
            source={require("../images/Line.png")}
          />
          <View style={{height:30}}></View>
        	<TouchableHighlight
          style={styles.fullWidthButton}
          activeOpacity={0.6}
          underlayColor={'purple'}
          onPress={this.nextStep.bind(this)}>
        <Text style={styles.fullWidthButtonText}>Next</Text>
        </TouchableHighlight>
        <KeyboardSpacer/>
        </View>
        </View>
			);
	}
}

class BasicInfo3 extends Component {
  static propTypes = {
    user: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
    };
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
                <Text style={styles.stepComplete}>Step 1</Text>
                <Text style={styles.stepComplete}>Step 2</Text>
                <Text style={styles.stepActive}>Step 3</Text>
                <Text style={styles.stepText}>Step 4</Text>
          </View>
          <View style={styles.statusBar}>
              <View style={styles.statusbarActive}></View>
              <View style={styles.statusbarActive}></View>
              <View style={styles.statusbarActive}></View>
              <View style={styles.statusbarGrey}></View>
          </View>

       <View style={styles.container}>
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
              keyboardType={'numeric'}
              maxLength={4}
          		onChangeText={(text) => this.setState({graduatingYear : text})}
          		value={this.state.graduatingYear}
          		placeholder="graduation year"
        	/>
          <Image
            style = {styles.line}
            source={require("../images/Line.png")}
          />
          <TextInput
          		style={styles.wideInput}
          		onChangeText={(text) => this.setState({bio : text})}
          		value={this.state.bio}
              maxLength={60}
          		placeholder="Short bio (optional)"
        	/>
          <Image
            style = {styles.line}
            source={require("../images/Line.png")}
          />
          <View style={{height:30}}></View>
        	<TouchableHighlight
          style={styles.fullWidthButton}
          activeOpacity={0.6}
          underlayColor={'purple'}
          onPress={this.nextStep.bind(this)}>
        <Text style={styles.fullWidthButtonText}>Next</Text>
        </TouchableHighlight>
        <KeyboardSpacer/>
        </View>
        </View>
			);
	}
}
