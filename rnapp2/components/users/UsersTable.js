import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';
import { usersMock } from '../../config/MockData.js'
import Header from '../../components/header'

// const Main = () => (
class UsersTable extends React.Component {

  static navigationOptions = {
    headerTitle: <Header />,
  };

  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Username', 'First', 'Last', 'Registered on'],
      // widthArr: [40, 60, 80, 100],
      tableData: usersMock(),
    }
  }


  componentDidMount() {
    // console.log('------------ isLoading? ' + this.props.isLoading);
    // this.props.isLoading?null:this.setState({proposals: this.props.value});
    // const tableData = [];
  // const tableData = usersMock();
    // for (let i = 0; i < 30; i += 1) {
    //   const rowData = [];
    //   for (let j = 0; j < 9; j += 1) {
    //     rowData.push(`${i}${j}`);
    //   }
    //   tableData.push(rowData);


  // this.setState({tableData: tableData});
    // }
  }

  render() {

    // const state = this.state;

    // const tableData = [];
    // for (let i = 0; i < 30; i += 1) {
    //   const rowData = [];
    //   for (let j = 0; j < 9; j += 1) {
    //     rowData.push(`${i}${j}`);
    //   }
    //   tableData.push(rowData);
    // }

    return (
        <View style={styles.container}>
          {/* <ScrollView horizontal={true}> */}
            <View>
              <Table borderStyle={{borderColor: '#C1C0B9'}}>
                <Row data={this.state.tableHead} widthArr={this.state.widthArr} style={styles.header} textStyle={styles.text}/>
              </Table>
              <ScrollView style={styles.dataWrapper}>
                <Table borderStyle={{borderColor: '#C1C0B9'}}>
                  {
                    this.state.tableData.map((rowData, index) => (
                      <Row
                        key={index}
                        data={[rowData.USERNAME, rowData.FIRST_NAME, rowData.LAST_NAME, rowData.REGISTRATION_DATE]}
                        // widthArr={this.state.widthArr}
                        style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                        textStyle={styles.text}
                      />
                    ))
                  }
                </Table>
              </ScrollView>
            </View>
          {/* </ScrollView> */}
        </View>
    );
  }
}


// )

export default UsersTable


const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#C5F7F1' },
    header: { height: 50, backgroundColor: '#537791' },
    text: { textAlign: 'center', fontWeight: '100' },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, backgroundColor: '#E7E6E1' },
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
