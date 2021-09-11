import React from 'react';
import styled from 'styled-components';
import { useWindowSize } from 'rooks';
import cn from 'classnames';

import VideoBox from './VideoBox';
import ChannelInfo from './Channelnfo';
import VideoInfo from './VideoInfo';
import RelatedVideosContainer from '../../containers/RelatedVideosContainer';
import GetCommentsContainer from '../../containers/GetCommentsContainer';

const VideoDetail = ({
  info,
  id,
}) => {
  const { innerWidth } = useWindowSize();
  const small = innerWidth <= 1000

  return (

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
}

const Container = styled.div`
  display: flex;
  padding: 60px 24px;

  @media screen and (max-width: 1000px) {
    display: block;
  }

`;

const Thumb = styled.div`
  flex: 1;
`;

const Related = styled.div`
  padding-left: 24px;

  @media screen and (max-width: 1000px) {
    display: none;
  }

  @media screen and (min-width: 1113px) {
    width: 402px;
  }
  
  @media screen and (max-width: 1112px) and (min-width: 1001px) {
    flex: 1;
  }
`;
export default VideoDetail;
