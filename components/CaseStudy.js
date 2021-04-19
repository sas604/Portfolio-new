import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const FancyButton = styled(motion.a)`
  display: block;
  background-color: var(--yellow);
  color: var(--blue);
  text-align: center;
  font-weight: 700;
  max-width: 200px;
  text-align: center;
  text-transform: uppercase;
  font-size: clamp(1rem 5vw 1.25rem);
  line-height: 3rem;
  box-shadow: -6px -6px 0px 0px #023047;
  margin-top: 1.5rem;
`;
const CaseStudyStyle = styled.div`
  padding: 4.5rem 0;
  display: flex;
  gap: 1.5rem;
  ${({ num }) => num === 1 && 'flex-direction: row-reverse;'}

  .caseStudy-image {
    position: relative;
    display: flex;
    padding: 60px 0;
    img {
      padding: 10px !important;
      -webkit-filter: drop-shadow(5px 5px 5px #222);
      filter: drop-shadow(1px 1px 4px #02304796);
    }
    .icons {
      top: 0px;
      left: 21%;
      position: absolute;
      display: flex;
    }
  }
  @media (max-width: 650px) {
    flex-direction: column;
    gap: unset;
    > * + * {
      margin-top: 1.5rem;
    }
  }
`;

export default function CaseStudy({ project, num }) {
  return (
    <CaseStudyStyle num={num}>
      <div className="caseStudy-image">
        <motion.div className="icons">
          {project.icons.map((icon, i) => (
            <motion.div key={i}>
              <Image
                quality="100"
                width="40px"
                height="40px"
                objectFit="contain"
                src={`https:${icon.fields.file.url}`}
              />
            </motion.div>
          ))}
        </motion.div>

        <Image
          className="thumb"
          src={`http:${project.coverImage.fields.file.url}`}
          width="600"
          height="auto"
          objectFit="contain"
          layout="intrinsic"
          alt={project.coverImage.fields.title}
        />
      </div>
      <div>
        <h2>{project.title}</h2>
        <p className="stack">
          {project.technologies.map((tech, i) =>
            i + 1 === project.technologies.length ? tech : `${tech} / `
          )}
        </p>
        <p>{project.description}</p>
        <Link href={`/${project.title}`} passHref>
          <FancyButton
            whileTap={{
              x: -6,
              y: -6,
              boxShadow: '0px 0px 0px 0px #023047',
            }}
          >
            Check it out
          </FancyButton>
        </Link>
      </div>
    </CaseStudyStyle>
  );
}
