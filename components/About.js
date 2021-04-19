import Image from 'next/image';
import styled from 'styled-components';
import { H1highlight } from '../styles/Type';

const AboutStyles = styled.section`
  display: flex;
  gap: 3rem;
  align-items: center;
  div {
    flex: 2;
  }
  @media (max-width: 850px) {
    div:first-of-type {
      display: none;
    }
  }
`;
export default function About() {
  return (
    <AboutStyles id="about">
      <div>
        <Image
          src="/surf.jpg"
          width="750"
          height="938"
          alt="me but with surf"
        />
      </div>
      <div>
        <H1highlight>Something About Me</H1highlight>
        <p>
          My name is Aleksandr, friends call me Alex. I’m a creative Web
          Developer with a passion for design and typography. I’m a chronic
          adventurist and a life-time learner. I started my web development
          journey in 2018 at MiraCosta college. Since then, I found myself
          obsessed with front-end web technologies, specifically with JavaScript
          and its robust ecosystem. While I enjoy riding the JavaScript
          hype-train, I stay aware of the fact that JavaScript is not the only
          answer. I make sure that end-user needs inform my decisions in the
          first place. When I design, I follow the notion that form must follow
          function to keep my designs clean, minimalistic, and accessible. When
          I’m not behind a screen, I spend my time photographing the beach,
          surfing at the beach, and cycling around the beach.
        </p>
      </div>
    </AboutStyles>
  );
}
