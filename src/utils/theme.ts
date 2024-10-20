// src/theme.js
import {
  MD3DarkTheme as PaperDarkTheme,
  MD3LightTheme as PaperLightTheme,
} from 'react-native-paper';

export const CustomDarkTheme = {
  ...PaperDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    primary: '#3486eb',
    background: '#121212',
    surface: '#1F1F1F', // A slightly lighter dark gray for the surface color
    card: '#272727', // A different shade of gray for card backgrounds
    text: '#FFFFFF', // White text color for dark mode
    accent: '#03DAC6',
    placeholder: '#A6A6A6',
  },
};

export const CustomLightTheme = {
  ...PaperLightTheme,
  colors: {
    ...PaperLightTheme.colors,
    primary: '#3486eb',
    background: '#FFFFFF',
    surface: '#F0F0F0', // Light gray surface color for light mode
    card: '#FFFFFF', // White card background
    text: '#000000', // Black text color for light mode
    accent: '#03DAC6',
    placeholder: '#6C6C6C',
  },
};
