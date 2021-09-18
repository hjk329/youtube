import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdAccessTime, MdPlaylistPlay } from 'react-icons/all';
import moment from 'moment';

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
  const duration = moment.duration(contentDetails.duration)

  return (
    <Container>
      <ContentBox to={`/watch/${id}`}>
        <RatioBox width={4} height={3}>
          <img src={snippet?.thumbnails?.high?.url} alt="" />
          <Screen>
            <Top>
              <Button><MdAccessTime /></Button>
              <Button><MdPlaylistPlay /></Button>
            </Top>
            <Bottom>
              {moment(duration._milliseconds)
                .format('mm:ss')}
            </Bottom>
          </Screen>
        </RatioBox>

        <Desc>
          <AvatarInfo
            imageUrl={channel?.thumbnails?.medium.url}
            title={snippet?.title}
            name={snippet?.channelTitle}
            views={statistics?.viewCount}
            publishedAt={snippet?.publishedAt}
          />
        </Desc>
      </ContentBox>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  top: 40px;
`;

const ContentBox = styled(Link)`
  display: block;
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
  left: 0;
  width: 100%;
  height: 100%;

`;

const Top = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
`;

const Bottom = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 4px;
  padding: 5px;
  border-radius: 2px;
  font-size: 12px;
  font-weight: 500;
  background: rgba(0,0,0,0.8);
  color: #fff;
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
