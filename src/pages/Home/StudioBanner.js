import React from 'react';
import styled from 'styled-components';

import { media } from 'utilities/css';
import { grey5, grey6 }  from 'utilities/colors';

import Vive from 'assets/vive.jpg';
import Plexal from 'assets/plexal.png';

import Button from 'components/Button';
import Wrapper from 'components/Wrapper';

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: -12vh;
`;

const Banner = Wrapper.extend`
  width: 100%;
  min-height: 360px;

  ${media.tablet`
    flex-direction: row;
  `}
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  flex: 1 1 auto;
  padding: 2em;
  background: white;
  box-shadow: 0 1px 3px ${grey5};
  z-index: 10;

  h2 {
    margin-top: 0;
  }

  p {
    color: ${grey6};
  }
`;

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 0 0 50%;
  background: ${grey5};
  box-shadow: 0 1px 3px ${grey5};

  ${media.tablet`
    flex: 0 0 30%;
    margin: 1em 0;
  `}
`;

const Image = styled.div`
  flex: 1 0 auto;
  width: 100%;
  height: 50%;
  background: url(${props => props.src});
  background-size: cover;
  background-position: center;
`;

const StudioBanner = () => (
  <Container>
    <Banner column>
      <Contents>
        <div>
          <h2>London VR Studio & Workspace</h2>
          <p>
            Glimpse has teamed up with Plexal to open a VR & AR studio in the
            Queen Elizabeth Olympic Park, London.
          </p>
          <p>
            We have a limited number of fixed desks in the co-working space available at £350pm. Each comes
            with full access to the studio.
          </p>
        </div>
        <div>
          <Button href='https://medium.com'>Learn More</Button>
        </div>
      </Contents>
      <Gallery>
        <Image src={Vive} />
        <Image src={Plexal} />
      </Gallery>
    </Banner>
  </Container>
);

StudioBanner.propTypes = {

};

export default StudioBanner;
