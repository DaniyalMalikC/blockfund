import {View, Text, StyleSheet} from 'react-native';
import React, {forwardRef, useRef, useState} from 'react';

// Component
import {Modalize} from 'react-native-modalize';
import {TextInput} from '../../InputField';
import {H2} from '../../Text';
import {ImgBtn} from '../../Buttons';

const TransactionModalize = ({onClose}, ref) => {
  const [amount, setAmount] = useState('');
  const [desc, setDesc] = useState('');

  const handleNext = () => {
    handleReset();
    onClose();
  };

  const handleReset = () => {
    setAmount('');
    setDesc('');
  };

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
          />

          <TextInput
            placeholder="Receiver Address"
            value={desc}
            onChangeText={setDesc}
            leftIcon="wallet-outline"
          />

          <View style={{marginVertical: 10}}>
            <ImgBtn label="Transect" width="50%" onPress={handleNext} />
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
