import React from 'react'
// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import Ionicons from 'react-native-vector-icons/Ionicons';
// import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json
import Login from '../components/Login';
import Main from '../components/Main';
import UsersTable from '../components/users/UsersTable';
import About from '../components/About';
// import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json

const LoginStack = StackNavigator({
  Login: { screen: Login },
  // Main: { screen: Main },
  // UsersTable: { screen: UsersTable },
  // About: { screen: About },
});


const HomeStack = StackNavigator({
  Main: { screen: Main },
  // Login: { screen: Login },
  // UsersTable: { screen: UsersTable },
  // About: { screen: About },
});

const UsersTableStack = StackNavigator({
  UsersTable: { screen: UsersTable },
  // Login: { screen: Login },
  // Main: { screen: Main },
  // About: { screen: About },
});

const AboutStack = StackNavigator({
  About: { screen: About },
  // Login: { screen: Login },
  // Main: { screen: Main },
  // UsersTable: { screen: UsersTable },
});

export default TabNavigator(
  {
    Login: { screen: LoginStack },
    Home: { screen: HomeStack },
    Users: { screen: UsersTableStack },
    About: { screen: AboutStack },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Login') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Home') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        } else if (routeName === 'Users') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        } else if (routeName === 'About') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: true,
    swipeEnabled: true,
  }
);
