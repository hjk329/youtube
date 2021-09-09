import React from 'react';
import styled from 'styled-components';

const Description = ({ details }) => {
  const {
    snippet,
  } = details

  return (
    <Container>
      <Content>
        {snippet.description.substring(0, 115)}
        ...
      </Content>
    </Container>
  )
}

const Container = styled.div`
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  font-weight: 400;
  color: #606060;
  text-transform: capitalize;

`;
export default Description;
