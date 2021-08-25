import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { MdAccessTime, MdPlaylistPlay } from 'react-icons/all';

import AvatarInfo from '../AvatarInfo';

const VideoItem = ({ item }) => {
  const {
    snippet,
    statistics,
    contentDetails,
    channel,
  } = item;

  return (
    <Container>
      <ContentBox className="box">
        <Screen>
          <Button><MdAccessTime /></Button>
          <Button><MdPlaylistPlay /></Button>
        </Screen>
        <Thumb>
          <img src={snippet.thumbnails.medium.url} alt="" />
        </Thumb>
        <Desc>
          <AvatarInfo
            imageUrl={channel.thumbnails.medium.url}
            title={snippet.title}
            name={snippet.channelTitle}
            details={statistics.viewCount}
          />
        </Desc>
      </ContentBox>
    </Container>
  )
}

const Container = styled.div`
  margin: 0 8px 20px;

`;

const ContentBox = styled.div`
  position: relative;
  cursor: pointer;

  &:hover {
    svg {
      opacity: 1;
    }
  }
`;

const Thumb = styled.div`

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
