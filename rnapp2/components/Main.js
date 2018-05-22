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
class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Dashboard:</Text>
      </View>
    );
  }
}


// )

export default Main

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
