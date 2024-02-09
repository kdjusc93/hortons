import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../src/theme';
import AppBar from '../src/AppBar';
import Footer from '../src/Footer';

export default function MyApp(props) {
  const { Component, pageProps } = props;

  return (
    <AppCacheProvider {...props}>
      <Head>
        {/* <meta name="viewport" content="initial-scale=1, width=device-width" /> */}
        <meta name="viewport" content="width=device-width, user-scalable=no" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <AppBar></AppBar>
        <Component {...pageProps} />
        <Footer></Footer>
      </ThemeProvider>
    </AppCacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
