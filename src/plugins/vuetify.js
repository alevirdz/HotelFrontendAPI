import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';

const light = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#e3f2fd',
    secondary: '#03DAC6',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
};

const darkBlue = {
  dark: true,
  colors: {
    background: '#111928',
    surface: '#FFFFFF',
    primary: '#6200EE',
    secondary: '#03DAC6',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
};

const green = {
  dark: false,
  colors: {
    background: '#00695C',
    surface: '#FFFFFF',
    primary: '#1f3140',
    secondary: '#03DAC6',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
};

const blue = {
  dark: true,
  colors: {
    background: '#00695C',
    surface: '#FFFFFF',
    primary: '#1a309c',
    secondary: '#03DAC6',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
};

const alevi = {
  dark: false,
  colors: {
    primary: '#140d25',
    secondary: '#03DAC6',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    text: '#f4f6f8',
    'text-primary': '#FFFFFF',
    'text-secondary': '#000000',
    'text-disabled': '#B0BEC5',
    'background-alternative': '#1E1E2D',
    'border': '#E0E0E0',
    'shadow': 'rgba(0, 0, 0, 0.1)',
    background: '#150d23',
    surface: '#e3f2fd',
  }
};

const savedTheme = localStorage.getItem('selectedTheme') || 'light';

export default createVuetify({
  theme: {
    defaultTheme: savedTheme,
    themes: {
      light,
      darkBlue,
      green,
      blue,
      alevi,
    }
  }
});
