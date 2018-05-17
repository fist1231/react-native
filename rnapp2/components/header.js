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
<View>
  <ImageBackground source={require('../images/nspiresLogo.png')} style={headerStyles.backgroundImage}>

      <View className="row">
        <View style={headerStyles.nspiresLogoContainer}>
          <TouchableHighlight onPress={() => Linking.openURL('http://google.com')}>
            <Text className="navbar-brand">Press here</Text>
          </TouchableHighlight>
        </View>
        <View className="col ">
          <View className="">
            <Text>Login here</Text>
            {/* <Login /> */}
          </View>
        </View>
        <View className="col col-auto">
          <View style={headerStyles.nasaLogo} />
        </View>
      </View>
  </ImageBackground>
</View>

)

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})


export default Header
