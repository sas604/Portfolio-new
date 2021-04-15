import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NavStyles = styled.nav`
  margin-left: auto;

  ul {
    display: flex;
    font-size: 1.5rem;
  }
  li + li {
    margin-left: 1.5rem;
  }
  a {
    position: relative;
    span {
      position: absolute;
      display: block;
      background-color: var(--yellow);
      height: 50%;
      width: 110%;
      top: 50%;
      left: -10px;
      z-index: -1;
      transform: scale(0);
      transform-origin: left;
    }
  }
`;

const underline = {
  rest: {
    opacity: 0,
    ease: 'easeOut',
    duration: 0.2,
    type: 'tween',
    scaleX: 0,
  },
  hover: {
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeIn',
    },
  },
};
export default function Nav() {
  // TODO add active style
  return (
    <NavStyles>
      <ul>
        <li>
          <Link href="/#about" passHref>
            <motion.a initial="rest" whileHover="hover" animate="rest">
              About
              <motion.span variants={underline} className="underline" />
            </motion.a>
          </Link>
        </li>
        <li>
          <Link href="/#projects" passHref>
            <motion.a initial="rest" whileHover="hover" animate="rest">
              Projects
              <motion.span variants={underline} className="underline" />
            </motion.a>
          </Link>
        </li>
        <li>
          <Link href="/#contacts" passHref>
            <motion.a initial="rest" whileHover="hover" animate="rest">
              Contacts
              <motion.span variants={underline} className="underline" />
            </motion.a>
          </Link>
        </li>
      </ul>
    </NavStyles>
  );
}
