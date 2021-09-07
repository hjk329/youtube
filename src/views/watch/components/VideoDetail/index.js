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
    <Thumb>
      <VideoBox id={id} />
      <VideoInfo info={info} />
      <ChannelInfo />
      <GetCommentsContainer info={info} />
    </Thumb>
    <Related>
      <RelatedVideosContainer info={info} />
    </Related>
  </Container>
)

const Container = styled.div`
  display: flex;
  padding: 60px 24px;

`;

const Thumb = styled.div`
  flex: 1;
`;

const Related = styled.div`
  flex-shrink: 0;
  padding-left: 24px;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
export default VideoDetail;
