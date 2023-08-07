import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  colors: {
    neutral: '#FFFFFF',
    grayScale: {
      digitalBlack: '#333333',
      digitalBlack100: '#F1F0ED',
      digitalBlack200: '#E4E1DB',
      digitalBlack300: '#C1C1C1',
      digitalBlack400: '#848484',
      digitalBlack900: '#18090E',
    },
    additional: {
      forest: '#4B6455',
      pear: '#B7DEBD',
      mint: '#DBEEDE',
      leather: '#7C3647',
      flamingo: '#FAC0B1',
      melon: '#FCDFD8',
      clay: '#A5B1AA',
    },
    success: {
      success: '#55C436',
      success200: '#D0F9B0',
      success800: '#117111',
    },
    warning: {
      warning: '#E08302',
      warning200: '#FBDE98',
      warning800: '#642E00',
    },
    danger: {
      danger: '#FF4965',
      danger200: '#FFBFB6',
      danger800: '#A01B1B',
    },
    info: {
      info: '#0047FF',
      info200: '#B5C9FF',
      info800: '#001C64',
    },
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    neutral: '#18090E',
    grayScale: {
      digitalBlack: '#F1F0ED',
      digitalBlack100: '#333333',
      digitalBlack200: '#848484',
      digitalBlack300: '#C1C1C1',
      digitalBlack400: '#E4E1DB',
      digitalBlack900: '#FFFFFF',
    },
    additional: {
      forest: '#DBEEDE',
      pear: '#B7DEBD',
      mint: '#26332B',
      leather: '#FCDFD8',
      flamingo: '#FAC0B1',
      melon: '#4E252E',
      clay: '#A5B1AA',
    },
    success: {
      success: '#55C436',
      success200: '#0B480B',
      success800: '#117111',
    },
    warning: {
      warning: '#E08302',
      warning200: '#642E00',
      warning800: '#FFBFB6',
    },
    danger: {
      danger: '#FF4965',
      danger200: '#A01B1B',
      danger800: '#FFBFB6',
    },
    info: {
      info: '#4D7EFF',
      info200: '#001C64',
      info800: '#B5C9FF',
    },
  },
};
