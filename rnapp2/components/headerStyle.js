import React from 'react'

import {
  StyleSheet,
} from 'react-native';


export default StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  nspiresHeader: {
    backgroundColor: '#2d5a96',
    padding: '.15rem 1rem',
    paddingBottom: 0
  },
  navbarBrand: {
    // background: 'url(../images/nspiresLogo.png) no-repeat transparent',
    width: '520px',
    height: '50px',
    paddingTop: 0,
    marginTop: '6px'
  },
  nasaLogo: {
    width: '60px',
    height: '50px',
    // background: 'url(../images/nasa-logo.svg) no-repeat transparent',
    // backgroundSize: 'auto auto',
    // backgroundSize: '60px 50px',
    marginTop: '6px'
  },
  loginContainer : {
    marginTop: '13px'
  }

});
