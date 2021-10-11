import React, { useState } from 'react';
import styled from 'styled-components';
import { MdTune } from 'react-icons/all';
import cn from 'classnames';
import { Link, useLocation, useParams } from 'react-router-dom';
import qs from 'qs';

import FilterItem from './FilterItem';

const timeSortTypes = {
  BEFORE_1_HOUR: 'before1Hour',
  BEFORE_1_DAY: 'before1Day',
}

export const timeSort = {
  [timeSortTypes.BEFORE_1_HOUR]: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
  [timeSortTypes.BEFORE_1_DAY]: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
  before1Week: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString(),
  before1Month: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7 * 4).toISOString(),
  before1Year: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7 * 4 * 13).toISOString(),
}
const Filter = () => {
  const [open, setOpen] = useState(false)
  const { query } = useParams()
  const location = useLocation()

  const queryParams = qs.parse(location.search, { ignoreQueryPrefix: true })
  const timeSortData = [
    {
      name: timeSortTypes.BEFORE_1_HOUR,
      text: '1시간 전',
    },
    {
      name: timeSortTypes.BEFORE_1_DAY,
      text: '하루 전',
    },
  ]

  const timeDropDown = timeSortData.map((item, index) => (
    <DropMenuItem
      to={`/results/${query}?${qs.stringify({
        ...queryParams,
        publishedAfter: item.name,
      })}`}
      className={cn({ isActive: queryParams?.publishedAfter === item.name })}
    >
      {item.text}
    </DropMenuItem>
  ))

  return (
    <Container className={cn({ isActive: open })}>
      <Title onClick={() => setOpen((v) => !v)}>
        <Icon><MdTune /></Icon>
        필터
      </Title>
      <FilterItemBox className={cn({ isOpen: open })}>
        <FilterItem
          title="업로드 날짜"
          dropmenu={timeDropDown}
        />
        <FilterItem
          title="구분"
          dropmenu={[
            <DropMenuItem
              to={`/results/${query}?${qs.stringify({
                ...queryParams,
                type: 'video',
              })}`}
              className={cn({ isActive: queryParams?.type === 'video' })}
            >
              동영상
            </DropMenuItem>,
            <DropMenuItem
              to={`/results/${query}?${qs.stringify({
                ...queryParams,
                type: 'channel',
              })}`}
              className={cn({ isActive: queryParams?.type === 'channel' })}
            >
              채널
            </DropMenuItem>,
            <DropMenuItem
              to={`/results/${query}?${qs.stringify({
                ...queryParams,
                type: 'playlist',
              })}`}
              className={cn({ isActive: queryParams?.type === 'playlist' })}
            >
              채널 목록
            </DropMenuItem>,
          ]}
        />
        <FilterItem
          title="정렬 기준"
          dropmenu={[
            <DropMenuItem
              to={`/results/${query}?${qs.stringify({
                ...queryParams,
                order: 'relevance',
              })}`}
              className={cn({ isActive: queryParams?.order === 'relevance' })}

            >
              관련성
            </DropMenuItem>,
            <DropMenuItem
              to={`/results/${query}?${qs.stringify({
                ...queryParams,
                order: 'date',
              })}`}
              className={cn({ isActive: queryParams?.order === 'date' })}

            >
              업로드날짜
            </DropMenuItem>,
            <DropMenuItem
              to={`/results/${query}?${qs.stringify({
                ...queryParams,
                order: 'viewCount',
              })}`}
              className={cn({ isActive: queryParams?.order === 'viewCount' })}

            >
              조회수
            </DropMenuItem>,
            <DropMenuItem
              to={`/results/${query}?${qs.stringify({
                ...queryParams,
                order: 'rating',
              })}`}
              className={cn({ isActive: queryParams?.order === 'rating' })}

            >
              평점
            </DropMenuItem>,
          ]}
        />
      </FilterItemBox>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  margin-bottom: 32px;

  &.isActive {
    height: 100%;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  height: 37px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: rgb(96, 96, 96);
  transition: 0.2s;

  &:hover {
    color: #333;
    font-weight: bold;

    svg {
      fill: #333;
    }
  }
`;

const Icon = styled.div`
  svg {
    margin-right: 8px;
    width: 24px;
    height: 24px;
    fill: rgb(96, 96, 96);
    transition: 0.2s;
  }
`;

const FilterItemBox = styled.div`
  display: none;
  width: 100%;

  &.isOpen {
    display: flex;
  }
`;

const DropMenuItem = styled(Link)`
  display: block;
  padding-top: 15px;
  font-size: 12px;
  color: #606060;
  line-height: 17px;

  &.isActive {
    font-weight: bold;
  }
`;
export default Filter;
