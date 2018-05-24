import React, { Component } from 'react';
import { Text, View } from 'react-native';

import BottomTabNav from './components/BottomTabNav';

// import UsersTable from './components/users/UsersTable';
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])

// import { createBottomTabNavigator } from 'react-navigation';

class App extends Component {
  render() {
    // return (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><BottomTabNav /></View>);
  }
}

export default BottomTabNav;
