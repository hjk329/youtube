import React from 'react';
import styled from 'styled-components';

import VideoItem from '../Item/VideoItem';

const VideoList = ({ data = [] }, gutter) => (
  <Container>
    <Row>
      {
        data.map((item, index) => (
          <Col key={item.id}>
            <VideoItem item={item} />
          </Col>
        ))
      }
    </Row>
  </Container>
)

const Container = styled.div`

`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Col = styled.div`
  width: 25%;
  padding: ${(p) => p.gutter ?? 10}px;
`;
export default VideoList;
