import styled from 'styled-components';
import { H1highlight } from '../styles/Type';
import CaseStudy from './CaseStudy';

const ProjectsStyles = styled.div`
  background-color: var(--white-blue);
  ul {
    margin-top: 3rem;
  }
`;
export default function CaseStudies({ caseStudies }) {
  return (
    <ProjectsStyles>
      <section id="projects">
        <H1highlight>Work I'm Proud of </H1highlight>
        <p>
          The collection of the selected projects I completed over the last few
          years.
        </p>
        <ul>
          {caseStudies.map((project, i) => (
            <li key={i}>
              <CaseStudy project={project} num={i} />
            </li>
          ))}
        </ul>
      </section>
    </ProjectsStyles>
  );
}
