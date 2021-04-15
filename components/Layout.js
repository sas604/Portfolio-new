import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>Aleksandr Tagunov {title}</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}
