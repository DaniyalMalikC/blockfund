import {View, Text, StyleSheet} from 'react-native';
import React, {useContext, useState} from 'react';
import {BG2} from '../../../components/Backgrounds';
import {MetaMaskAction} from '../../../context/MetaMaskContext';
import {height, width} from '../../../util/globalStyles';
import {TextInput} from '../../../components/InputField';
import {ImgBtn} from '../../../components/Buttons';

const Ticket = () => {
  const [subject, setSubject] = useState('');
  const [desc, setDesc] = useState('');
  const {addTicket} = useContext(MetaMaskAction);
  const handleTicket = () => {
    if (subject === '' || desc === '') {
      return alert('Please fill all inputs!');
    }
    addTicket();
  };
  return (
    <BG2 title="Ticket">
      <View style={styles.container}>
        <TextInput
          placeholder="Subject"
          value={subject}
          onChangeText={setSubject}
        />

        <TextInput
          placeholder="Ticket Addressing"
          value={desc}
          onChangeText={setDesc}
          multiline={true}
          numberOfLines={12}
        />
        <View style={{marginVertical: 20}}>
          <ImgBtn
            label="Submit Ticket"
            onPress={handleTicket}
            width={width - 100}
          />
        </View>
      </View>
    </BG2>
  );
};

export default Ticket;

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
