import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import SearchVideoItem from '../Item/SearchVideoItem';

const SearchVideosList = ({ results = [] }) => {
  if (_.isEmpty(results)) return null;
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
