'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
  wrapper: {
  },
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 7,
  },
  howToImg: {
    top: 65,
    width: 282,
    height:285,
    resizeMode: 'contain',
    marginBottom: 58,
  },
  heading: {
    color: '#4a4a4a',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: "Montserrat-Regular",
    marginLeft:35,
    marginRight:35,
    marginTop: 58,
  },
  caption: {
    color: '#9b9b9b',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: "Montserrat-Light",
    marginLeft:35,
    marginRight:35,
    marginTop: 20,
  },
  /*buttonWrapperStyle: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buttonText: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'bold',
    fontSize: 16,
  },*/
  linkText: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#3498DB',
    textAlign: 'center',
  },
  linkButton: {
    backgroundColor: 'white',
    height:60,
    width: 200,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 144,
  },
});
