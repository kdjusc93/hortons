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
        <meta name="title" content="Hortons Honey-Do and Handyman Service"/>
        <meta name="description" content="Handyman service in Marietta, OH area offering a wide range of services"/>
        <meta name="keywords" content="handyman, contractor, honey do, Marietta, Marietta Handyman"/>
        <meta name="robots" content="index, follow"/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="English"></meta>

        <meta property="og:title" content="Hortons Honey-Do and Handyman Service"/>
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://hortonshandymanservices.com/2.jpg"/>
        <meta property="og:url" content="https://hortonshandymanservices.com/"/>
        <meta name="twitter:card" content="summary_large_image"/>

        <meta property="og:description" content="Handyman service in Marietta, OH area offering a wide range of services" />
        <meta property="og:site_name" content="European Travel, Inc." />
        <meta name="twitter:image:alt" content="Alt text for image"></meta>
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
