import {View, Text, ScrollView} from 'react-native';
import React, {useContext, useState} from 'react';
import {BG2} from '../../../components/Backgrounds';
import {PaperBtn} from '../../../components/Buttons';
import {H1, H3, H4, Para} from '../../../components/Text';
import {height} from '../../../util/globalStyles';
import {AuthContext} from '../../../context/AuthContext';
import {
  MetaMaskAction,
  MetaMaskContext,
} from '../../../context/MetaMaskContext';
import Loader from '../../../components/Loader';

const Home = () => {
  const {user} = useContext(AuthContext);
  const {ethAddress, connected} = useContext(MetaMaskContext);
  const {connect} = useContext(MetaMaskAction);
  const [loader, setLoader] = useState(false);

  const handleMetaMaskConnection = () => {
    setLoader(true);
    alert('connecting...');
    setTimeout(() => {
      setLoader(false);
    }, 10000);
    return connect();
  };

  console.log('loader => ', loader);
  return (
    <BG2 title="Home" withDrawer>
      <View
        style={{
          flex: 1,
          height: height - 100,
        }}>
        <ScrollView>
          <View
            style={{
              flex: 1,
              padding: 20,
            }}>
            <View
              style={{
                marginVertical: 10,
                height: 160,
                justifyContent: 'space-between',
              }}>
              <H1 text={'Hi ' + (user.name || 'User')} />
              <H3 text="Welcome to Block Fund!" />
              <Para text="Before proceeding please connect to a MetaMask wallet in order to create transactions." />
            </View>
            <View style={{marginVertical: 20}}>
              <PaperBtn
                label={connected ? 'Connected!' : 'Connect to MetaMask'}
                mode="contained"
                height={50}
                disabled={connected}
                onPress={handleMetaMaskConnection}
              />
            </View>
            {ethAddress && (
              <View
                style={{
                  marginVertical: 10,
                }}>
                <H4 text={'Meta Mask Address: ' + ethAddress} />
              </View>
            )}
          </View>
        </ScrollView>
      </View>
      {loader && <Loader />}
    </BG2>
  );
};

export default Home;
