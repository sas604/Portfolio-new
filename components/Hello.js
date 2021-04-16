import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HelloStyle = styled.section`
  padding: 4.5rem 1.5rem 4.5rem;
  background-color: var(--yellow);
  position: relative;
  overflow: hidden;
  .ball-1 {
    opacity: 0.9;
    max-width: 650px;
    position: absolute;
    top: -473px;
    left: -289px;
    width: 50vw;
    height: 50vw;
    clip-path: circle();
    background-color: var(--dark-blue);
    z-index: 100;
  }
  .ball-2 {
    opacity: 0.9;
    max-width: 500px;
    position: absolute;
    top: -300px;
    left: 289px;
    width: 29vw;
    height: 29vw;
    clip-path: circle();
    background-color: var(--light-blue);
    z-index: 110;
  }
`;
const HelloWrapper = styled.div`
  position: relative;
  z-index: 1000;
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  div:first-of-type {
    align-self: flex-end;
  }
  .image {
    display: flex;
    justify-content: flex-end;
    position: relative;
    margin-left: 1.5rem !important;
    flex: 250px;
    @media (max-width: 650px) {
      position: absolute;
      width: 250px;
      z-index: -1;
      left: calc(47vw - 29px);
      top: -73px;
    }
  }

  h1 {
    font-size: clamp(1.8rem, 5vw, 3.454rem);
    margin: 0;
    span {
      display: block;
      font-size: clamp(1.2rem, 3vw, 1.667rem);
      line-height: 0.9;
      color: white;
    }
  }
`;
const ButtonGroup = styled.div`
  margin-top: 1.5rem;
  display: flex;
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;
const CTA = styled.a`
  display: block;
  background-color: ${({ bg }) => bg};
  color: ${({ bg }) =>
    bg === 'var(--light-blue)' ? 'var(--dark-blue)' : 'white'};
  flex: 1;
  border-radius: 3px;
  font-weight: 700;
  max-width: 300px;
  text-align: center;
  text-transform: uppercase;
  font-size: clamp(1rem 5vw 1.25rem);
  line-height: 3rem;
  transition: all 300ms;
  &:last-of-type {
    margin-left: 1.5rem;
  }
  :hover {
    background-color: white;
    color: var(--dark-blue);
  }
  @media (max-width: 650px) {
    max-width: 180px;
    &:last-of-type {
      margin-left: 0;
      margin-top: 1rem;
    }
  }
`;
const header = {
  initial: { opacity: 0, y: 75 },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};
const balls = {
  initial: { y: 50, scale: 1.1 },
  in: {
    scale: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
export default function Hello() {
  return (
    <HelloStyle>
      <motion.div
        initial={balls.initial}
        animate={balls.in}
        className="ball-1"
      />
      <motion.div
        className="ball-2"
        initial={balls.initial}
        animate={balls.in}
      />
      <HelloWrapper>
        <motion.div initial={header.initial} animate={header.in}>
          <h1>
            <span>Hello! my name is</span> Aleksandr Tagunov <span>I'm a </span>
            Creative Web Developer
          </h1>
          <ButtonGroup>
            <Link href="/#about" passHref>
              <CTA bg="var(--light-blue)">Get to know me</CTA>
            </Link>
            <Link href="/#contacts" passHref>
              <CTA bg="var(--dark-blue)">Contact me</CTA>
            </Link>
          </ButtonGroup>
        </motion.div>
        <div className="image">
          <Image
            width="450"
            priority
            height="500"
            objectFit="contain"
            src="/me.png"
          />
        </div>
      </HelloWrapper>
    </HelloStyle>
  );
}
