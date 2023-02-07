import {StyleSheet, Platform} from 'react-native';
import React, {useState} from 'react';

// Components
import {FAB} from 'react-native-paper';

// Styles
import {theme, colors} from '../../../util/theme';

const CustomFab = ({icon, actions, backdropColor, onPress}) => {
  const [open, setOpen] = useState(false);
  const onStateChange = ({open}) => setOpen(open);

  return (
    <FAB.Group
      theme={theme}
      open={!onPress && open}
      icon={icon || 'plus'}
      fabStyle={styles.fab}
      actions={
        actions
          ? actions?.map(data => {
              return {
                icon: data.icon && data.icon,
                label: data.label && data.label,
                onPress: data.onPress && data.onPress,
                style: styles.iconStyle,
                labelStyle: styles.labelStyle,
                labelTextColor: colors.primary,
              };
            })
          : []
      }
      backdropColor={backdropColor}
      onStateChange={onStateChange}
      onPress={() => {
        if (onPress) onPress()
        if (open) {
          // do something if the speed dial is open
        }
      }}
    />
  );
};

export default CustomFab;

const styles = StyleSheet.create({
  iconStyle: {
    position: 'absolute',
    top: 2,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    width: 180,
    height: 40,
  },
  labelStyle: {
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: 0,
    elevation: 0,
    zIndex: 1,
    marginLeft: 40,
    width: 130,
    color: '#333'
  },
  fab: {
    backgroundColor: colors.primary,
    alignSelf: 'center',
    alignItems: 'center',
    shadowColor: colors.primary,
    elevation: 5,
  },
});
