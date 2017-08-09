import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import { textColor, grey3 } from 'utilities/colors';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: ${grey3};
  color: ${textColor};
`;

const App = () => (
  <Container>
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </Container>
);

export default App;
