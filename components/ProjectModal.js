import { motion } from 'framer-motion';
import Image from 'next/image';
import styled from 'styled-components';
import { CgClose } from 'react-icons/cg';
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai';
import Link from 'next/link';

const ModalStyle = styled(motion.div)`
  position: absolute;
  width: 100%;
  min-height: 100%;
  z-index: 20;
  overflow: hidden;
  padding: 1.5rem;
  border-radius: 5px;
  z-index: 100;
  .modal-content {
    h2 {
      margin-top: 1.5rem;
    }
    button {
      position: absolute;
      right: 0;
      top: 0;
      font-size: 1.5rem;
      box-shadow: none;
      line-height: 1;
      padding: 1rem;
    }
    .links {
      margin-top: 1.5rem;
      display: flex;
      font-size: 40px;
      * + * {
        margin-left: 1.5rem;
      }
    }
  }

  .background {
    position: absolute;
    width: 100px;
    height: 100px;
    transform-origin: top, left;
    background-color: white;
    z-index: -1;
  }
`;
const bgMotion = {
  open: {
    scale: 20,
    clipPath: `circle(100px at 40px 40px)`,
    transition: {
      stifnes: 40,
      duration: 1,
    },
  },
  exit: {
    scale: 0,
    clipPath: `circle(10px at 40px 40px)`,
    transition: {
      stifnes: 40,
      duration: 1,
    },
  },
};

export default function ProjectModal({ project, close, position, open }) {
  return (
    <ModalStyle
      animate={open ? 'open' : 'close'}
      initial="close"
      exit="close"
      variants={{
        open: {
          boxShadow: '0px 8px 16px #d0d0d0',
          transition: { when: 'afterChildren' },
        },
        close: {
          boxShadow: 'none',
          transition: { when: 'beforeChildren' },
        },
      }}
    >
      <motion.div
        className="background"
        initial={{
          x: position[0] - 50,
          y: position[1] - 50,
          clipPath: 'circle(10px at 40px 40px)',
        }}
        variants={bgMotion}
        exit={bgMotion.exit}
      />
      <motion.div
        className="modal-content"
        variants={{ open: { opacity: 1, transition: { delay: 0.5 } } }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
      >
        <Image
          src={`http:${project.image.fields.file.url}`}
          layout="intrinsic"
          objectFit="cover"
          width="200"
          height="200"
        />
        <div>
          <h2>{project.name}</h2>
          <p>{project.desctription}</p>
          <div className="links">
            {project.gitHub && (
              <Link href={project.gitHub}>
                <a>
                  <AiFillGithub />
                </a>
              </Link>
            )}
            <Link href={project.link}>
              <a>
                <AiOutlineLink />
              </a>
            </Link>
          </div>
          <motion.button
            whileHover={{ color: 'var(--yellow' }}
            type="button"
            onClick={() => close(false)}
          >
            <CgClose />
          </motion.button>
        </div>
      </motion.div>
    </ModalStyle>
  );
}
