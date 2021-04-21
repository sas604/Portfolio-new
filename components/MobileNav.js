import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const MobileNavStyle = styled.nav`
  min-height: 100vh;
  ul {
    background-color: var(--light-blue);
    min-height: 100vh;
    padding: 6rem 3rem;
  }
  li + li {
    margin-top: 1.5rem;
  }
  a {
    /* color: white; */
    font-size: 1.25rem;
    font-weight: 700;
  }
  @media (min-width: 650px) {
    display: none;
  }
`;
const MotionNav = {
  open: {
    x: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
      stiffness: 60,
    },
  },
  closed: {
    x: 300,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.1,
      stiffness: 60,
    },
  },
};
const MotionItems = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      stiffness: 60,
    },
  },
  closed: {
    x: 50,
    opacity: 0,
    transition: {
      stiffness: 60,
    },
  },
};
export default function MobileNav({ animation }) {
  const addFixed = (param) =>
    param === 'closed' && document.body.classList.remove('fixed');
  console.log(animation);
  return (
    <MobileNavStyle>
      <motion.ul
        onAnimationComplete={(d) => {
          console.log(d);
          addFixed(d);
        }}
        initial="closed"
        animate={animation}
        variants={MotionNav}
      >
        <motion.li variants={MotionItems}>
          <Link href="/#about">
            <a>About</a>
          </Link>
        </motion.li>
        <motion.li variants={MotionItems}>
          <Link href="/#projects">
            <a>Projects</a>
          </Link>
        </motion.li>
        <motion.li variants={MotionItems}>
          <Link href="/#contacts">
            <a>Contacts</a>
          </Link>
        </motion.li>
      </motion.ul>
    </MobileNavStyle>
  );
}
