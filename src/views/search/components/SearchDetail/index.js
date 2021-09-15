import React from 'react';
import styled from 'styled-components';

import Filter from '../Filter';
import SearchVideosList from '../List/SearchVideosList';

const SearchDetail = ({ results = [] }) => (
  <Container>
    <Filter />
    <SearchVideosList results={results} />
  </Container>
)

const Container = styled.div`
  margin-top: 60px;
  padding: 16px 24px;
  background: rgba(0, 0, 0, 0.03);
`;
export default SearchDetail;
