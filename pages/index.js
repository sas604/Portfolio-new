import About from '../components/About';
import Hello from '../components/Hello';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Hello />
      <About />
    </Layout>
  );
}
