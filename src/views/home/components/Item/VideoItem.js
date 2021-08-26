import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { MdAccessTime, MdPlaylistPlay } from 'react-icons/all';

import AvatarInfo from '../../../shared/components/AvatarInfo';
import RatioBox from '../../../shared/components/RatioBox';

const VideoItem = ({ item }) => {
  const {
    id,
    snippet,
    statistics,
    contentDetails,
    channel,
  } = item;

  return (
    <Container>
      <ContentBox to={`/watch/${id}`}>
        <RatioBox width={244} height={137}>
          <img src={snippet.thumbnails.medium.url} alt="" />
          <Screen>
            <Button><MdAccessTime /></Button>
            <Button><MdPlaylistPlay /></Button>
          </Screen>
        </RatioBox>

        <Desc>
          <AvatarInfo
            imageUrl={channel.thumbnails.medium.url}
            title={snippet.title}
            name={snippet.channelTitle}
            views={statistics.viewCount}
            published={snippet.publishedAt}
          />
        </Desc>
      </ContentBox>
    </Container>
  )
}

const Container = styled.div`
  margin: 0 8px 20px;

`;

const ContentBox = styled(Link)`
  position: relative;
  cursor: pointer;

  &:hover {
    svg {
      opacity: 1;
    }
  }
`;

const Screen = styled.div`
  position: absolute;
  top: 0;
  right:0;
  padding: 10px;

`;

const Button = styled.div`
  svg {
    background: #111;
    width: 20px;
    height: 20px;
    fill: #fff;
    opacity: 0;
    transition: 0.2s;
  }

`;

const Desc = styled.div`

`;

export default VideoItem;
