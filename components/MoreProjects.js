import { AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

import styled from 'styled-components';
import Portal from '../hooks/Portal';
import { H1highlight } from '../styles/Type';
import ProjectTile from './PrjectTile';
import ProjectModal from './ProjectModal';

const MoreProjectStyles = styled.ul`
  position: relative;
  padding: 1.5rem 0;
  display: grid;
  --column: 280px;
  grid-template-columns: repeat(auto-fill, minmax(var(--column), 1fr));
  gap: 1.5rem;
  justify-content: center;
  max-width: 900px;
  margin: 3rem auto;
  justify-items: center;
  button {
    appearance: none;
    cursor: pointer;
    border: none;
    line-height: 0;
    background-color: transparent;
    padding: 0;
    box-shadow: 0px 8px 16px #0230471f;
  }
  @media (max-width: 600px) {
    --column: 119px;
    gap: 1rem;
  }
`;
export default function MoreProjects({ moreProjects }) {
  const [modal, setModal] = useState(false);
  const [position, setPosition] = useState([0, 0]);

  const ref = useRef();
  useEffect(() => {
    if (modal) {
      document.body.classList.add('fixed');
    } else {
      document.body.classList.remove('fixed');
    }
  });
  return (
    <section style={{ position: 'relative' }}>
      <H1highlight>Other Projects</H1highlight>
      <p>Some smaller projects worth showing.</p>
      <MoreProjectStyles ref={ref}>
        <AnimatePresence>
          {modal && (
            <Portal selector="#project-modal">
              <ProjectModal
                key="modal"
                project={moreProjects[modal - 1]}
                close={setModal}
                position={position}
                open={modal}
              />
            </Portal>
          )}
        </AnimatePresence>
        {moreProjects.map((project, i) => (
          <li key={i}>
            <button
              type="button"
              onClick={(e) => {
                const x = e.clientX;
                const y = e.clientY;
                setModal(i + 1);
                setPosition([x, y]);
              }}
            >
              <ProjectTile project={project} />
            </button>
          </li>
        ))}
      </MoreProjectStyles>
    </section>
  );
}
