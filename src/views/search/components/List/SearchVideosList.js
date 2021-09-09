import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import SearchVideoItem from '../Item/SearchVideoItem';
import SearchVideoItems from '../Item/SearchVideoItems';

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
  flex: 1;
`;

const Content = styled.div`
`;

const ItemWrapper = styled.div`
  margin-top: 16px;
`;
export default SearchVideosList;
