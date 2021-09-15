import React from 'react';
import styled from 'styled-components';
import { useWindowSize } from 'rooks';
import cn from 'classnames';

import VideoBox from './VideoBox';
import ChannelInfo from './Channelnfo';
import VideoInfo from './VideoInfo';
import RelatedVideosContainer from '../../containers/RelatedVideosContainer';
import GetCommentsContainer from '../../containers/GetCommentsContainer';
import { StyledButton } from '../../../shared/components/Button/DefaultButton';

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
        {
          !small
          && <GetCommentsContainer />
        }

      </Thumb>
      <Related>
        <RelatedVideosContainer info={info} />
      </Related>
      {
        small && <GetCommentsContainer />
      }
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

`;

const Related = styled.div`
  padding-left: 24px;
`;
export default VideoDetail;
