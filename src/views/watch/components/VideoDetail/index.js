import React from 'react';
import styled from 'styled-components';

import VideoBox from './VideoBox';
import ChannelInfo from './Channelnfo';
import VideoInfo from './VideoInfo';
import GetCommentsContainer from '../../containers/GetCommentsContainer';
import RelatedVideosContainer from '../../containers/RelatedVideosContainer';

const VideoDetail = ({ info = [], id }) => (

  <Container>
    <Left>
      <VideoBox id={id} />
      <VideoInfo info={info} />
      <ChannelInfo />
      <GetCommentsContainer videoId={id} />
    </Left>
    <Right>
      <RelatedVideosContainer info={info} />
    </Right>
  </Container>
)

const Container = styled.div`
  display: flex;

`;

const Left = styled.div`
  margin: 0 0 0 24px;
  padding: 24px 24px 0 0;
`;

const Right = styled.div`
 flex-shrink: 1;
  flex-grow: 1;
  padding: 24px 0 0 0;
`;
export default VideoDetail;
