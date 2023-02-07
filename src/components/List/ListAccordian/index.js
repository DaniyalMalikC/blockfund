import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';

// Components
import {List} from 'react-native-paper';
import {theme, colors} from '../../../util/theme';
import {IconBtn} from '../../Buttons';

const ListAccordian = ({title, desc, listItems, layout = 'first', onPress}) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = type => {
    setExpanded(!expanded);
    onPress(type || desc || title);
  };

  const borderColor = expanded ? {borderColor: colors.primary} : {borderColor: colors.placeholder};
  return (
    <View style={{marginVertical: 10}}>
      <List.Accordion
        theme={theme}
        title={title}
        description={desc}
        style={[
          borderColor,
          layout === 'second' ? styles.listAccordianSecondary : styles.listAccordian,
        ]}
        titleStyle={
          layout === 'first' ? styles.listAccordianTitleFirst : styles.listAccordianTitleSecond
        }
        descriptionStyle={layout === 'second' && styles.listAccordianDescSecond}
        right={props => (
          <IconBtn
            style={[
              {padding: 0, marginRight: 5},
              layout === 'second' && {backgroundColor: colors.primary + '20', borderRadius: 50},
            ]}
            color={expanded ? colors.primary : colors.placeholder}
            size={layout === 'second' && 30}
            icon={!expanded ? 'chevron-up' : 'chevron-down'}
          />
        )}
        expanded={expanded}
        onPress={handleExpand}>
        {listItems?.map((data, index) => (
          <List.Item
            key={index}
            title={data.title}
            description={data.desc}
            style={styles.listItem}
            titleStyle={styles.listItemTitle}
            descriptionStyle={styles.listItemDesc}
            titleNumberOfLines={1}
            descriptionNumberOfLines={1}
            onPress={() => handleExpand(data.desc || data.title)}
          />
        ))}
      </List.Accordion>
    </View>
  );
};

export default ListAccordian;

const styles = StyleSheet.create({
  listAccordian: {
    backgroundColor: colors.light,
    borderWidth: 1,
    borderRadius: 5,
    padding: 0,
    height: 60,
    justifyContent: 'center',
  },
  listAccordianSecondary: {
    backgroundColor: colors.white,
    elevation: 5,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: colors.secondary,
    borderWidth: Platform.OS === 'ios' ? 1 : 0,
    borderRadius: 10,
    padding: 0,
    paddingHorizontal: 10,
    height: 80,
    justifyContent: 'center',
  },
  listAccordianTitleFirst: {
    fontSize: 16,
    paddingLeft: 5,
    color: colors.placeholder,
    fontFamily: 'Belgrano-Regular',
  },

  listAccordianTitleSecond: {
    fontSize: 18,
    color: colors.placeholder,
    fontFamily: 'Belgrano-Regular',
  },
  listAccordianDescSecond: {
    fontSize: 24,
    color: colors.primary,
    fontFamily: 'Belgrano-Regular',
  },
  listItem: {
    backgroundColor: colors.light,
    borderWidth: 0.25,
    padding: 0,
    height: 60,
    justifyContent: 'center',
  },
  listItemTitle: {
    fontSize: 18,
    color: colors.placeholder,
    fontFamily: 'Belgrano-Regular',
  },
  listItemDesc: {
    fontSize: 24,
    color: colors.primary,
    fontFamily: 'Belgrano-Regular',
    position: 'absolute',
    right: 10,
  },
});
