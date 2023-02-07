import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';

// Components
import {Divider, Modal, Portal, Provider} from 'react-native-paper';
import {height} from '../../../util/globalStyles';
import {theme, colors} from '../../../util/theme';

// Assets
import {H3, Para} from '../../Text';
import {ImgBtn, PaperBtn} from '../../Buttons';

const DisclaimerModal = ({visible, setVisible}) => {
  const handleClose = () => {
    if (setVisible) setVisible(false);
  };
  const handleAccept = () => {
    handleClose();
  };
  const handleDecline = () => {
    handleClose();
  };
  return (
    <Provider>
      <Portal>
        <Modal
          theme={theme}
          visible={visible}
          onDismiss={() => setVisible(!visible)}
          contentContainerStyle={styles.container}>
          <View style={styles.headerContainer}>
            <H3 text="Legal Disclaimer" />
            <Para text="Last update October 11, 2022" />
          </View>
          <Divider style={styles.divider} />
          <View style={{flex: 1}}>
            <ScrollView>
              <Para containerStyle={styles.paraStyle} size={10}>
                Velit consectetur adipisicing do non incididunt fugiat elit
                adipisicing laborum velit. Tempor cillum deserunt sunt dolore
                enim veniam fugiat velit nulla sit dolore. Nisi sunt magna
                reprehenderit quis et. Voluptate dolor elit culpa consequat id
                et tempor ipsum. Incididunt excepteur esse culpa enim sit fugiat
                eu voluptate consequat nulla voluptate qui id irure. Ut minim
                consectetur do ea et cillum mollit aliquip culpa esse. Commodo
                enim duis ipsum aute ullamco cupidatat esse nostrud non culpa
                reprehenderit sunt. Mollit cupidatat reprehenderit officia ea
                nostrud enim laborum minim. Tempor officia in commodo enim duis
                non ex id labore commodo aliqua. Qui pariatur laborum Lorem eu
                magna. Officia dolor mollit adipisicing ea non dolore nisi
                eiusmod mollit ad duis nisi ullamco ea. Dolore esse aliquip
                voluptate nostrud nisi elit duis qui. Duis et veniam consequat
                commodo aliqua esse. Occaecat ad amet consectetur irure
                consectetur exercitation.
              </Para>
            </ScrollView>
            <View style={styles.fade} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              padding: 20,
              width: '100%',
              justifyContent: 'space-around',
            }}>
            <PaperBtn
              mode="outlined"
              label="Decline"
              width={110}
              height={50}
              onPress={handleDecline}
            />
            <ImgBtn
              label="Accept"
              width={110}
              height={50}
              onPress={handleAccept}
            />
          </View>
        </Modal>
      </Portal>
    </Provider>
  );
};

export default DisclaimerModal;

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
