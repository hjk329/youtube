import React from 'react';
import styled from 'styled-components';

import ScrollMenu from '../ScrollMenu';

const Category = ({ categories = [] }) => (
  <Container>
    <ScrollMenu data={categories}>
      {(item) => <Title key={item.id}>{item.snippet.title}</Title>}
    </ScrollMenu>
  </Container>
)

const Container = styled.div`
  border-top: 1px solid #d1d1d1;
  border-bottom: 1px solid #d1d1d1;

`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
  padding: 0 12px;
  margin: 12px 12px 12px 0;
  height: 32px;
  color: #333;
  background: rgba(0,0,0,0.05);
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 16px;
  cursor: pointer;
  transition:  0.2s;
  
  &:hover {
    background: rgba(0,0,0,0.1);
    border-color: rgba(0,0,0,0.1);
  }
`;

export default Category;
