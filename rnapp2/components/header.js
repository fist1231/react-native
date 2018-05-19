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

import headerStyles from './headerStyle'

// import ico from '../../public/favicon.ico'
// import {TabMenu} from 'primereact/components/tabmenu/TabMenu';
// import {Menubar} from 'primereact/components/menubar/Menubar';
// import {InputText} from 'primereact/components/inputtext/InputText';
// import {Button} from 'primereact/components/button/Button';
// import Login from '../Login'

const items=[
            {label: 'Accounts', icon: 'fal fa-user'},
            {label: 'Organization', icon: 'fas fa-building'},
            {label: 'Proposals/NOI', icon: 'fal fa-table'},
            {label: 'Reviews', icon: 'fas fa-eye'},
            {label: 'Selections', icon: 'fas fa-check'}
        ];

const Header = () => (
<View style={styles.container}>
      <View>
        <ImageBackground source={require('../images/nasa-logo.svg')} style={headerStyles.backgroundImage}>
          <TouchableHighlight onPress={() => Linking.openURL('http://google.com')}>
            <Text className="navbar-brand">NRESS Refresh</Text>
          </TouchableHighlight>
        </ImageBackground>
      </View>
      {/* <View>
        <Text>Help</Text>
      </View> */}
      <Image
        style={styles.image}
        source={{uri: '../images/nasaLogo.png'}}
      />

</View>

)

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 2,
   flexDirection: 'row',
   justifyContent: 'space-evenly'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  image: {
    width: 30,
    height: 30,
  },
})


export default Header
