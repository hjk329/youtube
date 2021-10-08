import React from 'react';
import styled, { css } from 'styled-components';

import { useSelector } from 'react-redux';

import Filter from '../Filter';
import SearchVideosList from '../List/SearchVideosList';

const SearchDetail = ({ results = [] }) => {
  const normalSidebar = useSelector((state) => state.app.normalSidebar)
  return (
    <Container normalSidebar={normalSidebar}>
      <Filter />
      <SearchVideosList results={results} />
    </Container>
  )
}

const Container = styled.div`
  margin-top: 60px;
  padding: 16px 24px;
  background: rgba(0, 0, 0, 0.03);
  
  ${(p) => !p.normalSidebar && css`
    padding-left: 100px;
  `}
`;
export default SearchDetail;
