import React, { Component, PropTypes } from 'react';
import {Text,
  View, Image,
  TouchableWithoutFeedback, Animated,
  Navigator, StyleSheet, MapView} from 'react-native';

export default class Map extends Component{
  constructor(props){
      super(props);

      this.state = {
          expanded    : false,
          animation   : new Animated.Value(60)
      };
  }

  toggle(){
      let initialValue    = this.state.expanded? 516 : 77,
          finalValue      = this.state.expanded? 77 : 516;

      this.setState({
          expanded : !this.state.expanded
      });

      this.state.animation.setValue(initialValue);
      Animated.spring(
          this.state.animation,
          {
              toValue: finalValue
          }
      ).start();
  }

  render(){
    let icon = this.icons['down'];

      if(this.state.expanded){
          icon = this.icons['up'];
      }

      return (
          <Animated.View
              style={[styles.toolbar, {height: this.state.animation}]}>
              <View style={styles.titleContainer} onLayout={this._setMinHeight.bind(this)}>
                <MapView
                  style={{height: 77}}
                  showsUserLocation={true}
                  followUserLocation={true}>
                <TouchableWithoutFeedback
                    style={{width:400, hight:this.state.animation}}
                    onPress={this.toggle.bind(this)}>
                </TouchableWithoutFeedback>
                </MapView>
              </View>


              <View onLayout={this._setMaxHeight.bind(this)}>
                <MapView
                  style={{height: this.state.animation}}}
                  showsUserLocation={true}
                  followUserLocation={true}>
                <TouchableWithoutFeedback
                    style={{width:400, hight:this.state.animation}}
                    onPress={this.toggle.bind(this)}>
                </TouchableWithoutFeedback>
                </MapView>
              </View>
          </Animated.View>
      );
  }
  }


export default Map;
