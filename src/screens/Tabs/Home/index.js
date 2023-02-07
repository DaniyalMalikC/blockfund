import {View, Text, ScrollView} from 'react-native';
import React, {useContext, useState} from 'react';
import {BG2} from '../../../components/Backgrounds';
import {PaperBtn} from '../../../components/Buttons';
import {H1, H3, Para} from '../../../components/Text';
import {height} from '../../../util/globalStyles';
import {AuthContext} from '../../../context/AuthContext';

const Home = () => {
  const {user} = useContext(AuthContext);
  const [connect, setConnect] = useState(false);

  const handleMetaMaskConnection = () => {
    alert('connecting...');
    setTimeout(() => {
      setConnect(true);
    }, 3000);
  };
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
                height: 150,
                justifyContent: 'space-between',
              }}>
              <H1 text={'Hi ' + (user.name || 'User')} />
              <H3 text="Welcome to Block Fund!" />
              <Para text="Before proceeding please connect to a MetaMask wallet in order to create transactions." />
            </View>
            <View style={{marginVertical: 20}}>
              <PaperBtn
                label={connect ? 'Connected!' : 'Connect to MetaMask'}
                mode="contained"
                height={50}
                disabled={connect}
                onPress={handleMetaMaskConnection}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </BG2>
  );
};

export default Home;
