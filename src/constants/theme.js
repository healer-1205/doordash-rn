import {Dimensions} from 'react-native';
import {Platform, StatusBar} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  green: '#00824B',
  white: '#FFFFFF',
  lightBlue: '#F3F7FF',
  black: '#222222',
  gray: '#7D849A',
  lightGray: '#E2E2E2',
  carrot: '#FD5252',

  transparent: 'transparent',
  transparentWhite1: 'rgba(255, 255, 255, 0.1)',

  shadowStartColor: 'rgb(196,196,196, 0.08)',
  shadowFinalColor: 'rgb(255, 255, 255, 0.08)',
  shadowDistance: 12,
};
export const SIZES = {
  width,
  height,

  paddingTop: height * 0.12,
};
export const FONTS = {
  H1: {fontSize: 40, fontFamily: 'Rancho-Regular'},
  H2: {fontSize: 32, fontFamily: 'Rancho-Regular'},
  H3: {fontSize: 26, fontFamily: 'Rancho-Regular'},
  H4: {fontSize: 24, fontFamily: 'Rancho-Regular'},

  Lato_400Regular: {fontFamily: 'Lato-Regular'},
  Lato_700Bold: {fontFamily: 'Lato-Bold'},
  Lato_900Black: {fontFamily: 'Lato-Black'},

  bodyText: {fontSize: 16, fontFamily: 'Lato-Regular'},
  fieldLabel: {fontSize: 12, fontFamily: 'Lato-Regular'},
};

export const AndroidSafeArea = {
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
};
