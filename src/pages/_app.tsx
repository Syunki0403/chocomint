import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/js/theme';
import store from '../reducks/store';
import '../styles/css/normalize.css';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Provider store={store()}>
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline  to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </Provider>
  );
}
