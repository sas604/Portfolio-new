import Type from '../styles/Type';
import GlobalStyles from '../styles/Global';
import 'normalize.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Type />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
