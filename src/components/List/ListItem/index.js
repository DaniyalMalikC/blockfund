import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';

// Component
import {List} from 'react-native-paper';
import {IconBtn, PaperBtn} from '../../Buttons';
import {colors} from '../../../util/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ListItem = ({
  key,
  title,
  desc,
  onPress,
  icon,
  img,
  check,
  showBtn,
  btnMode,
  btnLabel,
  btnOnPress,
  titleFontSize,
  disabled,
  iconColor,
  iconBackground,
}) => {
  const [btnStatus, setBtnStatus] = useState(true);
  const [btnTitle, setBtnTitle] = useState('Edit');
  const handleBTNPress = () => {
    !btnLabel && setBtnTitle(btnTitle === 'Edit' ? 'Update' : 'Edit');
    !btnMode && setBtnStatus(!btnStatus);
    btnOnPress && btnOnPress();
  };

  return (
    <List.Item
      disabled={disabled}
      key={key}
      title={title}
      description={desc}
      style={[styles.listItem, disabled && {backgroundColor: colors.light}]}
      // titleStyle={[styles.listItemTitle, titleFontSize && {fontSize: titleFontSize}]}
      // descriptionStyle={styles.listItemDesc}
      titleNumberOfLines={1}
      descriptionNumberOfLines={1}
      left={() => (
        <IconBtn
          icon={icon}
          img={img}
          size={20}
          color={iconColor}
          style={{
            marginTop: 10,
            backgroundColor: iconBackground,
            height: 25,
            width: 25,
            textAlign: 'center',
            borderRadius: 50,
          }}
        />
      )}
      right={() =>
        (check || showBtn) && (
          <View style={styles.rightComponent}>
            {check && <Icon name="check" size={25} color={colors.primary} />}
            {showBtn && (
              <PaperBtn
                label={btnLabel || btnTitle}
                onPress={handleBTNPress}
                mode={btnMode || btnStatus ? 'outlined' : 'contained'}
              />
            )}
          </View>
        )
      }
      onPress={() => onPress && onPress(desc || title)}
    />
  );
};

export default ListItem;

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: colors.white,
    // borderWidth: 0.25,
    paddingHorizontal: 20,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItemTitle: {
    fontSize: 14,
    color: colors.placeholder,
    fontFamily: 'Belgrano-Regular',
  },
  listItemDesc: {
    fontSize: 18,
    color: colors.placeholder,
    fontFamily: 'Belgrano-Regular',
  },
  rightComponent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
