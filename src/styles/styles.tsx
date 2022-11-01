import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { components } from './components';

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  }
};

let theme = createTheme({
  palette: {
    primary: {
      main: '#0093E3',
      light: '#8ED1FC'
    },
    secondary: {
      main: '#0B70A6'
    },
    text: {
      primary: '#181A2B',
      secondary: '#7C7C7C',
      disabled: '#999999'
    },
    background: {
      default: '#EEEEEE'
    }
  },
  typography: {
    fontFamily: 'Montserrat',
    h1: {
      fontSize: 36,
      fontWeight: 700
    },
    h2: {
      fontSize: 28,
      fontWeight: 700
    },
    h3: {
      fontSize: 20,
      fontWeight: 700
    },
    h4: {
      fontSize: 16,
      fontWeight: 700
    },
    body1: {
      fontSize: 20,
      fontWeight: 500
    },
    body2: {
      fontSize: 18,
      fontWeight: 700
    },
    button: {
      fontSize: 16,
      fontWeight: 500
    },
    subtitle1: {
      fontSize: 12,
      fontWeight: 700
    },
    subtitle2: {
      fontSize: 12,
      fontWeight: 600
    }
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  components: { ...components },
  breakpoints
});

theme = responsiveFontSizes(theme);

theme.shadows[1] = '0px 1px 3px rgba(3, 0, 71, 0.09)';
theme.shadows[2] = '0px 4px 16px rgba(43, 52, 69, 0.1)';
theme.shadows[3] = '0px 8px 45px rgba(3, 0, 71, 0.09)';
theme.shadows[4] = '0px 0px 28px rgba(3, 0, 71, 0.01)';

export default theme;
