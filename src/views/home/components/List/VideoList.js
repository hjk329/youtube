import React from 'react';
import styled from 'styled-components';

import VideoItem from '../Item/VideoItem';

const VideoList = ({ data = [] }) => (
  <Container>
    <Row>
      {
        data.map((item) => (
          <Col>
            <VideoItem item={item} key={item.id} />
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
  margin: 0 -7px;
`;

const Col = styled.div`
  width: 25%;
  @media screen and (max-width: 1127px) {
    width: 33.3333%;
  }

  @media screen and (max-width: 888px) {
    width: 50%;
  }

  @media screen and (max-width: 512px) {
    width: 100%;
  }
  
  padding: 0 7px;
`;
export default VideoList;
