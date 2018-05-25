import React from 'react'

import {
  StyleSheet,
} from 'react-native';


export default StyleSheet.create({
  backgroundImage: {
    // flex: 1,
    width: null,
    height: null,
    // resizeMode: 'cover'
  },
  // nspiresHeader: {
  //   backgroundColor: '#2d5a96',
  //   padding: '.15rem 1rem',
  //   paddingBottom: '0'
  // },
  // navbarBrand: {
  //   // background: 'url(../images/nspiresLogo.png) no-repeat transparent',
  //   width: '520em',
  //   height: '50em',
  //   paddingTop: '0',
  //   marginTop: '7rem'
  // },
  // nasaLogo: {
  //   width: '60em',
  //   height: '50em',
  //   // background: 'url(../images/nasa-logo.svg) no-repeat transparent',
  //   // backgroundSize: 'auto auto',
  //   // backgroundSize: '60px 50px',
  //   marginTop: '6rem'
  // },
  // loginContainer : {
  //   marginTop: '13rem'
  // },
  container: {
   flex: 1,
   // paddingTop: 16,
   // flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#44C7F5',
   height: 60,
  },
  innerContainer: {
   flex: 1,
   // paddingTop: 16,
   flexDirection: 'row',
   width: '100%',
   // justifyContent: 'center',
   alignItems: 'center',
   // backgroundColor: '#44C7F5',
   // height: '100%',
   padding: 10,
  },
  hdr: {
    color: '#F2F7F9',
    // fontWeight: 'bold',
    fontSize: 36,
    fontFamily: 'TimesSansSerif',
  },
  item: {
    padding: 10,
    fontSize: 18,
    // height: 44,
  },
  image: {
    width: 40,
    height: 40,
    alignSelf: 'flex-start',
  },

});
