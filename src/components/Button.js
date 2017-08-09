import styled from 'styled-components';
import { darken } from 'polished';

import { maroon } from 'utilities/colors';

const Button = styled.a`
  display: inline-block;
  margin: 0;
  padding: .8em 1.2em;

  text-decoration: none;
  text-transform: uppercase;
  font-size: .875em;
  cursor: pointer;
  color: ${props => props.color || 'white'};

  background: ${props => props.background || maroon};
  border: 1px solid transparent;
  outline: none;

  transition: background .1s;

  :hover {
    background: ${props => darken(0.1, props.background || maroon)};
  }
`;

export default Button;
