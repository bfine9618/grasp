import React, { Component } from 'react';
import {
  Navigator,
  Text,
  View,
  Image,
  TextInput, 
  TouchableHighlight
} from 'react-native';
import Grasp from './home';
import Login from './login';
var styles = require('./styles');


export default class Navigation extends Component{
  render() {
    return (
      <Navigator 
        style = {{ flex: 1}}
        initialRoute={{component: Grasp}}
        renderScene={this.navigatorRenderScene}/>
    );
  }

  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    return <route.component navigator={navigator} {...route.passProps}/>;
    switch (route.id) {
      case 'home':
        return <Grasp navigator={navigator} />;
      case 'login':
        return <Login navigator={navigator} />;

    }
  }
}