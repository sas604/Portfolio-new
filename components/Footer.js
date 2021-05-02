import styled from 'styled-components';
import { SiNextDotJs } from 'react-icons/si';

const FooterStyles = styled.footer`
  min-height: 68px;
  border-top: 3px solid var(--yellow);
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    margin: 0;
    margin-right: 0.3rem;
  }
  div {
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    svg {
      font-size: 1.3rem;
    }
  }
`;
export default function Footer() {
  return (
    <FooterStyles>
      <div>
        <p>Made with ❤️ and</p>
        <a aria-label="next-js" href="https://nextjs.org/">
          <SiNextDotJs />
        </a>
      </div>
      <div>
        <a href="https://github.com/sas604/portfolio-new">source code</a>
      </div>
    </FooterStyles>
  );
}
