import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.column ? 'column' : 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  width: 100%;
  max-width: 1000px;

  padding: 1rem;
  margin: 0 auto;
`;

export default Wrapper;
