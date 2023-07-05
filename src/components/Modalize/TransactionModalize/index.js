import {View, Text, StyleSheet} from 'react-native';
import React, {forwardRef, useRef, useState, useContext} from 'react';

// Component
import {Modalize} from 'react-native-modalize';
import {TextInput} from '../../InputField';
import {H2} from '../../Text';
import {ImgBtn, SocialBtn} from '../../Buttons';
import {ReceiverModal} from '../../Modal';
import {AuthContext} from '../../../context/AuthContext';
import {
  MetaMaskAction,
  MetaMaskContext,
} from '../../../context/MetaMaskContext';
import {Web3Button, useAddress, useContract} from '@thirdweb-dev/react-native';
import {ethers} from 'ethers';

const TransactionModalize = ({onClose}, ref) => {
  const {receivers, user} = useContext(AuthContext);
  const {contractAddress} = useContext(MetaMaskContext);
  const {addTransaction} = useContext(MetaMaskAction);
  const [amount, setAmount] = useState('');
  const [desc, setDesc] = useState('');

  const address = useAddress();

  const handleNext = contract => {
    if (desc === '' || amount === '') {
      return alert('Fill in inputs for transaction!');
    }
    const recepient = desc;
    const name = user.name;

    contract.call('createDonation', [recepient, name], {
      value: ethers.utils.parseEther(amount.toString()),
    });

    addTransaction({recepient: desc, amount: amount});
  };

  const handleReset = () => {
    setAmount('');
    setDesc('');
    onClose();
  };

  // console.log(receivers);

  return (
    <Modalize
      adjustToContentHeight
      modalStyle={{borderTopLeftRadius: 30, borderTopRightRadius: 30}}
      ref={ref}>
      <View>
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <H2 text="Create Transaction" />
            {/* <IconBtn icon="close" onPress={() => onClose()} /> */}
          </View>

          <TextInput
            placeholder="Amount"
            value={amount}
            onChangeText={setAmount}
            leftIcon="ethereum"
            rightIcon="currency-eth"
            keyboardType="numeric"
            maxLength={6}
          />

          <TextInput
            placeholder="Receiver Address"
            value={desc}
            onChangeText={setDesc}
            leftIcon="wallet-outline"
            disabled
          />
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {receivers?.map(data => (
              <SocialBtn
                img={data.avatar}
                label={data.name}
                onPress={() => setDesc(data.name)}
              />
            ))}
          </View>
          <View
            style={{
              marginVertical: 10,
              borderWidth: 1,
              borderRadius: 5,
              width: '50%',
              alignSelf: 'center',
            }}>
            {address ? (
              <Web3Button
                contractAddress={contractAddress}
                action={contract => handleNext(contract)}
                // action={contract => {
                //   const recepient = desc;
                //   const name = user.name;

                //   contract.call('createDonation', [recepient, name], {
                //     value: ethers.utils.parseEther(amount.toString()),
                //   });
                // }}
                onSuccess={() => handleReset()}>
                {'Transect'}
              </Web3Button>
            ) : (
              <Text>Please Connect Wallet</Text>
            )}
            {/* <ImgBtn label="Transect" width="50%" onPress={handleNext} /> */}
          </View>
        </View>
      </View>
    </Modalize>
  );
};

export default forwardRef(TransactionModalize);

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  innerContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  typeContainer: {
    marginTop: 30,
  },
});
