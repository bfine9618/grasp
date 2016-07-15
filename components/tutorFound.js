import React, { Component, PropTypes } from 'react';
import Menu from './helper/Menu';
import Map from './helper/map';
import {
  Text,
  ListView,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableOpacity,
  MapView
} from 'react-native';

import { RadioButtons } from 'react-native-radio-buttons';


var styles = require('./styles');

var that;
export default class TutorFound extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1']),
      tutorObject: {
        name: "Braden Fineberg",
        number: "555-5555",
        rating: "4.5",
        reviewCount: "12",
      },
      info: "Reviews"
    };
    that = this;
  }

  render() {

    return (
      <View>
        <Menu/>
        <MapView
          style={{height:200, opacity:.5}}
          showsUserLocation={true}
          followUserLocation={true}
        />
      </View>
    );
  }


  _renderRow() {
    var header = (
      <View>
      <View style = {{flexDirection:'row'}}>
        <View>
      <Image
          style = {styles.headLogo, {height: 100, width: 100}}
          source={require("../images/Logo1.png")}
        />
        <Text>{that.state.tutorObject.name}</Text>
        </View>
        <View>
        <Text>4 Minutes Away</Text>
        <Text>{that.state.tutorObject.number}</Text>
        </View>
      </View>
              <Text>{that.state.tutorObject.reviewCount} Reviews</Text>
        <Text>{that.state.tutorObject.rating} Stars</Text>

      </View>
    );



    const options = [
      "Reviews",
      "About"
      ];

      function setSelectedOption(selectedOption){
        console.log(that.state);
        that.setState({
          info: selectedOption
        });
        that.forceUpdate();
        console.log(that.state);
      }

      function renderOption(option, selected, onSelect, index){
        const style = selected ? { fontWeight: 'bold', color: '#3498DB',
        fontSize: 34, fontFamily: 'Montserrat-Regular'} :
        {fontWeight: 'bold', color: '#E0E0E0',
        fontSize: 34, fontFamily: 'Montserrat-Regular'};

        return (
          <TouchableWithoutFeedback onPress={onSelect} key={index}>
            <Text style={style}>{option}</Text>
          </TouchableWithoutFeedback>
        );
      }

      function renderContainer(optionNodes){
        return <View>{optionNodes}</View>;
      }


    var content = (
      <View style={{marginBottom: 100, marginTop: 37,  alignItems:'center'}}>
          <RadioButtons
            options={ options }
            onSelection={ setSelectedOption }
            selectedOption={that.state.info}
            renderOption={renderOption}
            renderContainer={RadioButtons.getViewContainerRenderer({
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: 318,
            })}
          />

      </View>
    );

    return (
      <Accordion
        header={header}
        content={content}
        easing="easeOutCubic"
      />
    );
  }
}
