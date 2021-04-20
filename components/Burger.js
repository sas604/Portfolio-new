import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Portal from '../hooks/Portal';
import MobileNav from './MobileNav';

const BurgerStyles = styled.button`
  position: relative;
  margin-left: auto;
  appearance: none;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  width: 2rem;
  height: 2rem;
  padding: 0.25rem;
  border: 0;
  cursor: pointer;
  z-index: 10000;
  display: none;
  @media (max-width: 650px) {
    display: flex;
  }

  div {
    position: relative;
    z-index: -1;
    width: 100%;
    height: 3px;
    background: var(--dark-blue);
    border-radius: 1px;
  }
`;
const burgerMotion = {
  rest: {
    y: 0,
    scale: 1,
    rotate: 0,
    opacity: 1,
  },
  openF: {
    y: 8,
    rotate: 45,
  },
  middle: {
    opacity: 0,
    scaleX: 0,
  },

  openL: {
    y: -8,
    rotate: -45,
  },
};

export default function Burger() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add('fixed');
    } else {
      document.body.classList.remove('fixed');
    }
  });
  return (
    <>
      <Portal selector="#mobile-menu">
        <MobileNav open={open} />
      </Portal>
      <BurgerStyles type="button" onClick={() => setOpen((s) => !s)}>
        <motion.div
          animate={open ? burgerMotion.openF : burgerMotion.rest}
          variants={burgerMotion}
        />
        <motion.div
          animate={open ? burgerMotion.middle : burgerMotion.rest}
          variants={burgerMotion}
        />
        <motion.div
          animate={open ? burgerMotion.openL : burgerMotion.rest}
          variants={burgerMotion}
        />
      </BurgerStyles>
    </>
  );
}
