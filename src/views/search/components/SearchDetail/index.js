import React from 'react';
import styled from 'styled-components';

import Filter from '../Filter';
import SearchVideosList from '../List/SearchVideosList';
import RelatedPlaylistContainer from '../../containers/RelatedPlaylistContainer';

const SearchDetail = ({ results }) => {
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
  margin: 16px 24px;
  //display: flex;
`;
export default SearchDetail;
