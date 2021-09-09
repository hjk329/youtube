import React from 'react';
import styled from 'styled-components';

import Filter from '../Filter';
import SearchVideosList from '../List/SearchVideosList';
import RelatedPlaylistContainer from '../../containers/RelatedPlaylistContainer';

const SearchDetail = ({ results = [] }) => {
  const ae = 1;
  return (
    <Container>
      <Filter />
      <SearchVideosList results={results} />
      {/* <RelatedPlaylistContainer /> */}
    </Container>
  )
}

const Container = styled.div`
  padding: 16px 24px;
  background: rgba(0, 0, 0, 0.03);
`;
export default SearchDetail;
