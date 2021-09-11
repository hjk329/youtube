import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdAccessTime, MdPlaylistPlay } from 'react-icons/all';

import AvatarInfo from '../AvatarInfo';
import RatioBox from '../../../shared/components/RatioBox';

const SearchVideoItem = ({ item }) => {
  const {
    id,
    snippet,
    channel,
    videoInfo,
  } = item;
  return (
    <Container>
      <ContentBox to={`/watch/${id?.videoId}`}>
        <RatioBox width={360} height={202}>
          <img src={snippet?.thumbnails?.high?.url} alt="" />
          <Screen>
            <Button><MdAccessTime /></Button>
            <Button><MdPlaylistPlay /></Button>
          </Screen>
        </RatioBox>

        <Desc>
          <AvatarInfo
            imageUrl={channel?.snippet?.thumbnails?.high.url}
            title={snippet?.title}
            name={channel?.snippet?.title}
            views={videoInfo?.statistics?.viewCount}
            publishedAt={snippet?.publishedAt}
            description={videoInfo.snippet.description}
          />
        </Desc>
      </ContentBox>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 16px;
`;

const ContentBox = styled(Link)`
  display: flex;
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
  right: 0;
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
  margin-left: 16px;
  flex: 1;
  @media screen and (max-width: 280px) {
    display: none;
  }
`;

export default SearchVideoItem;
