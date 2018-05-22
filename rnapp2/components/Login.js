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

import LoginForm from '../components/forms/formik/LoginForm'


// const Main = () => (
class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginForm />
      </View>
    );
  }
}


// )

export default Login

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#C5F7F1' },
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
