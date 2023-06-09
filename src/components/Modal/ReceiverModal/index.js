import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';

import {height} from '../../../util/globalStyles';
import {theme, colors} from '../../../util/theme';
import {Divider, Modal, Portal, Provider} from 'react-native-paper';
import {useContext} from 'react';
import {AuthContext} from '../../../context/AuthContext';
import {SocialBtn} from '../../Buttons';

const ReceiverModal = ({visible, setVisible}) => {
  const {receivers} = useContext(AuthContext);
  const handleClose = () => {
    if (setVisible) setVisible(false);
  };
  return (
    <Provider>
      <Portal>
        <Modal
          theme={theme}
          visible={visible}
          onDismiss={() => setVisible(!visible)}
          contentContainerStyle={styles.container}>
          {receivers?.length > 0 &&
            receivers?.map(data => {
              <SocialBtn img={data.avatar} label={data.name} />;
            })}
        </Modal>
      </Portal>
    </Provider>
  );
};

export default ReceiverModal;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // overflow: 'hidden',
    margin: 20,
    width: '80%',
    height: height / 1.5,
    backgroundColor: colors.light,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  headerContainer: {
    width: '100%',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  divider: {
    marginVertical: 20,
    width: '100%',
    borderWidth: 0.2,
  },
  paraStyle: {
    paddingHorizontal: 20,
  },
  fade: {
    width: '100%',
    height: 30,
    bottom: 0,
    position: 'absolute',
    backgroundColor: colors.light + '95',
  },
});
