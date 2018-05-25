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
<View style={headerStyles.container}>
      <View style={headerStyles.innerContainer}>
        {/* <ImageBackground source={require('../images/nasa-logo.svg')} style={headerStyles.backgroundImage}> */}
          <Image
            style={headerStyles.image}
            source={require('../img/logo.png')}
          />
          <View style={headerStyles.container}>
            <TouchableHighlight onPress={() => Linking.openURL('http://google.com')}>
              <Text style={headerStyles.hdr}>NSPIRES</Text>
            </TouchableHighlight>
          </View>
        {/* </ImageBackground> */}
      </View>

      {/* <View>
        <Text>Help</Text>
      </View> */}

</View>

)

export default Header
