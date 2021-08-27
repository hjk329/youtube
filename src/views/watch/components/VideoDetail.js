import React from 'react';
import styled from 'styled-components';

import VideoBox from './VideoBox';
import ChannelInfo from './Channelnfo';
import Comments from './Comments';
import RelatedVideos from './RelatedVideos';
import VideoInfo from './VideoInfo';

const VideoDetail = ({ video = [], id }) => (

  <Container>
    <Content>
      <VideoBox id={id} />
      <VideoInfo info={video} />
      <ChannelInfo />
      <Comments />
    </Content>
    <Content>
      <RelatedVideos />
    </Content>
  </Container>
)

const Container = styled.div`
  display: flex;
  align-items: center;

`;

const Content = styled.div`
  margin: 0 0 0 24px;
  padding: 24px 24px 0 0;
  &:last-child {
    margin: 0;
  }
`;
export default VideoDetail;
