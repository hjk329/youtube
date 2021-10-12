import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdAccessTime, MdPlayArrow, MdPlaylistPlay } from 'react-icons/md';
import moment from 'moment';

import AvatarInfo from '../AvatarInfo';
import RatioBox from '../../../shared/components/RatioBox';
import ChannelAvatarInfo from '../AvatarInfo/ChannelAvatarInfo';

const SearchVideoItem = ({ item }) => {
  const {
    id,
    snippet,
    channel,
    videoInfo,
  } = item;

  const duration = moment.duration(videoInfo?.contentDetails?.duration)

  return (
    <Container>
      {
        // eslint-disable-next-line no-nested-ternary
        videoInfo ? (
          <ContentBox to={`/watch/${id?.videoId}`}>
            <Thumb>
              <RatioBox width={360} height={202}>
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
            </Thumb>

            <Desc>
              <AvatarInfo
                imageUrl={channel?.snippet?.thumbnails?.high.url}
                title={snippet?.title}
                name={channel?.snippet?.title}
                views={videoInfo?.statistics?.viewCount}
                publishedAt={snippet?.publishedAt}
                description={videoInfo?.snippet?.description}
              />
            </Desc>
          </ContentBox>
        )
          : id.playlistId ? (
            <ContentBox to={`/watch/${id?.videoId}`}>
              <Thumb className="thumb">
                <Aside classname="aside">
                  <MdPlaylistPlay />
                </Aside>
                <HoverScreen className="hoverBox">
                  <MdPlayArrow />
                  모두 재생
                  {' '}
                </HoverScreen>
                <RatioBox width={360} height={202}>
                  <img src={snippet?.thumbnails?.high?.url} alt="" />
                </RatioBox>
              </Thumb>

              <Desc>
                <AvatarInfo
                  imageUrl={channel?.snippet?.thumbnails?.high.url}
                  title={snippet?.title}
                  name={channel?.snippet?.title}
                  views={videoInfo?.statistics?.viewCount}
                  publishedAt={snippet?.publishedAt}
                  description={videoInfo?.snippet?.description}
                />
              </Desc>
            </ContentBox>
          )
            : (
              <ChannelBox>
                <ChannelAvatarInfo
                  id={channel?.id}
                  imageUrl={channel?.snippet?.thumbnails?.high?.url}
                  title={channel?.snippet?.title}
                  subscriptions={channel?.statistics?.subscriberCount}
                  posts={channel?.statistics?.videoCount}
                  description={channel?.snippet?.description}
                />
              </ChannelBox>

            )
      }

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

const Aside = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 30%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 100;

  svg {
    width: 24px;
    height: 24px;
    fill: #fff;
  }
`;

const HoverScreen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  opacity: 0;
  z-index: 200;
  transition: 0.3s;

  svg {
    width: 20px;
    height: 20px;
    fill: #fff;
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
  background: rgba(0, 0, 0, 0.8);
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

const Thumb = styled.div`
  position: relative;
  max-width: 360px;
  flex: 1;

  &:hover {
    > .hoverBox {
      opacity: 1;
    }
  }

`;

const Desc = styled.div`
  margin-left: 16px;
  flex: 1;
  @media screen and (max-width: 280px) {
    display: none;
  }
`;

const ChannelBox = styled.div`

`;

export default SearchVideoItem;
