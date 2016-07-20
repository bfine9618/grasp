import React, { Component } from 'react';

import * as Progress from 'react-native-progress';
import TimerMixin from 'react-timer-mixin';
import Home from './stuInitial';
import Found from './tutorFound';
import {
  Navigator,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight
} from 'react-native';

var styles = require('./styles');
var ProgressBar = require('ProgressBarAndroid');

export default class loading extends Component{
	constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      progress: 0,
      indeterminate: true,
    };
  }

  cancel() {
    this.props.navigator.push({component: Home});
  }

  found() {
    this.props.navigator.push({component: Found});
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    let progress = 0;
    this.setState({ progress });
    var t = setTimeout(() => {
      this.setState({ indeterminate: false });
      setInterval(() => {
        progress += Math.random() / 5;
        if (progress > 1) {
          progress = 1;
        }
        this.setState({ progress: progress });
      }, 5000);
      this.found();
      clearTimeout(t);
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

          <Text style={styles.courseCodeAsk}>
            <Text style={{fontFamily: 'Montserrat-Light'}}>We{"\'"}re finding you a tutor.</Text>
          </Text>
          <View style={{paddingTop: 120, alignItems: 'center'}}>
              <TouchableHighlight
                style={{width: 50, height: 50}}
                activeOpacity={0.6}
                underlayColor={'white'}
                onPress={this.cancel.bind(this)}>
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
