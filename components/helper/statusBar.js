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

var styles = require('../styles');

export default class StatusBar extends Component {
  static propTypes = {
    step: PropTypes.number.isRequired,
  }

  constructor(props) {
    	super(props);
    	this.state = {
     	 step: this.props.step,
    	};
 	 }

   render() {
     return (
       <View>
       {(() => {
         if(this.state.step == 1) {
          return(
            <View>
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
            </View>
          );
         }
         else if(this.state.step == 2) {
           return (
             <View>
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
              </View>
          );
        } else if(this.state.step == 3) {
          return (
            <View>
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
           </View>
         );
       } else {
        return (
          <View>
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
          </View>
        );
       }
       })() }
      </View>
     );
   }
}
