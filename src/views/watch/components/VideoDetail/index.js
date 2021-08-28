import React from 'react';
import styled from 'styled-components';

import VideoBox from './VideoBox';
import ChannelInfo from './Channelnfo';
import VideoInfo from './VideoInfo';
import GetCommentsContainer from '../../containers/GetCommentsContainer';
import RelatedVideosContainer from '../../containers/RelatedVideosContainer';

const VideoDetail = ({ video = [], id }) => (

  <Container>
    <Content>
      <VideoBox id={id} />
      <VideoInfo info={video} />
      <ChannelInfo />
      <GetCommentsContainer videoId={id} />
    </Content>
    <Content>
      <RelatedVideosContainer id={id} />
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
