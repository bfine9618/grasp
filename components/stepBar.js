import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native';


var styles = require('./styles');


class StepBar extends Component {
   render() {
    return (
      <View>
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
        </View>

    );
  }
}
