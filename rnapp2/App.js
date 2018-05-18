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
import { Tabs } from './components/TabNav';

import { createBottomTabNavigator } from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
class App extends Component<Props> {
  render() {
    return (

      <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Header />
          </View>

          {/* <TabNav /> */}

          <View style={styles.mainContainer}>
            <Main />
          </View>
          {/* <MainNav /> */}
          <View style={styles.footerContainer}>
            <Footer />
          </View>
        {/* <ModalRoot /> */}

        <View>
          <Tabs />
        </View>

      </View>

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

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    // height: '100%'
  },
  mainContainer: {
    width: '90%',
    // height: '80%',
    backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderWidth: 2,
    borderColor: 'steelblue',
    borderRadius: 20
  },
  headerContainer: {
    width: '100%',
    height: 50,
    backgroundColor: 'powderblue',
    justifyContent: 'space-evenly'
  },
  footerContainer: {
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

export default App;

// export default createBottomTabNavigator({
//   Home: Main,
//   Settings: Main,
// });
