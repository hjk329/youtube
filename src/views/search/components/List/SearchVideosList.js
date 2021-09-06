import React from 'react';
import styled from 'styled-components';

import SearchVideoItem from '../Item/SearchVideoItem';

const SearchVideosList = ({ results = [] }) => {
  console.log(1)
  return (
    <Container>
      <Content>
        {
          results.map((item) => (
            <ItemWrapper key={item.id.videoId}>
              <SearchVideoItem item={item} />
            </ItemWrapper>
          ))
        }
      </Content>
    </Container>
  )
}

const Container = styled.div`

`;

const Content = styled.div`
`;

const ItemWrapper = styled.div`
  margin-top: 16px;
`;
export default SearchVideosList;
