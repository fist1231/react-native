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
import Header from '../components/header'


// const Main = () => (
class Login extends React.Component {

  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: <Header />,
  };

  render() {
    return (
      <View style={styles.container}>
        <LoginForm navProp={ this.props.navigation } />
      </View>
    );
  }
}


// )

export default Login

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#C5F7F1' },
});
