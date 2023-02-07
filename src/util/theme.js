import {Appearance} from 'react-native';

export const colorScheme = Appearance.getColorScheme();

export const colors = {
  primary: colorScheme === 'dark' ? '#0A131A' : '#000D24',
  secondary: colorScheme === 'dark' ? '#3B4346' : '#0E3D82',
  placeholder: colorScheme === 'dark' ? '#F1F1F3' : '#EAF1FF',

  white: '#FFFFFF',
  black: '#000000',

  overlay: '#00000075',
};

export const theme = {
  colors: {
    primary: colors.primary,
    secondary: colors.secondary,
    tertiary: colors.placeholder,
  },
  fonts: {
    regular: {fontFamily: 'Montserrat-Bold'},
    medium: {fontFamily: 'Montserrat-Medium'},
    regular: {fontFamily: 'Montserrat-Regular'},
    light: {fontFamily: 'Montserrat-Light'},
    thin: {fontFamily: 'Montserrat-Thin'},
  },
};
