import React from 'react';
import styled from 'styled-components';

import { media } from 'utilities/css';

import HeroImage from 'assets/header_blue_distant.png';
import Wrapper from 'components/Wrapper';

const Container = styled.div`
  display: flex;
  width: 100%;
  padding-top: calc(120px + 1rem);
  min-height: 70vh;
  background-image: url(${HeroImage});
  background-size: cover;
  background-position: top;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  text-align: center;

  ${media.tablet`
    width: 60%;
    text-align: left;
  `}
`;

const Title = styled.h1`
  margin-top: -60px;
  color: white;
  font-weight: 400;
`;

const Hero = () => (
  <Container>
    <Wrapper>
      <Contents>
        <Title>We are Glimpse, a mixed reality technology studio</Title>
      </Contents>
    </Wrapper>
  </Container>
);

export default Hero;
