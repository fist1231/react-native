import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';
import { reviewProposalsMock } from '../../config/MockData.js'
import Header from '../../components/header'

// const Main = () => (
class ReviewProposalsTable extends React.Component {

  static navigationOptions = {
    headerTitle: <Header />,
  };

  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Number', 'Panel', 'PI', 'Status', 'Grade'],
      // widthArr: [40, 60, 80, 100],
      tableData: reviewProposalsMock(),
    }
  }


  componentDidMount() {
    // const tableData = reviewProposalsMock();
    // this.setState({tableData: tableData});
  }

  render() {
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
                        data={[rowData.RESPONSE_NUMBER+''+rowData.RESPONSE_SEQ_NUMBER, rowData.ACRONYM, rowData.LAST_NAME, rowData.PSTATE, rowData.GRADE]}
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

export default ReviewProposalsTable


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
