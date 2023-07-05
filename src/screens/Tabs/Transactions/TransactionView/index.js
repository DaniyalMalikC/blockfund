import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Platform,
} from 'react-native';
import React, {useContext, useRef} from 'react';
import {H4, H2, H1, Para, H5, H3} from '../../../../components/Text';
import {IconBtn} from '../../../../components/Buttons';
import {BG2} from '../../../../components/Backgrounds';
import {height, width} from '../../../../util/globalStyles';
import storage from '@react-native-firebase/storage';

// Assets
import gold from '../../../../assets/nft-design/gold.png';
import silver from '../../../../assets/nft-design/silver.png';
import bronze from '../../../../assets/nft-design/bronze.png';
import {AuthContext} from '../../../../context/AuthContext';
import {useRoute} from '@react-navigation/native';
import {
  MetaMaskAction,
  MetaMaskContext,
} from '../../../../context/MetaMaskContext';
import {
  Web3Button,
  useAddress,
  useContract,
  useMintNFT,
  useStorageUpload,
} from '@thirdweb-dev/react-native';
import ViewShot from 'react-native-view-shot';
import {IPFSFileUpload} from '../../../../constant';

const TransactionView = () => {
  const {user} = useContext(AuthContext);
  const {NFTContractAddress} = useContext(MetaMaskContext);
  const {updateClaimedTransection} = useContext(MetaMaskAction);

  const snapRef = useRef();

  const route = useRoute();
  const {data} = route.params;
  const id = data.transactionId.slice(3, 9);

  const bg =
    data?.amount <= '0.0001' ? bronze : data?.amount <= '0.015' ? silver : gold;
  const receiptType =
    data?.amount <= '0.0001'
      ? 'bronze'
      : data?.amount <= '0.015'
      ? 'silver'
      : 'gold';

  const {mutateAsync: upload} = useStorageUpload();

  const address = useAddress();

  // const {contract} = useContract(NFTContractAddress);
  // const {mutateAsync: mintNft, isLoading, error} = useMintNFT(contract);

  const handleClaimNFT = async contract => {
    await snapRef.current.capture().then(async uri => {
      console.log('do something with ', uri);

      // const imageURI = await IPFSFileUpload(uri);

      // imageURI
      //   .then(res => {
      //     console.log('res ', res);
      //   })
      //   .catch(err => {
      //     console.error('err ', err);
      //   });

      // console.log('imageURI ', imageURI);
      const uploadUri =
        Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
      await storage().ref(`NFT/BlockFund-${id}`).putFile(uploadUri);

      const metadata = 'ipfs://Qmb6taWrn1JWHu1gfXg31gv1z21HydSr43CzhkCe7E3sbL';
      // await IPFSFileUpload(
      //   uri,
      //   data?.amount,
      //   data?.recepient,
      //   user?.name,
      // );
      // metadata
      //   .then(res => {
      //     console.log('res ', res);
      //   })
      //   .catch(err => {
      //     console.error('err ', err);
      //   });

      // console.log('metadata ', metadata);

      contract.call('mintNFT', [address, metadata]);
      updateClaimedTransection(data.transactionId, data);

      // mintNft({
      //   image:
      //     ,
      //   to: address, // Use useAddress hook to get current wallet address
      // });

      // console.log(isLoading, error);
    });
  };

  return (
    <BG2 title="Transaction Detail">
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.reciptContainer}>
            <H4 text="You had Created a Transection" />
            <H5 text="Your Transaction ID:" />
            <H2 text={'BlockFund-' + id} />
          </View>
          <View style={styles.transectionTime}>
            <IconBtn icon="circle" style={{marginRight: 10}} />
            <View>
              <H4 text="Transaction Created At:" />
              <H2 text={data.createdAt} />
            </View>
          </View>
          <View style={styles.transectionTime}>
            <IconBtn icon="circle" style={{marginRight: 10}} />
            <View>
              <H4 text="Approved by BlockFund on:" />
              <H2 text={data.approvedAt} />
            </View>
          </View>
          <View style={styles.transectionTime}>
            <IconBtn icon="circle" style={{marginRight: 10}} />
            <View>
              <H4 text="Transected to :" />
              <H2 text={data.completedAt} />
            </View>
          </View>
          {data.approvedAt !== 'Pending' && (
            <View style={styles.reciptContainer}>
              <H2 text="Transaction Created Successfully" />
              <H1 text={data?.claimed ? 'Claimed NFT:' : 'Claim NFT:'} />
              {!data?.claimed && (
                <Web3Button
                  contractAddress={NFTContractAddress}
                  action={contract => handleClaimNFT(contract)}>
                  Claim NFT
                </Web3Button>
              )}
              <ViewShot
                ref={snapRef}
                options={{
                  fileName: 'BlockFund-' + id,
                  format: 'jpg',
                  quality: 0.9,
                }}>
                <ImageBackground source={bg} style={styles.recipt}>
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
                  <Para text={'Category: ' + receiptType} />

                  <View style={styles.reciptFooter}>
                    <IconBtn icon="ethereum" size={50} />
                    <View>
                      <H2 text={'ETH: ' + data.amount} />
                      {data.ethRate && data.dollarRate && (
                        <H4
                          text={
                            'PKR Ex: ' +
                            (
                              data.amount *
                              data?.ethRate *
                              data?.dollarRate
                            ).toFixed(3)
                          }
                        />
                      )}
                      {/* <H4 text="NFT Ref ID# " /> */}
                    </View>
                  </View>
                </ImageBackground>
              </ViewShot>
            </View>
          )}
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
