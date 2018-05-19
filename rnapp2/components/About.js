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
class About extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>About Component</Text>
      </View>
    );
  }
}


// )

export default About

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
