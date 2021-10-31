import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../components/Layout';
import { H1highlight } from '../styles/Type';
import fetchEntries from '../utils/contentful';

export default function Post({ caseStudy }) {
  return (
    <Layout title={`- ${caseStudy.title} case study`}>
      <section>
      <h1 style={{margin:'30px auto', fontSize: '40px', color:'red'}}>This section is under development, please come back later.</h1>
        <H1highlight>{caseStudy.title} Case Study</H1highlight>
        {documentToReactComponents(caseStudy.body)}
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetchEntries({ content_type: 'caseStudy' });
  const paths = await res.map((el) => ({
    params: { slug: el.fields.title },
  }));
  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  const res = await fetchEntries({
    content_type: 'caseStudy',
    'fields.title': params.slug,
  });
  const caseStudy = await res.reduce((acc, el) => el.fields, {});

  return {
    props: {
      caseStudy,
    },
  };
}
