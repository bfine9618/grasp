'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

var blue = '#3498DB';
var darkGrey = '#4A4A4A';
var lightGrey = '#DBDBDB';

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
    marginBottom: 10,
    marginTop: 40,
    fontFamily: 'Montserrat-Light'
  },
  smallHeading: {
    fontSize: 18,
    textAlign: 'center',
    margin: 0,
    marginTop: 0,
    color: '#4A4A4A',
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
    marginBottom: 30,
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
    backgroundColor: blue,
  },
  shortLine: {
    width: 47,
    height: 1,
    marginTop: 8,
    marginBottom: 8,
    backgroundColor: blue,
  },
  disabledLine: {
    backgroundColor: lightGrey,
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
  inputFormDefault: {
    height:60,
    width: 344,
    alignSelf: 'stretch',
    marginTop:12,
    marginBottom: 12,
    textAlign: 'left',
    fontSize: 16,
    color: darkGrey,
    borderWidth: 1,
    borderColor: lightGrey
  },
  // inputFormActive: {
  //   height:60,
  //   width: 344,
  //   alignSelf: 'stretch',
  //   marginTop:12,
  //   marginBottom: 12,
  //   textAlign: 'left',
  //   fontSize: 16,
  //   color: darkGrey,
  //   borderWidth: 1,
  //   borderColor: blue
  // },
  fullWidthButton: {
    backgroundColor: '#3FAAE2',
    height:60,
    width: 344,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    shadowOffset:  {
            width: 0,
            height: 2,
    },
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    alignSelf: 'center',
    marginBottom: 10
  },
  fullWidthButtonText: {
    fontSize: 20,
    color: 'white',
    letterSpacing: 0.32
  },

  fullWidthButtonWhite: {
    backgroundColor: 'white',
    height:60,
    width: 344,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    shadowOffset:  {
            width: 0,
            height: 2,
    },
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    alignSelf: 'center',
    marginBottom: 10
  },

  fullWidthButtonTextWhite: {
      fontSize: 20,
      color: '#4A4A4A',
      letterSpacing: 0.32
  },
  progressCircle: {
      width: 16,
      height: 16,
  },
  progressLine: {
      marginTop: 8,
  },
  prevImg: {
    left: 14,
    width: 12,
    height: 25,
  },

  prevButton: {
    width:40,
    height:40,
    position: 'absolute',
    top: 25,
    left: 12,
  },

  mainContainer:{
    flex: 1,
  },

  toolbar:{
        backgroundColor: '#3FAAE2',
        paddingTop:25,
        paddingBottom:10,
        height: 60,
    },
  stepbar:{
    backgroundColor: '#ffffff',
    paddingTop:0,
    paddingBottom:0,
    flexDirection:'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepText:{
    fontFamily: 'Montserrat-Regular',
    fontSize:12,
    // height: 12,
    // marginLeft:15,
    marginTop:-10,
    color: '#C0C0C0',
    width: 75,
    textAlign: 'center',
    // justifyContent:'space-around',
  },
  stepActive:{
    fontFamily: 'Montserrat-Regular',
    fontSize:12,
    // marginLeft:15,
    // height: 12,
    marginTop:-10,
    color: '#3498DB',
    width: 75,
    textAlign: 'center',
    // justifyContent:'space-around',

  },
  stepComplete:{
    fontFamily: 'Montserrat-Regular',
    fontSize:12,
    // height: 12,
    // marginLeft:0,
    marginTop:-10,
    width: 75,
    textAlign: 'center',
    color: '#C0C0C0',
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

    textLinkButton: {
      width:150,
      height: 20,
      backgroundColor: 'white',
    },
    textLink: {
      fontFamily: 'Montserrat-Regular',
      fontSize: 16,
      color: blue,
      textAlign: 'center',
    },
    nextBackView: {
      alignItems: 'center',
      marginBottom: 16,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },

    aceImg: {
      height: 101,
      width: 101,
      marginBottom: 19,
    },
    courseCodeAsk: {
      fontSize: 20,
      color: darkGrey,
      fontFamily: 'Montserrat-Regular',
      textAlign: 'center',
    },
    confirmHead: {
      fontSize: 16,
      color: darkGrey,
      textAlign: 'center',
      marginBottom: 9,
    },
    confirmInput: {
      fontSize: 16,
      color: blue,
      textAlign: 'center',
      marginBottom: 9,
    },
    hamburger: {
      width: 23,
      height: 16,
      left: 14,
    },
    disabled: {
      color: lightGrey,
    },
    howLongView: {
      justifyContent: 'center',
      flex: 1,
      flexDirection: 'row',
      paddingTop: 25,
    },

  progress: {
    marginTop:0,
    marginBottom: 24,
  },
  footerText: {
    fontFamily: 'Montserrat-Light',
    fontSize: 14,
    color: '#4A4A4A',
    textAlign:'center',
  },
  checkboxStyle: {
        width: 26,
        height: 26,
        borderWidth: 2,
        borderColor: '#ddd',
        borderRadius: 5
    },
    statusbarActive: {
      height:6,
      width: 93.75,
      backgroundColor: '#3498DB',
    },
    statusbarGrey: {
      height:6,
      width: 93.75,
      backgroundColor: '#C0C0C0',
    },
    statusBar: {
      height: 0,
      flex: 1,
      flexDirection:'row',
    //   alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 0,
      marginTop: 15,
      marginBottom: 0,
    },
    statusBarNode: {
      width: 45,
      height: 45,
      alignItems: 'center',
    },
    avatarContainer: {
      backgroundColor: '#f5f5f5',
      justifyContent: 'center',
      alignItems: 'center',
      height: 170,
    },
    avatar: {
      borderRadius: 60,
      width: 120,
      height: 120
    },
    menuImg: {
      width: 56,
      height: 56,
      borderRadius: 28,
      alignSelf: 'center'
    },
    menuButton: {
      width:56,
      height:56,
    },
    menuText: {
      fontFamily: 'Montserrat-Light',
      fontSize: 12,
      color: 'white',
      textAlign: 'center',
      marginTop: 5,
    },
    profileText: {
      fontFamily: 'Montserrat-Light',
      fontSize: 18,
      color: darkGrey,
    },
    historyHead: {
      fontSize: 21,
      color: darkGrey,
      fontFamily: 'Montserrat-Regular'
    },
    historyText: {
      fontSize: 21,
      color: darkGrey,
      fontFamily: 'Montserrat-Light'
    },
    historyView: {
      marginLeft: 12,
      marginRight: 12,
      borderLeftColor: '#3FAAE2',
      borderLeftWidth: 4,
      height: 124,
      backgroundColor: 'white',
      marginTop:21,
      paddingLeft: 10,
      paddingRight: 10,
    },
    cInput: {
      height: 20,
      alignSelf: 'stretch',
      marginLeft: 5,
      marginRight: 5,
      marginTop: -10,
      marginBottom: 5,
      textAlign: 'center',
      fontSize: 16,
      color: blue
    },
    nearbyHeading: {
      fontFamily:'Montserrat-Regular',
      color: '#4a4a4a',
      fontSize:24,
      textAlign:'center'
    },
});
