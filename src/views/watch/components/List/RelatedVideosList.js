import React from 'react';
import styled from 'styled-components';

import VideoItem from '../../../home/components/Item/VideoItem';

const RelatedVideosList = ({ video = [] }) => {
  console.log(video)
  return (
    <Container>
      <Col>
        {
          video.map((item) => <VideoItem item={item} />)
        }
      </Col>
    </Container>
  )
}
const Container = styled.div`

`;

const Col = styled.div`
    
`;

export default RelatedVideosList;
