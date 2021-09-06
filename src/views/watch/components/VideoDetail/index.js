import React from 'react';
import styled from 'styled-components';

import VideoBox from './VideoBox';
import ChannelInfo from './Channelnfo';
import VideoInfo from './VideoInfo';
import RelatedVideosContainer from '../../containers/RelatedVideosContainer';
import GetCommentsContainer from '../../containers/GetCommentsContainer';

const VideoDetail = ({
  info,
  id,
}) => (

  <Container>
    <Left>
      <VideoBox id={id} />
      <VideoInfo info={info} />
      <ChannelInfo />
      <GetCommentsContainer info={info} />
    </Left>
    <Right>
      <RelatedVideosContainer info={info} />
    </Right>
  </Container>
)

const Container = styled.div`
  display: flex;
  padding: 24px;

`;

const Left = styled.div`
  flex: 5;
`;

const Right = styled.div`
  flex: 2;
  padding-left: 24px;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
export default VideoDetail;
