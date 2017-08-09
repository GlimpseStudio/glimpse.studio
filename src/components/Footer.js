import React from 'react';
import styled from 'styled-components';

import { grey6 } from 'utilities/colors';

import Wrapper from 'components/Wrapper';

const Container = styled.div`
  width: 100%;
  padding: 3em 0;
  background: white;
  font-size: .875em;
`;

const Box = styled.div`
  flex: 1 0 auto;
  margin: .2em 0;
  color: ${grey6};

  a {
    color: ${grey6};
    text-decoration: none;
  }
`;

const Footer = () => (
  <Container>
    <Wrapper column>
      <Box>
        Glimse Studio | <a href='mailto:hello@glimpse.studio'>hello@glimpse.studio</a>
      </Box>
      <Box>
        Plexal, Olympic Park, Stratford, London, E15 2GW
      </Box>
    </Wrapper>
  </Container>
);

export default Footer;
