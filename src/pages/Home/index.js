import React from 'react';
import styled from 'styled-components';

import Hero from 'pages/Home/Hero';
import StudioBanner from 'pages/Home/StudioBanner';
import DigestBanner from 'pages/Home/DigestBanner';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Home = () => (
  <Container>
    <Hero />
    <StudioBanner />
    <DigestBanner />
  </Container>
)

export default Home;
