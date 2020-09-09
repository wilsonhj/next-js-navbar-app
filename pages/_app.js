import React from 'react';
import App, { Container } from 'next/app';
import Navbar from '../components/Navbar';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps){
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }
  render() { 
    const { Component, pageProps } = this.props;
    return ( 
      <Container>
        <Navbar></Navbar>
        <Component {...pageProps} />
        <h1>Footer</h1>
      </Container>
    );
  }
}

export default MyApp;



// import App from 'next/app';
// import Navbar from '../components/Navbar';

// function MyApp({ Component, pageProps }) {
//   return (
//     <Navbar>
//       <p>p function _app</p>
//       <Component {...pageProps} />
//       <h1>Footer</h1>
//     </Navbar>
//   );
// }

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.

// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

// export default MyApp;