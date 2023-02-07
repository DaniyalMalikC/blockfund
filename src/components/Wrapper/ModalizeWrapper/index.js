import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {TransactionModalize, EditProfileModalize} from '../../Modalize';
import {ModalizeContext} from '../../../context/ModalizeContext';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {Host, Portal} from 'react-native-portalize';

const ModalizeWrapper = ({children}) => {
  const {modalizeTransaction, modalizeEditProfile} =
    useContext(ModalizeContext);

  const onTransactionClose = () => {
    modalizeTransaction.current?.close();
  };

  const onEditProfileClose = () => {
    modalizeEditProfile.current?.close();
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Host>
        {children}

        <Portal>
          <EditProfileModalize
            ref={modalizeEditProfile}
            onClose={onEditProfileClose}
          />
          <TransactionModalize
            ref={modalizeTransaction}
            onClose={onTransactionClose}
          />
        </Portal>
      </Host>
    </GestureHandlerRootView>
  );
};

export default ModalizeWrapper;
