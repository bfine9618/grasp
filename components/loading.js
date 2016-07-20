import React, { Component, PropTypes } from 'react';

import * as Progress from 'react-native-progress';
import TimerMixin from 'react-timer-mixin';
import Home from './stuInitial';
import Found from './tutorFound';
import Nearby from './nearby';
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
  static propTypes = {
    session: PropTypes.object.isRequired,
  }

	constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      progress: 0,
      indeterminate: true,
      tutorObject: {
        name: "Braden F.",
        phone: "1234567890",
        skype: 'braden.fineberg@gmail.com',
        rating: "4.5",
        reviewCount: "12",
        bio: 'I’m a Systems Engineering major from Dallas',
        year: '2019',
        major: 'Systems Engineering',
        img: '../images/jeff.png',
        lat: 39.954359,
        long: -75.201275,
      }
    };
    this.props.session.tutor = this.state.tutorObject.name;
  }

  cancel() {
    this.props.navigator.push({component: Home});
  }

  found() {
    var component = Found;
    if(this.props.session.loc.indexOf('@') >= 0 ) {
      component = Nearby;
    }

    console.log(this.props.session);

    this.props.navigator.push({component: component,
      passProps: {
        session: this.props.session,
        tutorObject: this.state.tutorObject,
        time: 0,
      }
    });
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
