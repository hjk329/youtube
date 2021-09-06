import React from 'react';
import styled from 'styled-components';

import RelatedItems from '../Item/RelatedItems';
import VideoItem from '../../../home/components/Item/VideoItem';

const RelatedVideosList = ({ video = [] }) => (
  <Container>
    <Col>
      {
        video.map((item) => <RelatedItems item={item} />)
      }
    </Col>
  </Container>
)
const Container = styled.div`

`;

const Col = styled.div`
    
`;

export default RelatedVideosList;
