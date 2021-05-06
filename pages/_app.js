/* eslint-disable react/jsx-props-no-spreading */

import '../components/styles/nprogress.css';

import Router from 'next/router';
import NProgress from 'nprogress';
import PropTypes from 'prop-types';

import Page from '../components/Page';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

MyApp.propTypes = {
  children: PropTypes.any,
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};
