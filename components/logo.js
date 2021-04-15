import styled from 'styled-components';
import ReactLogo from '../public/logo.svg';

const LogoStyles = styled.div`
  width: clamp(100px, 20vw, 150px);
`;
const Logo = () => (
  <LogoStyles>
    <ReactLogo />
  </LogoStyles>
);

export default Logo;
