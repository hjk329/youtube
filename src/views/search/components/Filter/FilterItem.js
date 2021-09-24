import React from 'react';
import styled from 'styled-components';

import DropBox from './DropBox';

const FilterItem = ({ title, dropmenu = [] }) => (
  <Container>
    <Title>{title}</Title>
    <DropBox menu={dropmenu} />
  </Container>
)

const Container = styled.div`
  position: relative;
  padding-right: 32px;
  flex: 1;

`;

const Title = styled.div`
  padding: 15px 0;
  margin: 5px 0;
  font-size: 13px;
  font-weight: 500;
  border-bottom: 1px solid rgb(3,3,3);
`;

export default FilterItem;
