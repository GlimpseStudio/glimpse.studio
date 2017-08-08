import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const NotFound = () => (
  <Wrapper>
    <h1>Nothing to see here :)</h1>
  </Wrapper>
);

export default NotFound;
