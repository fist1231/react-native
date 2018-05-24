import React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableHighlight,
  Image, ImageBackground,
  FlatList
} from 'react-native';

import config from '../config/config.json'
import axios from 'axios';
import Header from '../components/header'

// const Main = () => (
class About extends React.Component {

  static navigationOptions = {
    headerTitle: <Header />,
  };

  constructor(props) {
    super(props);
    this.state = {helpIts: []};
    this.helpItems = this.helpItems.bind(this);
  }

  componentWillMount() {
    this.helpItems();
  }

  helpItems = () => {
    axios
      .get(`${config.help_address}help/reviews`)
      .then(response => {
        // console.log('********** ReviewProposalsHelpSrv: users help result:' + JSON.stringify(response.data.items));
        // response.json(response.data);
        this.setState({helpIts: response.data.items});
        // response.data.items;
      })
      .catch(error => {
        // console.log('********** ReviewProposalsHelpSrv: users help error:' + error);
      });
  }



  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h3}>Review Help</Text>
        {/* <FlatList
          data={this.state.helpIts}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        /> */}

          { !this.state.helpIts ? 'loading ...'
            :
            <FlatList
              data={this.state.helpIts}
              renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
              keyExtractor={(item,index) => index+'_a'}
            />
          }

      </View>
    );
  }
}


// )

export default About

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
  },
  h3: {fontWeight: 'bold', paddingBottom: 20}
});
