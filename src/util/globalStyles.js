import {Dimensions, StyleSheet} from 'react-native';
import {colors} from './theme';

export const {width, height} = Dimensions.get('screen');
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
export const iosHeight = height <= 800 ? height : height / 1.106;
export const globalStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: height,
    width: width,
    flex: 1,
    position: 'absolute',
  },
  centeredContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shade: {
    width: width,
    height: width,
    resizeMode: 'cover',
  },
  containerGray: {
    backgroundColor: colors.secondary,
    height: height,
    width: width,
    flex: 1,
    position: 'absolute',
  },
  leftAlignContainer: {
    marginVertical: 20,
    alignItems: 'flex-start',
  },
  centeredRowContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  centeredRadioContainer: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  smartContainer: {
    flex: 1,
    marginHorizontal: 25,
    marginBottom: 40,
  },
});
