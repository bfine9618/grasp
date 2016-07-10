import React, { Component } from 'react';

import * as Progress from 'react-native-progress';
import TimerMixin from 'react-timer-mixin';

import {
  Navigator,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight
} from 'react-native';

import Home from "./stuInitial";

var styles = require('./styles');
var ProgressBar = require('ProgressBarAndroid')
export default class loading extends Component{
	constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      progress: 0,
      indeterminate: true,
    };
  }

  home() {
    this.props.navigator.push({component: Home});
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    let progress = 0;
    this.setState({ progress });
    setTimeout(() => {
      this.setState({ indeterminate: false });
      setInterval(() => {
        progress += Math.random() / 5;
        if (progress > 1) {
          progress = 1;
        }
        this.setState({ progress });
      }, 5000);
      this.props.navigator.push({component: Home});
    }, 10000);
  }

  render () {
    var progressBar =
      <View style={styles.container}>
        <ProgressBar styleAttr="Inverse" />
      </View>;

    return (
      <View style={styles.container}>
          <Progress.Circle
                style={styles.progress}
                progress={this.state.progress}
                indeterminate={this.state.indeterminate}
                size={109}
                thickness={10}
          />
          <ProgressBar styleAttr="Large" color="blue"/>
          <Text style={styles.courseCodeAsk}>
            <Text style={{fontFamily: 'Montserrat-Light'}}>We{"\'"}re finding you a tutor.</Text>
          </Text>
          <View style={{paddingTop: 120, alignItems: 'center'}}>
              <TouchableHighlight
                style={{width: 50, height: 50}}
                activeOpacity={0.6}
                underlayColor={'white'}
                onPress={this.home.bind(this)}>
              <Image
                  style = {{width:50, height:50}}
                  source={require("../images/cancel.png")}
                />

              </TouchableHighlight>
              <Text style={styles.footerText}>
                <Text style={{marginTop:15}}>HOLD TO CANCEL</Text>
              </Text>
          </View>
      </View>
    );
  }
}
