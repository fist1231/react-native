import React from 'react'
// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json
import Main from '../components/Main';
import UsersTable from '../components/users/UsersTable';
import About from '../components/About';
import Login from '../components/Login';

const TabNav = TabNavigator(
  {
    Home: Main,
    Users: UsersTable,
    About: About,
    Login: Login,
  }
  // ,{
  //   navigationOptions: ({ navigation }) => ({
  //     tabBarIcon: ({ focused, tintColor }) => {
  //       const { routeName } = navigation.state;
  //       let iconName;
  //       if (routeName === 'Home') {
  //         iconName = `ios-information-circle${focused ? '' : '-outline'}`;
  //       } else if (routeName === 'Users') {
  //         iconName = `ios-options${focused ? '' : '-outline'}`;
  //       } else if (routeName === 'Avout') {
  //         iconName = `ios-options${focused ? '' : '-outline'}`;
  //       } else if (routeName === 'Login') {
  //         iconName = `ios-options${focused ? '' : '-outline'}`;
  //       }
  //
  //       // You can return any component that you like here! We usually use an
  //       // icon component from react-native-vector-icons
  //       return <Ionicons name={iconName} size={25} color={tintColor} />;
  //     },
  //   }),
  //   tabBarOptions: {
  //     activeTintColor: 'tomato',
  //     inactiveTintColor: 'gray',
  //   },
  // }
);

export default TabNav
