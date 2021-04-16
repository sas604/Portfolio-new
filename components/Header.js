import Link from 'next/link';
import styled from 'styled-components';
import Burger from './burger';
import Logo from './logo';
import MobileNav from './MobileNav';
import Nav from './Nav';

const HeaderStyle = styled.header`
  display: flex;
  padding: 0.5rem 1.5rem;
  align-items: center;
  max-width: 1248px;
  margin: 0 auto;
`;
export default function Header() {
  return (
    <HeaderStyle>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <Burger />
      <Nav />
    </HeaderStyle>
  );
}
