import React, { Component, PropTypes } from 'react';
import Menu from './helper/Menu';
import {
  Text,
  ListView,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableOpacity,
  MapView, Animated
} from 'react-native';

import { RadioButtons } from 'react-native-radio-buttons';


var styles = require('./styles');

var that;
export default class TutorFound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tutorObject: {
        name: "Braden",
        phone: "(123)-456-789",
        rating: "4.5",
        reviewCount: "12",
        bio: 'I’m a Systems Engineering major from Dallas',
        year: '2019',
        major: 'Systems Engineering'
      },
      selectedOption: "REVIEWS",
      animation: new Animated.Value(77),
      expanded: false,
    };

    this.icons = {
        'up'    : require('Grasp/images/up_blue.png'),
        'down'  : require('Grasp/images/down.png')
    };

    that = this;
  }

  toggle() {
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

  render() {
    let icon = this.icons['down'];

      if(this.state.expanded){
          icon = this.icons['up'];
      }

      const options = [
        "REVIEWS",
        "ABOUT"
        ];

        function setSelectedOption(selectedOption){
          this.setState({
            selectedOption: selectedOption
          });
        }

        function renderOption(option, selected, onSelect, index){
          const style = selected ? { fontWeight: 'bold', color: '#3498DB',
          fontSize: 20, fontFamily: 'Montserrat-Light',
          textDecorationLine:'underline'} :
          {color: '#d3d3d3', fontSize: 20, fontFamily: 'Montserrat-Light'};

          return (
            <TouchableWithoutFeedback onPress={onSelect} key={index}>
              <View><Text style={style}>{option}</Text></View>
            </TouchableWithoutFeedback>
          );
        }

        function renderContainer(optionNodes){
          return <View>{optionNodes}</View>;
        }

    return (
      <View>
        <Menu/>
        <Animated.View style={{height:this.state.animation}}>
          <MapView
            style={{height: 516}}
            showsUserLocation={true}
            followUserLocation={true}/>
        </Animated.View>
        <View style={{backgroundColor:"#f6f6f6", paddingTop:10}}>
          <View style={{justifyContent:'space-around', flexDirection:'row'}}>
            <View>
            <Image
              style={{marginTop:-65, borderWidth:6, borderRadius:54,
                borderColor:'#3498DB', width:108, height:108}}
                source={require('../images/jeff.png')}/>
                <Text style={{fontFamily:'Montserrat-Regular',
                fontSize: 24, color: '#4a4a4a', textAlign: 'center'}}>
                {this.state.tutorObject.name}</Text>
            </View>
            <View>
            <TouchableHighlight
                style={styles.menuButton}
                onPress={this.toggle.bind(this)}
                underlayColor="#f6f6f6">
                <Image
                    style={styles.hamburger}
                    source={icon}
                ></Image>
            </TouchableHighlight>
            <TouchableOpacity>
              <View style={{marginTop:-30, marginBottom: 10,
                backgroundColor:"blue", width: 50, height: 30}}>
                <Text>Make phonecall</Text>
              </View>
            </TouchableOpacity>
            </View>
            <View style={{alignItems:'center'}}>
              <Text style={{color:'#3498DB', fontSize:24,
                fontFamily: "Montserrat-Light"}}>Eta: </Text>
              <Text style={{fontFamily: "Montserrat-Regular",
                color:'#3498DB', fontSize:24}}>4 min.</Text>
            </View>
          </View>
          <View style={{justifyContent:'center', alignItems:'center'}}>
            <Text style={{color:'#4a4a4a', fontSize:16, marginBottom: 7,
            fontFamily: "Montserrat-Light", marginTop: 10,}}>
            {this.state.tutorObject.reviewCount} reviews</Text>
            <Image style={{width: 168, resizeMode:'contain', height: 27}}
              source={require('../images/reviews.png')}/>
          </View>
          <View style={{height: 350, alignItems:'center', marginTop: 25}}>
          <RadioButtons
            options={options}
            onSelection={ setSelectedOption.bind(this) }
            selectedOption={this.state.selectedOption}
            renderOption={renderOption}
            renderContainer={RadioButtons.getViewContainerRenderer({
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: 318,
            })}
          />
  			{(() => {
          		switch (this.state.selectedOption) {
            		case "REVIEWS":   return (
            			<View>
          			</View>
            			);
           		 case "ABOUT": return (
                <View>
                 <View>
                    <Text style={[styles.profileText, {fontFamily:'Montserrat-Light',
                    textAlign:'center', marginTop:30, width: 300}]}>{'\"'}
                    {this.state.tutorObject.bio}{'\"'}</Text>
                </View>
                 <View style={{paddingLeft: 30}}>
                   <Text style={[styles.profileText, {fontFamily:'Montserrat-Light',
                   textAlign:'left', marginTop:25}]}>Major:</Text>
                   <Text style={[styles.profileText, {fontFamily:'Montserrat-Regular',
                   textAlign:'left', marginTop:5}]}>
                   {this.state.tutorObject.major}</Text>
                   <Text style={[styles.profileText, {fontFamily:'Montserrat-Light',
                   textAlign:'left', marginTop:20}]}>Graduation Year:</Text>
                   <Text style={[styles.profileText, {fontFamily:'Montserrat-Regular',
                   textAlign:'left', marginTop:5}]}>{this.state.tutorObject.year}</Text>
                  </View>
                  </View>
            			);
            		default:      return <Text>""</Text>;
          	}
       		})() }
          </View>
        </View>
      </View>
    );
  }
}
