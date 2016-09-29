import React, { Component, PropTypes } from 'react';
import ImagePicker from 'react-native-image-picker';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import {
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
     	 user: "Tutor",
         myBorderColor1: '#DBDBDB',
         myBorderColor2: '#DBDBDB',
         myBorderColor3: '#DBDBDB',
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

  canNext() {
    return this.state.name && this.state.email && this.state.password;
  }

	render() {
		  const options = [
			"Tutor",
            "Student",
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
            <View><Text style={style}>{option.toUpperCase()}</Text></View>
          </TouchableWithoutFeedback>
        );
      }

      function renderContainer(optionNodes){
        return <View>{optionNodes}</View>;
      }

		return (
       <View style={styles.mainContainer}>

       <View style={styles.toolbar}>
             <Text style={styles.toolbarTitle}>{this.props.user}Register</Text>
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
      <View style={styles.statusBar}>
          <View style={styles.statusBarNode}>
              <Image
                style = {styles.progressCircle}
                source={require("../images/OvalActive.png")}
              />
              <Text style={styles.stepActive}>{'\nBasic'.toUpperCase()}</Text>

          </View>
          <View style={styles.statusBarNode}>
              <Image
                style = {styles.progressLine}
                source={require("../images/LineIncomplete.png")}
              />
              <Text>{'\n'}</Text>
          </View>
          <View style={styles.statusBarNode}>
              <Image
                style = {styles.progressCircle}
                source={require("../images/OvalIncomplete.png")}
              />
              <Text style={styles.stepText}>{'\nPersonal'.toUpperCase()}</Text>

          </View>
          <View style={styles.statusBarNode}>
              <Image
                style = {styles.progressLine}
                source={require("../images/LineIncomplete.png")}
              />
              <Text>{'\n'}</Text>

          </View>
          <View style={styles.statusBarNode}>
              <Image
                style = {styles.progressCircle}
                source={require("../images/OvalIncomplete.png")}
              />
              <Text style={styles.stepText}>{'\nAcademic'.toUpperCase()}</Text>

          </View>
          <View style={styles.statusBarNode}>
              <Image
                style = {styles.progressLine}
                source={require("../images/LineIncomplete.png")}
              />
              <Text>{'\n'}</Text>

          </View>
          <View style={styles.statusBarNode}>
              <Image
                style = {styles.progressCircle}
                source={require("../images/OvalIncomplete.png")}
              />
              <Text style={styles.stepText}>{'\nPayment'.toUpperCase()}</Text>
          </View>
      </View>
        <Text style={styles.smallHeading}>
        I want to sign up as a...
        </Text>
     <View style={{marginBottom: 80, marginTop: 20,  alignItems:'center'}}>
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
    <View style={{alignItems: 'center'}} ref='inputs'>
    <TextInput ref={component => this.usrname = component}
     style={{fontFamily:'FontAwesome', height:60, width: 344, paddingLeft: 20, paddingRight: 20, alignSelf: 'center', marginTop:0, marginBottom: 0, textAlign: 'left', fontSize: 16, color: '#4A4A4A' ,borderWidth: 1, borderColor: this.state.myBorderColor1}}
     onBlur={ () => this.setState({myBorderColor1 : '#DBDBDB'}) }
     onFocus={ () => this.setState({myBorderColor1 : '#3498DB'}) }
     keyboardType={'email-address'}
     returnKeyType={'next'}
     autoCorrect={false}
     onChangeText={(text) => this.setState({name : text})}
     onSubmitEditing={(event) => {
       this.refs.Password.focus();
     }}
     value={this.state.name}
     placeholder="&#xf007;    name"
   />
   </View>
    <View style={{alignItems: 'center'}} ref='inputs'>
    <TextInput ref={component => this.usrname = component}
     style={{fontFamily:'FontAwesome', height:60, width: 344, paddingLeft: 20, paddingRight: 20, alignSelf: 'center', marginTop:10, marginBottom: 0, textAlign: 'left', fontSize: 16, color: '#4A4A4A' ,borderWidth: 1, borderColor: this.state.myBorderColor2}}
     onBlur={ () => this.setState({myBorderColor2 : '#DBDBDB'}) }
     onFocus={ () => this.setState({myBorderColor2 : '#3498DB'}) }
     keyboardType={'email-address'}
     returnKeyType={'next'}
     autoCorrect={false}
     onChangeText={(text) => this.setState({email : text})}
     onSubmitEditing={(event) => {
       this.refs.Password.focus();
     }}
     value={this.state.email}
     placeholder="&#xf003;    .edu email"
   />
   </View>
   <View style={{alignItems: 'center'}} ref='inputs'>
   <TextInput
     ref='Password'
     secureTextEntry={true}
     style={{fontFamily:'FontAwesome', height:60, width: 344, paddingLeft: 20, paddingRight: 20, alignSelf: 'center', marginTop:10, marginBottom: 35, textAlign: 'left', fontSize: 16, letterSpacing: 9, color: '#4A4A4A' ,borderWidth: 1, borderColor: this.state.myBorderColor3}}
     onBlur={ () => this.setState({myBorderColor3 : '#DBDBDB'}) }
     onFocus={ () => this.setState({myBorderColor3 : '#3498DB'}) }
     returnKeyType={'done'}
     autoCorrect={false}
     onChangeText={(text) => this.setState({password : text})}
     value={this.state.password}
     placeholder="&#xf023;     password"
   />
   </View>
   <View style={{marginBottom: 40}}>
    <TouchableHighlight
      style={styles.fullWidthButton}
      onPress={this.nextStep.bind(this)}>
    <Text style={styles.fullWidthButtonText}>{'next'.toUpperCase()}</Text>
    </TouchableHighlight>
    </View>
    </View>
     );
	}
}

