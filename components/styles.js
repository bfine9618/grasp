'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
  baseText: {
    fontFamily: 'Montserrat-Light',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 30,
  },
  centerView: {
  },
  heading: {
    fontSize: 32,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Montserrat-Light'
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
  headLogo :{
    height:153,
    width: 112,
    marginTop: 14,
    resizeMode: 'stretch'
  },
  line: {
    width: 227,
    height: 1,
    marginTop: 8,
    marginBottom: 8,
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
  },

  prevImg: {
    left: 14,
    width: 12,
    height: 25,
  },

  prevButton: {
    width:25,
    height:25,

  },

  mainContainer:{
    flex: 1,
  },

  toolbar:{
        backgroundColor: '#3498DB',
        paddingTop:25,
        paddingBottom:10,
        flexDirection:'row',
        height: 60,   //Step 1
    },
  stepbar:{
    backgroundColor: '#f5f5f5',
    paddingTop:13,
    paddingBottom:13,
    flexDirection:'row',
    height: 35,
    alignItems: 'center',
  },
  stepText:{
    fontFamily: 'Montserrat-Regular',
    fontSize:20,
    height: 24,
    marginLeft:15,
    marginRight:15,
    color: '#D3D3D3',
  },
  stepActive:{
    fontFamily: 'Montserrat-Regular',
    fontSize:20,
    marginLeft:15,
    height: 24,
    marginRight:15,
    color: '#4A4A4A',
  },
  stepComplete:{
    fontFamily: 'Montserrat-Regular',
    fontSize:20,
    height: 24,
    marginLeft:15,
    marginRight:15,
    color: '#1ABC9C',
  },
    toolbarButton:{
        width: 50,            //Step 2
        color:'#fff',
        textAlign:'center'
    },
    toolbarTitle:{
        color:'#fff',
        textAlign:'center',
        fontFamily:'Montserrat-Regular',
        fontSize: 20,
        flex:1                //Step 3
    },
});
