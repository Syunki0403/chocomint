/* eslint-disable react/jsx-props-no-spreading */
import { ServerStyleSheets } from '@material-ui/core/styles';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import theme from '../styles/js/theme';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja-JP">
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <meta content="チョコミント商品の情報共有アプリです" name="description" />
          <meta property="og:image" content="/logo.png" />
          <meta property="og:site_name" content="チョコミントウ" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <link
            href="https://fonts.googleapis.com/css2?family=RocknRoll+One&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const MuiSheets = new ServerStyleSheets();
  const styledComponentsSheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          styledComponentsSheet.collectStyles(MuiSheets.collect(<App {...props} />)),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [
        ...React.Children.toArray(initialProps.styles),
        MuiSheets.getStyleElement(),
        styledComponentsSheet.getStyleElement(),
      ],
    };
  } finally {
    styledComponentsSheet.seal();
  }
};
