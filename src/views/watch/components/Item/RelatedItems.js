import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { MdAccessTime, MdPlaylistPlay } from 'react-icons/all';

import AvatarInfo from '../../../shared/components/AvatarInfo';
import RatioBox from '../../../shared/components/RatioBox';

const RelatedItems = ({ item }) => {
  const {
    id,
    snippet,
    statistics,
  } = item;

  return (
    <Container>
      <ContentBox to={`/watch/${id}`}>
        <RatioBox width={4} height={3}>
          <img src={snippet?.thumbnails?.high?.url} alt="" />
          <Screen>
            <Button><MdAccessTime /></Button>
            <Button><MdPlaylistPlay /></Button>
          </Screen>
        </RatioBox>

        <Desc>
          <AvatarInfo
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
  display: flex;
  width: 402px;
  height: 94px;
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
  flex: 1;
  margin-left: 8px;
`;

export default RelatedItems;
