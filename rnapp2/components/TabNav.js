// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json
import Main from '../components/Main';

export const Tabs = TabNavigator({
    Home: {
      screen: Main,
    },
  }
  // ,{
  //   navigationOptions: ({ navigation }) => ({
  //     tabBarIcon: ({ focused, tintColor }) => {
  //       const { routeName } = navigation.state;
  //       let iconName;
  //       if (routeName === 'Home') {
  //         iconName = `ios-information-circle${focused ? '' : '-outline'}`;
  //       } else if (routeName === 'Settings') {
  //         iconName = `ios-options${focused ? '' : '-outline'}`;
  //       }
  //
  //       // You can return any component that you like here! We usually use an
  //       // icon component from react-native-vector-icons
  //       return <Ionicons name={iconName} size={25} color={tintColor} />;
  //     },
  //   }),
  //   tabBarComponent: TabBarBottom,
  //   tabBarPosition: 'bottom',
  //   tabBarOptions: {
  //     activeTintColor: 'tomato',
  //     inactiveTintColor: 'gray',
  //   },
  //   animationEnabled: false,
  //   swipeEnabled: false,
  // }
);

// export default TsaNav
