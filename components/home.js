import React, { Component } from 'react';
import {
  Text,
  View,

} from 'react-native';
import Welcome from './welcome';
var styles = require('./styles');

export default class Grasp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }

  componentWillMount() {
    if (false) { // query the local cache
      this.setState({
        loggedIn: true
      });
    }


  }

    componentDidMount() {
      if (! this.state.loggedIn) {
          this.props.navigator.push({component: Welcome});
      }
    }

  logout () {
    this.setState({
      loggedIn: false,
    });
  }
  render() {
    if (this.state.loggedIn) {
     return (
       <View style={styles.container}>
         <Text style={styles.welcome}>
           You are authenticated!
         </Text>
         <Button style={{color: 'black'}} onPress={this.logout.bind(this)}>Logout</Button>
       </View>
     );
    }
    else {
      return <View/>;
    }

  }
}