/*
class BasicInfo extends Component {
  static propTypes = {
    user: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
    };
    console.log(this.props);
  }

  nextStep() {
   this.props.navigator.push({component: BasicInfo2,
       passProps: { user: this.props.user
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
            <Text style={styles.toolbarTitle}>{this.props.user} sign up</Text>
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
          <View style={[styles.line]}/>
          <TextInput
            style={styles.wideInput}
            onChangeText={(text) => this.setState({email : text})}
            value={this.state.email}
            placeholder="School Email"
          />
          <View style={[styles.line]}/>
          <TextInput
            style={styles.wideInput}
            onChangeText={(text) => this.setState({password : text})}
            value={this.state.password}
            placeholder="Password"
          />
          <View style={[styles.line]}/>
          <TextInput
            style={styles.wideInput}
            onChangeText={(text) => this.setState({password : text})}
            value={this.state.password}
            placeholder="Confirm Password"
          />
          <View style={[styles.line]}/>
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
*/

class BasicInfo extends Component {
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
   this.props.navigator.push({component: BasicInfo2,
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
    //  console.log('Response = ', response);

     if (response.didCancel) {
    //    console.log('User cancelled photo picker');
     }
     else if (response.error) {
    //    console.log('ImagePicker Error: ', response.error);
     }
     else if (response.customButton) {
    //    console.log('User tapped custom button: ', response.customButton);
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
          <Text style={styles.toolbarTitle}>{this.props.user} sign up</Text>
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
         <View style={styles.statusBar}>
             <View style={styles.statusBarNode}>
                 <Image
                   style = {styles.progressCircle}
                   source={require("../images/OvalComplete.png")}
                 />
                 <Text style={styles.stepComplete}>{'\nBasic'.toUpperCase()}</Text>

             </View>
             <View style={styles.statusBarNode}>
                 <Image
                   style = {styles.progressLine}
                   source={require("../images/LineComplete.png")}
                 />
                 <Text>{'\n'}</Text>
             </View>
             <View style={styles.statusBarNode}>
                 <Image
                   style = {styles.progressCircle}
                   source={require("../images/OvalActive.png")}
                 />
                 <Text style={styles.stepActive}>{'\nPersonal'.toUpperCase()}</Text>

             </View>
             <View style={styles.statusBarNode}>
                 <Image
                   style = {styles.progressLine}
                   source={require("../images/LineIncomplete.png")}
                 />
                 <Text>{'\n'}</Text>

             </View>
             <View style={styles.statusBarNode}>
                 <Image
                   style = {styles.progressCircle}
                   source={require("../images/OvalIncomplete.png")}
                 />
                 <Text style={styles.stepText}>{'\nAcademic'.toUpperCase()}</Text>

             </View>
             <View style={styles.statusBarNode}>
                 <Image
                   style = {styles.progressLine}
                   source={require("../images/LineIncomplete.png")}
                 />
                 <Text>{'\n'}</Text>

             </View>
             <View style={styles.statusBarNode}>
                 <Image
                   style = {styles.progressCircle}
                   source={require("../images/OvalIncomplete.png")}
                 />
                 <Text style={styles.stepText}>{'\nPayment'.toUpperCase()}</Text>
             </View>
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
          <View style={[styles.line]}/>
        	<TextInput
          		style={styles.wideInput}
          		onChangeText={(text) => this.setState({skype : text})}
          		value={this.state.skype}
          		placeholder="Skype Username (optional)"
        	/>
        <View style={[styles.line]}/>
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

class BasicInfo2 extends Component {
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
          <Text style={styles.toolbarTitle}>{this.props.user} sign up</Text>
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
         <View style={styles.statusBar}>
             <View style={styles.statusBarNode}>
                 <Image
                   style = {styles.progressCircle}
                   source={require("../images/OvalComplete.png")}
                 />
                 <Text style={styles.stepComplete}>{'\nBasic'.toUpperCase()}</Text>

             </View>
             <View style={styles.statusBarNode}>
                 <Image
                   style = {styles.progressLine}
                   source={require("../images/LineComplete.png")}
                 />
                 <Text>{'\n'}</Text>
             </View>
             <View style={styles.statusBarNode}>
                 <Image
                   style = {styles.progressCircle}
                   source={require("../images/OvalComplete.png")}
                 />
                 <Text style={styles.stepComplete}>{'\nPersonal'.toUpperCase()}</Text>

             </View>
             <View style={styles.statusBarNode}>
                 <Image
                   style = {styles.progressLine}
                   source={require("../images/LineComplete.png")}
                 />
                 <Text>{'\n'}</Text>

             </View>
             <View style={styles.statusBarNode}>
                 <Image
                   style = {styles.progressCircle}
                   source={require("../images/OvalActive.png")}
                 />
                 <Text style={styles.stepActive}>{'\nAcademic'.toUpperCase()}</Text>

             </View>
             <View style={styles.statusBarNode}>
                 <Image
                   style = {styles.progressLine}
                   source={require("../images/LineIncomplete.png")}
                 />
                 <Text>{'\n'}</Text>

             </View>
             <View style={styles.statusBarNode}>
                 <Image
                   style = {styles.progressCircle}
                   source={require("../images/OvalIncomplete.png")}
                 />
                 <Text style={styles.stepText}>{'\nPayment'.toUpperCase()}</Text>
             </View>
         </View>

       <View style={styles.container}>
          <TextInput
          		style={styles.wideInput}
          		onChangeText={(text) => this.setState({major : text})}
          		value={this.state.major}
          		placeholder="Major"
        	/>
          <View style={[styles.line]}/>
        	<TextInput
          		style={styles.wideInput}
              keyboardType={'numeric'}
              maxLength={4}
          		onChangeText={(text) => this.setState({graduatingYear : text})}
          		value={this.state.graduatingYear}
          		placeholder="graduation year"
        	/>
          <View style={[styles.line]}/>
          <TextInput
          		style={styles.wideInput}
          		onChangeText={(text) => this.setState({bio : text})}
          		value={this.state.bio}
              maxLength={60}
          		placeholder="Short bio (optional)"
        	/>
          <View style={[styles.line]}/>
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
