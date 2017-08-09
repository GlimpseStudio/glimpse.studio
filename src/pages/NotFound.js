import React from 'react';
import styled from 'styled-components';

import BackgroundImage from 'assets/header_blue_middle.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 0 auto;
  width: 100%;
  background-image: url(${BackgroundImage});
  background-position: center;
  background-size: cover;
  color: white;
`;

const NotFound = () => (
  <Container>
    <h1>Nothing to see here :)</h1>
  </Container>
);

export default NotFound;
