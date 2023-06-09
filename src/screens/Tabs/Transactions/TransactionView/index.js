import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React, {useContext} from 'react';
import {H4, H2, H1, Para} from '../../../../components/Text';
import {IconBtn} from '../../../../components/Buttons';
import {BG2} from '../../../../components/Backgrounds';
import {height, width} from '../../../../util/globalStyles';

// Assets
import gold from '../../../../assets/nft-design/gold.png';
import silver from '../../../../assets/nft-design/silver.png';
import bronze from '../../../../assets/nft-design/bronze.png';
import {AuthContext} from '../../../../context/AuthContext';
import {useRoute} from '@react-navigation/native';

const TransactionView = () => {
  const {user} = useContext(AuthContext);
  const route = useRoute();
  const {data} = route.params;
  const id = data.transactionId.split(0, 9);
  return (
    <BG2 title="Transaction Detail">
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.reciptContainer}>
            <H4 text="You had Created a Transection" />
            <H2 text={'Your Transaction ID: \n' + id} />
          </View>
          <View style={styles.transectionTime}>
            <IconBtn icon="circle" style={{marginRight: 10}} />
            <View>
              <H4 text="Transaction Created At:" />
              <H2 text={'Your Transaction ID: ' + data.createdAt} />
            </View>
          </View>
          <View style={styles.transectionTime}>
            <IconBtn icon="circle" style={{marginRight: 10}} />
            <View>
              <H4 text="Approved by BlockFund on:" />
              <H2 text={'Your Transaction ID: ' + data.approvedAt} />
            </View>
          </View>
          <View style={styles.transectionTime}>
            <IconBtn icon="circle" style={{marginRight: 10}} />
            <View>
              <H4 text="Transected to :" />
              <H2 text={'Your Transaction ID: ' + data.completedAt} />
            </View>
          </View>
          <View style={styles.reciptContainer}>
            <H2 text="Transaction Created Successfully" />
            <H1 text="NFT Recipt:" />
            <ImageBackground source={gold} style={styles.recipt}>
              <View style={styles.reciptBody}>
                <View>
                  <H4 text="Our Valuable Fund Raiser:" />
                  <H2 text={user.name} />
                </View>
                <View>
                  <H4 text="Funded to:" />
                  <H2 text={data.recipient} />
                </View>
              </View>

              <Para text={'Date: ' + data.completedAt} />
              <Para text={'Category: ' + gold} />

              <View style={styles.reciptFooter}>
                <IconBtn icon="ethereum" size={50} />
                <View>
                  <H2 text={'ETH: ' + data.amount} />
                  <H4 text="NFT Ref ID# " />
                </View>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
      </View>
    </BG2>
  );
};

export default TransactionView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height - 100,
    paddingHorizontal: 20,
    paddingBottom: 50,
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
