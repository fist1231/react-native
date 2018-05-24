/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Header from './components/header';
import Footer from './components/footer';
import Main from './components/Main';
import TabNav from './components/TabNav';
import BottomTabNav from './components/BottomTabNav';

import UsersTable from './components/users/UsersTable';
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])

// import { createBottomTabNavigator } from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
class App extends Component<Props> {
  render() {
    return <View style={styles.container}><BottomTabNav /></View>;

      {/* <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Header />
          </View>
          <View style={styles.navContainer}>
            <BottomTabNav />
          </View>
          <View style={styles.footerContainer}>
            <Footer />
          </View>
      </View> */}

      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //     Welcome to React Native!
      //   </Text>
      //   <Text style={styles.instructions}>
      //     To get started, edit App.js
      //   </Text>
      //   <Text style={styles.instructions}>
      //     {instructions}
      //   </Text>
      // </View>

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#C5F7F1',
    height: '100%'
  },
  navContainer: {
    flex: 1,
    justifyContent: 'space-between',
    // alignItems: 'center',
    width: '100%',
    backgroundColor: '#F5FCFF',
    height: '20%'
  },
  mainContainer: {
    // flex: 1,
    width: '90%',
    height: '70%',
    backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderWidth: 2,
    borderColor: 'steelblue',
    borderRadius: 20
  },
  headerContainer: {
    // flex: 1,
    width: '100%',
    height: 50,
    backgroundColor: 'powderblue',
    justifyContent: 'space-evenly'
  },
  footerContainer: {
    // flex: 1,
    width: '100%',
    height: 50,
    backgroundColor: 'powderblue',
    // justifyContent: 'space-evenly'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// export default App;
export default BottomTabNav;

// export default createBottomTabNavigator({
//   Home: Main,
//   Settings: Main,
// });
