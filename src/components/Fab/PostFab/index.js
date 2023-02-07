import {StyleSheet, Platform} from 'react-native';
import React, {useContext, useState} from 'react';

// Components
import {FAB} from 'react-native-paper';
import {ModalizeContext} from '../../../context/ModalizeContext';

// Styles
import {theme, colors} from '../../../util/theme';

const PostFab = ({icon}) => {
  const [open, setOpen] = useState(false);
  const onStateChange = ({open}) => setOpen(open);
  const {modalizeTransaction} = useContext(ModalizeContext);

  const handleCreateTransaction = () => {
    modalizeTransaction.current?.open();
  };

  return (
    <FAB.Group
      theme={theme}
      open={open}
      icon={icon || 'plus'}
      fabStyle={styles.fab}
      actions={[]}
      // actions={[
      //   {
      //     icon: 'newspaper-plus',
      //     label: 'Create Post',
      //     labelStyle: styles.labelStyle,
      //     style: styles.iconStyle,
      //     labelTextColor: colors.primary,
      //     onPress: handleCreatePost,
      //   },
      //   {
      //     icon: 'folder-multiple-plus-outline',
      //     label: 'Create Channel',
      //     labelStyle: styles.labelStyle,
      //     style: styles.iconStyle,
      //     labelTextColor: colors.primary,
      //     onPress: handleCreateChannel,
      //   },
      // ]}
      backdropColor={Platform.OS === 'ios' ? '#eee' : colors.white}
      onStateChange={onStateChange}
      onPress={() => {
        handleCreateTransaction();
        if (open) {
          // do something if the speed dial is open
        }
      }}
    />
  );
};

export default PostFab;

const styles = StyleSheet.create({
  iconStyle: {
    elevation: 0,
  },
  labelStyle: {
    position: 'absolute',
    backgroundColor: colors.white,
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 1,
    top: -28,
    left: 0,
    width: 150,
    paddingLeft: 30,
    paddingTop: 11,
    height: 40,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },
  fab: {
    backgroundColor: colors.primary,
    alignSelf: 'center',
    alignItems: 'center',
    shadowColor: colors.primary,
    elevation: 5,
  },
});
