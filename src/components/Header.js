import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Logo from 'assets/logo.png';
import Wrapper from 'components/Wrapper';

const Container = styled.header`
  position: absolute;
  display: flex;
  top: 0;
  width: 100%;
`;

const LogoContainer = styled(Link)`
  display: block;
  flex: 0 0 auto;

  img {
    display: block;
    height: 140px;
  }
`;

const Nav = styled.nav`
  flex: 1 0 auto;
  text-align: right;
  padding: 1em 0;

  a {
    display: inline-block;
    margin-left: 2em;
    padding: .2em 0;
    font-size: .875em;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border .1s ease-in-out;

    :hover { border-color: white; }
  }
`;

const Header = () => (
  <Container>
    <Wrapper>
      <LogoContainer to='/'>
        <img src={Logo} alt='Glimpse Studio' />
      </LogoContainer>
      <Nav>
        <a href='https://medium.com/glimpse-studio'>Blog</a>
        <a href='mailto:hello@glimpse.studio'>Contact</a>
      </Nav>
    </Wrapper>
  </Container>
);

export default Header;
