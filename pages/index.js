import About from '../components/About';
import Hello from '../components/Hello';
import Layout from '../components/Layout';
import CaseStudies from '../components/Projects';
import fetchEntries from '../utils/contentful';

export default function Home({ caseStudies }) {
  return (
    <Layout>
      <Hello />
      <About />
      <CaseStudies caseStudies={caseStudies} />
    </Layout>
  );
}
export async function getStaticProps() {
  const res = await fetchEntries({ content_type: 'caseStudy' });
  const caseStudies = await res.map((el) => el.fields);

  return {
    props: {
      caseStudies,
    },
  };
}
