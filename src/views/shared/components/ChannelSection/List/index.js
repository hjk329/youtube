import React from 'react';
import styled from 'styled-components';

import ChannelSectionItem from '../Item/ChannelSectionItem';

const ChannelSectionList = ({ data = [] }) => (
  <Container>
    <Row>
      {
        data.map((item, index) => (
          <ItemWrapper>
            <ChannelSectionItem item={item} index={item.id} />
          </ItemWrapper>
        ))
      }
    </Row>
  </Container>
)

const Container = styled.div`

`;

const Row = styled.div`
    
`;

const ItemWrapper = styled.div`
    
`;
export default ChannelSectionList;
