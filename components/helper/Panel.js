import React, { Component, PropTypes } from 'react';
import {Text,View,Image,TouchableHighlight,Animated} from 'react-native';

var styles = require('../styles');

class Panel extends Component{
    constructor(props){
        super(props);

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

    render(){
        return (
            <Animated.View
                style={[styles.toolbar, {height: this.state.animation, overflow: 'hidden'}]}>
                <View style={styles.titleContainer} onLayout={this._setMinHeight.bind(this)}>
                <TouchableHighlight
                    style={styles.prevButton}
                    onPress={this.toggle.bind(this)}
                    underlayColor="#3498DB">
                    <Image
                        style={styles.hamburger}
                        source={require("Grasp/images/hamburger.png")}
                    ></Image>
                </TouchableHighlight>
                </View>

                <View onLayout={this._setMaxHeight.bind(this)}>
                <View style={{marginTop:30, alignItems:'center'}}>
                <Image
                  style={[styles.avatar, {borderColor: 'white', borderWidth: 3}]}
                  source={require("Grasp/images/jeff.png")}
                  />
                </View>
                <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 30}}>
                  <View style={{alignItems:'center'}}>
                    <TouchableHighlight
                        style={styles.prevButton}
                        onPress={this.toggle.bind(this)}
                        underlayColor="#3498DB">
                        <Image
                            style={styles.menuImg}
                            source={require("Grasp/images/settings.png")}
                        ></Image>
                    </TouchableHighlight>
                    <Text style={styles.menuText}> Settings </Text>
                  </View>
                    <TouchableHighlight
                        style={styles.prevButton}

                        underlayColor="#3498DB">
                        <Image
                            style={styles.hamburger}
                            source={require("Grasp/images/hamburger.png")}
                        ></Image>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.prevButton}

                        underlayColor="#3498DB">
                        <Image
                            style={styles.hamburger}
                            source={require("Grasp/images/hamburger.png")}
                        ></Image>
                    </TouchableHighlight>
                </View>
                </View>



            </Animated.View>
        );
    }
}



export default Panel;
