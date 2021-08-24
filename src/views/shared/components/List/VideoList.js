import React from 'react';
import styled from 'styled-components';

import VideoItem from '../Item/VideoItem';

const VideoList = ({ data = [] }) => (
  <Container>
    <Row>
      {
        data.map((item, index) => (
          <Col>
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
`;
export default VideoList;
