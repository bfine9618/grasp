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
  logo: {
    height:153,
    width: 112,
    marginTop: 77,
    resizeMode: 'stretch'
  },
  line: {
    width: 227,
    marginTop: 10,
    marginBottom: 10,
    resizeMode: 'stretch'
  },
  wideInput: {
    height: 20,
    alignSelf: 'stretch',
    marginLeft: 5,
    marginTop:12,
    marginBottom: 12,
    marginRight: 5,
    textAlign: 'center',
    fontSize: 18,
    color: '#3498DB'
  },
  fullWidthButton: {
    backgroundColor: '#3498DB',
    height:60,
    width: 228,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    alignSelf: 'center',
    marginBottom: 10
  },
  fullWidthButtonText: {
    fontSize:24,
    color: 'white'
  }
});
