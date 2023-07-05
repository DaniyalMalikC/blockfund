import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {BG2} from '../../../components/Backgrounds';
import {Searchbar} from 'react-native-paper';
import {height, width} from '../../../util/globalStyles';
import {ListItem} from '../../../components/List';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {useContext} from 'react';
import {MetaMaskContext} from '../../../context/MetaMaskContext';

const Transactions = () => {
  const {transactions} = useContext(MetaMaskContext);
  const navigation = useNavigation();
  // const [search, setSearch] = useState('');
  const handleNavigation = data => {
    navigation.navigate('TransactionsView', {data: data});
  };
  console.log('transactions => ', transactions);
  return (
    <BG2 title="Transactions">
      <View style={styles.container}>
        {/* <Searchbar value={search} onChangeText={setSearch} /> */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.list}>
            {transactions.length > 0 &&
              transactions?.map((data, index) => {
                return (
                  <ListItem
                    key={data.transactionId}
                    icon="ethereum"
                    title={'Eth: ' + data.amount}
                    desc={'transacted to ' + data.recipient}
                    onPress={() => handleNavigation(data)}
                  />
                );
              })}
          </View>
        </ScrollView>
      </View>
    </BG2>
  );
};

export default Transactions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height - 100,
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  list: {
    marginVertical: 10,
  },
  transectionTime: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  reciptContainer: {
    marginVertical: 20,
  },
  recipt: {
    marginTop: 10,
    padding: 20,
    width: width / 1.125,
    height: width / 1.125,
  },
  reciptBody: {
    height: width / 2.25,
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  reciptFooter: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignSelf: 'flex-end',
    alignItems: 'center',
    height: width / 3,
  },
});
