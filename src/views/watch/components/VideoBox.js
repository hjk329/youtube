import React from 'react';
import styled from 'styled-components';

import RatioBox from '../../shared/components/RatioBox';

const VideoBox = ({ id }) => (
  <Container>
    <RatioBox width={4} height={3}>
      <iframe src={`https://www.youtube.com/embed/${id}`} title="video" frameBorder="0" />
    </RatioBox>
  </Container>
)

const Container = styled.div`

`;
export default VideoBox;
