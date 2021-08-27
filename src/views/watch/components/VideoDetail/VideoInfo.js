import React from 'react';
import styled from 'styled-components';

import {
  MdMoreHoriz,
  MdPlaylistAdd, MdReply, MdThumbDown, MdThumbUp,
} from 'react-icons/all';

import { Link } from 'react-router-dom';

import { formatDate, formatThousandDigit1 } from '../../../../lib/common';
import IconButton from '../../../shared/components/Button/IconButton';

const VideoInfo = ({ info }) => {
  const {
    snippet,
    statistics,
    contentDetails,
  } = info
  return (
    <Container>
      <Title>
        {snippet.title}
      </Title>
      <Details>
        <Item>
          <Info>
            조회수
            {' '}
            {Number(statistics.viewCount)
              .toLocaleString('ko-KR') || '--'}
            회
          </Info>
          <Info><span /></Info>

          <Info>
            {formatDate(snippet.publishedAt)}
          </Info>
        </Item>
        <Item>
          <Icon>
            <MdThumbUp />
            {formatThousandDigit1(statistics.likeCount)}
          </Icon>
          <Icon>
            <MdThumbDown />
            {formatThousandDigit1(statistics.dislikeCount)}
          </Icon>
          <Icon>
            <MdReply />
            공유
          </Icon>
          <Icon>
            <MdPlaylistAdd />
            저장
          </Icon>
          <Icon>
            <MdMoreHoriz />
          </Icon>
        </Item>
      </Details>
    </Container>
  )
}

const Container = styled.div`
  padding: 20px 0 8px 0;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Item = styled.div`
  display: flex;
  align-items: center;

`;

const Title = styled.div`
  color: rgb(3, 3, 3);
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
`;

const Info = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: rgb(96, 96, 96);
  margin-right: 4px;
  span {
    position: relative;
    bottom: 2px;
    display: block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgb(96, 96, 96);
  }
`;

const Icon = styled(Link)`
  display: flex;
  align-items: center;
  height: 40px;
  font-size: 14px;
  font-weight: 500;
  color: rgb(3, 3, 3);
  padding: 0 6px 0 8px;
  
  svg {
    width: 24px;
    height: 24px;
    fill: #333;
    margin-right: 6px;
  }
`;
export default VideoInfo;
