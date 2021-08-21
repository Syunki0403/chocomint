import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/js/theme';
import store from '../reducks/store';

export default function MyApp({ Component, pageProps }: AppProps) {
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
