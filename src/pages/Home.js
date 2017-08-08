import React from 'react';
import styled from 'styled-components';

import Logo from 'assets/logo-raster.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const LogoContainer = styled.div`
  flex: 0 0 auto;
  width: 80%;
  max-width: 340px;

  img {
    max-width: 100%;
  }
`;

const Headline = styled.div`
  padding: 20px;
  text-align: center;
  font-size: 1.2rem;
`;

const Home = () => (
  <Container>
    <LogoContainer>
      <img src={Logo} />
    </LogoContainer>
    <Headline>
      A glimpse into a mixed reality future. <br/>
      Coming later in 2017
    </Headline>
  </Container>
)

export default Home;
