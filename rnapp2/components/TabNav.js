import React from 'react'
// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
// import Ionicons from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json
import Main from '../components/Main';
import UsersTable from '../components/users/UsersTable';
import About from '../components/About';
import Login from '../components/Login';

const T1Stack = StackNavigator({
  Main: { screen: Main },
  UsersTable: { screen: UsersTable },
});

const T2Stack = StackNavigator({
  About: { screen: About },
  Login: { screen: Login },
});

const TabNav = TabNavigator(
  {
    Login: Login,
    Home: Main,
    Users: UsersTable,
    About: About,
    // X1: T1Stack,
    // X2: T2Stack,
  }
  ,{
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Users') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        } else if (routeName === 'Avout') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        } else if (routeName === 'Login') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

export default TabNav
