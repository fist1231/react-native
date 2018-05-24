import React from 'react'
// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import Ionicons from 'react-native-vector-icons/Ionicons';
// import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json
import Login from '../components/Login';
import Main from '../components/Main';
import UsersTable from '../components/users/UsersTable';
import SolicitationsTable from '../components/solicitations/SolicitationsTable';
import ReviewProposalsTable from '../components/reviews/ReviewProposalsTable';
import About from '../components/About';
import Header from '../components/header';

import { Button } from 'react-native';

// import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json


const LoginStack = StackNavigator({
  Login: { screen: Login },
});


const HomeStack = StackNavigator({
  Main: { screen: Main },
});

const UsersTableStack = StackNavigator({
  UsersTable: { screen: UsersTable },
});

const SolicitationsStack = StackNavigator({
  SolicitationsTable: { screen: SolicitationsTable },
});

const ReviewsStack = StackNavigator({
  ReviewProposalsTable: { screen: ReviewProposalsTable },
  title: 'Header title'
});

const AboutStack = StackNavigator({
  About: { screen: About },
});

export default TabNavigator(
  {
    Login: { screen: LoginStack },
    Solicitations: { screen: SolicitationsStack },
    ReviewProposals: {
      screen: ReviewsStack,
      navigationOptions: ({ navigation }) => ({
        title: 'Proposals',
      }),
    },
    Users: { screen: UsersTableStack },
    About: { screen: AboutStack },
  },
  {
    headerMode: 'float',
    // header: <Header />,
    mode: 'modal',
    headerTitle: <Header />,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Login') {
          iconName = `ios-lock${focused ? '' : '-outline'}`;
        } else if (routeName === 'Solicitations') {
          iconName = `ios-filing${focused ? '' : '-outline'}`;
        } else if (routeName === 'ReviewProposals') {
          iconName = `ios-list${focused ? '' : '-outline'}`;
        } else if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Users') {
          iconName = `ios-people${focused ? '' : '-outline'}`;
        } else if (routeName === 'About') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-cog${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
      headerTitle: 'lOG Title here',
      // title: 'a title',
      headerRight: (
        <Button
          onPress={() => alert('This is a button!')}
          title="Info"
          color="#fff"
        />
      ),

    }),
    style: {
        backgroundColor: 'blue',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#1E1EF1',
      inactiveTintColor: 'gray',
      activeBackgroundColor: '#33CAFF',
      inactiveBackgroundColor: '#9CE4FD',
    },
    animationEnabled: true,
    swipeEnabled: true,
    // header: {
    //   visible: true,
    // },

  }
);
