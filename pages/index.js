import About from '../components/About';
import Contact from '../components/Contact';
import Hello from '../components/Hello';
import Layout from '../components/Layout';
import MoreProjects from '../components/MoreProjects';
import CaseStudies from '../components/Projects';
import fetchEntries from '../utils/contentful';

export default function Home({ caseStudies, otherProjects }) {
  return (
    <Layout>
      <Hello />
      <About />
      <CaseStudies caseStudies={caseStudies} />
      <MoreProjects moreProjects={otherProjects} />
      <Contact />
    </Layout>
  );
}
export async function getStaticProps() {
  const res = await fetchEntries();
  const otherProjects = await res.reduce(
    (acc, el) => {
      if (el.sys.contentType.sys.id === 'otherProjects') {
        return { ...acc, otherProjects: [...acc.otherProjects, el.fields] };
      }
      return { ...acc, caseStudies: [...acc.caseStudies, el.fields] };
    },
    { otherProjects: [], caseStudies: [] }
  );

  return {
    props: {
      ...otherProjects,
    },
  };
}
