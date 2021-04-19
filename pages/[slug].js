import fetchEntries from '../utils/contentful';

export default function Post({ caseStudy }) {
  return <h1>{caseStudy.title}</h1>;
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
