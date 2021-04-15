import Head from 'next/head';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>Aleksandr Tagunov {title}</title>
      </Head>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
