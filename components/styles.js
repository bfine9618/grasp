'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 30
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  caption: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize:15,
  },
  icon: {
    height:153, 
    width: 112,
    resizeMode: 'stretch'
  },
  wideInput: {
    height: 40,
    alignSelf: 'stretch',
    backgroundColor: '#dcdcdc',
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5
  },
  fullWidthButton: {
    backgroundColor: 'thistle',
    height:40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginBottom: 10
  },
  fullWidthButtonText: {
    fontSize:18,
    color: 'black'
  }
});
