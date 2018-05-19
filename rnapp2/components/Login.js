import React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableHighlight,
  Image, ImageBackground
} from 'react-native';

// const Main = () => (
class Login extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>Login Component</Text>
      </View>
    );
  }
}


// )

export default Login

const styles = StyleSheet.create({
    mainContainer: {
    // flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderWidth: 2,
    borderColor: 'steelblue',
    borderRadius: 20
  }
});
