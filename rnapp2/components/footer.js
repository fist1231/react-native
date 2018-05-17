import React from 'react'

import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

/*import footerImg from '../../public/footer.jpg'*/
// import './footer.css'

/*const styles = {
        backgroundImage: 'url(' + footerImg + ')',
        height: '220px',
        marginTop: '6px',
        marginBottom: '6px',
        resizeMode: 'repeat',
}*/


const Footer = () => (
    <View className="footer">
      <View className="container-fluid footerContainer">
      <View className="row footerContent">
        <View className="col-9">
          <View className="nasaFooterLogo">
            <Text></Text>
          </View>

          <FlatList
            data={[
              {key: 'Curator: NASA Research and Education Support Services'},
              {key: 'NASA Official: Name Goes Here'},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          />
        </View>
        <View className="col-3">
          <View className="nspiresLogo">
           </View>
        </View>
        </View>
        <View className="row">
          <View className="col">
            <FlatList
              data={[
                {key: 'NASA Web Privacy Policy and Important Notices'},
                {key: 'NASA Research'},
                {key: 'Contact Us'},
                {key: 'Help'},
                {key: 'Download Adobe Reader'},
              ]}
              renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
          </View>
        </View>
      </View>
    </View>
)

export default Footer
