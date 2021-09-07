import React from 'react';
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
              {/* {moment.duration(contentDetails.duration)} */}
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
  right:0;
  padding: 10px;

`;

const Top = styled.div`
    
`;

const Bottom = styled.div`
    
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
