import NextNprogress from 'nextjs-progressbar';
import Type from '../styles/Type';
import GlobalStyles from '../styles/Global';
import 'normalize.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress color="#f5a53d" />
      <GlobalStyles />
      <Type />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
