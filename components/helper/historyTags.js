import React, { Component, PropTypes } from 'react';
import {Text,
  View, Image,
  TouchableHighlight, Animated,
  Navigator, ScrollView} from 'react-native';

import Profile from '../profile';
var styles = require('../styles');

export default class HistoryTags extends Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render(){
        return (
          <ScrollView
          showsVerticalScrollIndicator= {true}
          scrollEventThrottle={200}
          automaticallyAdjustContentInsets={false}>

           <View style={styles.historyView}>
             <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
               <Text style={styles.historyHead}>Math 104</Text>
               <Text style={styles.historyText}>4/12/16</Text>
             </View>
               <Text style={[styles.historyText, {marginBottom: 10}]}>Braden F.</Text>
               <Text style={styles.historyText}>Total time: 20:05</Text>
               <Text style={styles.historyText}>Total Cost: $6.04</Text>
           </View>
           <View style={styles.historyView}/>
             <View style={{marginLeft: 12, marginRight: 12, borderLeftColor: '#3498DB',
               borderLeftWidth: 4, height: 124, backgroundColor: 'white', marginTop:21}}/>
             <View style={{marginLeft: 12, marginRight: 12, borderLeftColor: '#3498DB',
               borderLeftWidth: 4, height: 124, backgroundColor: 'white', marginTop:21}}/>
             <View style={{marginLeft: 12, marginRight: 12, borderLeftColor: '#3498DB',
               borderLeftWidth: 4, height: 124, backgroundColor: 'white', marginTop:21}}/>
             <View style={{marginLeft: 12, marginRight: 12, borderLeftColor: '#3498DB',
               borderLeftWidth: 4, height: 124, backgroundColor: 'white', marginTop:21}}/>

         </ScrollView>
        );
    }
}



export default HistoryTags;
