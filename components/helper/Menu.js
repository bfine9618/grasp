import React, { Component, PropTypes } from 'react';
import {Text,View,Image,TouchableHighlight,Animated} from 'react-native';

var styles = require('../styles');

class Menu extends Component{
    constructor(props){
        super(props);

        this.icons = {
            'up'    : require('Grasp/images/up.png'),
            'down'  : require('Grasp/images/hamburger.png')
        };

        this.state = {
            expanded    : false,
            animation   : new Animated.Value(60)
        };
    }

    toggle(){
        let initialValue    = this.state.expanded? 334 : 60,
            finalValue      = this.state.expanded? 60 : 334;

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

    _setMaxHeight(event){
        this.setState({
            maxHeight   : 274
        });
    }

    _setMinHeight(event){
        this.setState({
            minHeight   : 60
        });
    }

    settings(){}
    history(){}
    switchProf(){}

    render(){
      let icon = this.icons['down'];

        if(this.state.expanded){
            icon = this.icons['up'];
        }

        return (
            <Animated.View
                style={[styles.toolbar, {height: this.state.animation, overflow: 'hidden'}]}>
                <View style={styles.titleContainer} onLayout={this._setMinHeight.bind(this)}>
                <TouchableHighlight
                    style={styles.menuButton}
                    onPress={this.toggle.bind(this)}
                    underlayColor="#3498DB">
                    <Image
                        style={styles.hamburger}
                        source={icon}
                    ></Image>
                </TouchableHighlight>
                </View>

                <View onLayout={this._setMaxHeight.bind(this)}>
                  <View style={{marginTop:10, alignItems:'center'}}>
                  <Image
                    style={[styles.avatar, {borderColor: 'white', borderWidth: 3}]}
                    source={require("Grasp/images/jeff.png")}
                    />
                  <Text style={[styles.menuText, {fontSize:20, marginTop:5}]}> Jeff Wang</Text>
                  <Text style={[styles.menuText,{marginTop:0}]}> student</Text>
                  </View>
                  <View style={{flexDirection:'row',
                    alignItems: 'center', justifyContent: 'space-around', marginTop: 20}}>
                    <View style={{alignItems:'center'}}>
                      <TouchableHighlight
                          style={styles.menuButton}
                          onPress={this.settings.bind(this)}
                          underlayColor="#3498DB">
                          <Image
                              style={styles.menuImg}
                              source={require("Grasp/images/settings.png")}
                          ></Image>
                      </TouchableHighlight>
                      <Text style={styles.menuText}>SETTINGS</Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                      <TouchableHighlight
                          style={styles.menuButton}
                          onPress={this.history.bind(this)}
                          underlayColor="#3498DB">
                          <Image
                              style={styles.menuImg}
                              source={require("Grasp/images/history.png")}
                          ></Image>
                      </TouchableHighlight>
                      <Text style={styles.menuText}>HISTORY </Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                      <TouchableHighlight
                          style={styles.menuButton}
                          onPress={this.switchProf.bind(this)}
                          underlayColor="#3498DB">
                          <Image
                              style={styles.menuImg}
                              source={require("Grasp/images/switch.png")}
                          ></Image>
                      </TouchableHighlight>
                      <Text style={styles.menuText}> SWITCH </Text>
                    </View>
                  </View>
                </View>



            </Animated.View>
        );
    }
}



export default Menu;
