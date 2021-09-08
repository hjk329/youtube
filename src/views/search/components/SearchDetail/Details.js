import React from 'react';
import styled from 'styled-components';

const Details = ({ details }) => {
  const {
    snippet,
  } = details

  const descriptionArr = snippet.description.split(' ')

  return (
    <Container>
      <Content>
        {
          descriptionArr.map((item, index) => {
            if (index > 10) return null;
            return <Content>{item}</Content>
          })
        }
        ...
      </Content>
    </Container>
  )
}

const Container = styled.div`
  margin-bottom: 8px;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  font-weight: 400;
  color: #606060;
  text-transform: capitalize;

`;
export default Details;
