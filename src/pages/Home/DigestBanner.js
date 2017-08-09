import React from 'react';
import styled from 'styled-components';

import { grey7, maroon } from 'utilities/colors';
import { media } from 'utilities/css';

import Button from 'components/Button';
import Wrapper from 'components/Wrapper';

const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 3rem 0;
`;

const Banner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0;
  padding: 2em;
  color: white;
  background: ${grey7};
`;

const About = styled.div`
  flex: 1 0 auto;
  text-align: left;

  h2 {
    font-weight: 400;
    margin: 0;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 0;

  ${media.tablet`
    flex-direction: row;
  `}

  span {
    margin: 1em 0;
    padding: 0 .5em;
  }
`;

const TextInput = styled.input`
  display: inline-block;
  margin: 1em 1em 1em 0;
  padding: .8em 1.2em;
  font-size: 0.875em;
  flex: 1 0 100%;

  border: 1px solid white;
  background: white;
  outline: none;

  ${media.tablet`
    flex: 1 0 auto;
  `}

  :focus, :active {
    outline: none;
  }
`;

const ReadMore = Button.extend`
  background: none;
  border-color: white;

  :hover { background: transparent; }
`;

const Submit = Button.withComponent('input');

const DigestBanner = () => (
  <Container>
    <Wrapper>
      <Banner>
        <About>
          <h2>Weekly VR & AR News Digest</h2>
          <p>
            Get the latest news and updates on everything virtual, augmented and mixed
            reality with the Glimpse weekly digest. We pull together the most interesting
            stories so you don't have to.
          </p>
        </About>
        <Form action='https://glimpse.curated.co/email_subscribers' method='post'>
          <TextInput name='email' type='email' placeholder='Email address' required />
          <input name='form_dom_id' value='embedded-subscribe-form' type='hidden' />
          <div>
            <Submit type='submit' value='Subscribe' background={maroon} />
            <span>or</span>
            <ReadMore href='http://digest.glimpse.studio/#start'>Read the latest issue</ReadMore>
          </div>
        </Form>
      </Banner>
    </Wrapper>
  </Container>
);

export default DigestBanner;
