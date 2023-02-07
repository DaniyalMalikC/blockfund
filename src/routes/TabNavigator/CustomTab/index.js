import {View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import React from 'react';

// Component
import {IconBtn} from '../../../components/Buttons';

// Assets

// Styles
import {colors, theme} from '../../../util/theme';
import {PostFAB} from '../../../components/Fab';

const CustomTab = ({state, descriptors, navigation}) => {
  const activeAvatarStyle = {
    borderColor: theme.primary,
    borderWidth: 2,
  };

  const route = state?.routes[state.index]?.state;
  const routeName = route?.routes[route?.index].name;
  const routes = ['NewsFeed', 'NewsView', 'Story', 'Search'];

  const insets = useSafeAreaInsets();

  return (
    // <SafeAreaView edges={['right', 'bottom', 'left']}>
    <View
      style={[
        {
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          borderTopWidth: 0.5,
          backgroundColor: colors.white,
          paddingBottom: insets.bottom,
        },
        routes.includes(routeName) && {display: 'none'},
      ]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        let iconName;
        label === 'Home' && (iconName = isFocused ? 'home' : 'home-outline');
        label === 'Transactions' &&
          (iconName = isFocused ? 'arrow-decision' : 'arrow-decision-outline');
        label === 'Notifications' &&
          (iconName = isFocused ? 'bell' : 'bell-outline');
        label === 'Profile' &&
          (iconName = isFocused ? 'account-circle' : 'account-circle-outline');

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        return route.name === 'EmptyTab' ? (
          <View
            key={index}
            style={{
              width: 50,
              height: 50,
            }}>
            <PostFAB />
          </View>
        ) : (
          <IconBtn
            key={index}
            icon={iconName}
            size={30}
            color={colors.primary}
            onPress={onPress}
          />
        );
      })}
    </View>
    // </SafeAreaView>
  );
};

export default CustomTab;
