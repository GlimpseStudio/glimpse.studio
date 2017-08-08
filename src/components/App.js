import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Home from 'pages/Home';
import NotFound from 'pages/NotFound';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const Contents = styled.div`
  display: flex;
  padding: 1rem;
  width: 100%;
  max-width: 1200px;
  flex-grow: 1;
`;

const App = () => (
  <Container>
    <Contents>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Contents>
  </Container>
);

export default App;
