import React, { useState } from 'react';
import styled from 'styled-components';
import { MdTune } from 'react-icons/all';
import cn from 'classnames';
import { Link, useLocation, useParams } from 'react-router-dom';
import qs from 'qs';

import FilterItem from './FilterItem';

const Filter = () => {
  const [open, setOpen] = useState(false)

  const { query } = useParams()
  const location = useLocation()
  const queryParams = qs.parse(location.search, { ignoreQueryPrefix: true })

  const before1Hour = new Date(Date.now() - 1000 * 60 * 60).toISOString()
  const before1Day = new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString()
  const before1Week = new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString()
  const before1Month = new Date(Date.now() - 1000 * 60 * 60 * 24 * 7 * 4).toISOString()
  const before1Year = new Date(Date.now() - 1000 * 60 * 60 * 24 * 7 * 4 * 13).toISOString()

  return (
    <Container className={cn({ isActive: open })}>
      <Title onClick={() => setOpen((v) => !v)}>
        <Icon><MdTune /></Icon>
        필터
      </Title>
      <FilterItemBox className={cn({ isOpen: open })}>
        <FilterItem
          title="업로드 날짜"
          dropmenu={[
            <DropMenuItem to={`/results/${query}?${qs.stringify({
              ...queryParams,
              publishedAfter: before1Hour,
            })}`}
            >
              지난 1시간
            </DropMenuItem>,
            <DropMenuItem to={`/results/${query}?${qs.stringify({
              ...queryParams,
              publishedAfter: before1Day,
            })}`}
            >
              오늘
            </DropMenuItem>,
            <DropMenuItem to={`/results/${query}?${qs.stringify({
              ...queryParams,
              publishedAfter: before1Week,
            })}`}
            >
              이번 주
            </DropMenuItem>,
            <DropMenuItem to={`/results/${query}?${qs.stringify({
              ...queryParams,
              publishedAfter: before1Month,
            })}`}
            >
              이번 달
            </DropMenuItem>,
            <DropMenuItem to={`/results/${query}?${qs.stringify({
              ...queryParams,
              publishedAfter: before1Year,
            })}`}
            >
              올해
            </DropMenuItem>,
          ]}
        />
        <FilterItem
          title="구분"
          dropmenu={[
            <DropMenuItem>동영상</DropMenuItem>,
            <DropMenuItem>채널</DropMenuItem>,
            <DropMenuItem>채널 목록</DropMenuItem>,
            <DropMenuItem>영화</DropMenuItem>,
          ]}
        />
        <FilterItem
          title="길이"
          dropmenu={[
            <DropMenuItem to={`/results/${query}?${qs.stringify({
              ...queryParams,
              videoDuration: 'short',
            })}`}
            >
              4분 미만
            </DropMenuItem>,
            <DropMenuItem to={`/results/${query}?${qs.stringify({
              ...queryParams,
              videoDuration: 'medium',
            })}`}
            >
              4분~20분
            </DropMenuItem>,
            <DropMenuItem to={`/results/${query}?${qs.stringify({
              ...queryParams,
              videoDuration: 'long',
            })}`}
            >
              20분 초과
            </DropMenuItem>,
          ]}
        />
        <FilterItem
          title="정렬 기준"
          dropmenu={[
            <DropMenuItem to={`/results/${query}?${qs.stringify({
              ...queryParams,
              order: 'relevance',
            })}`}
            >
              관련성
            </DropMenuItem>,
            <DropMenuItem to={`/results/${query}?${qs.stringify({
              ...queryParams,
              order: 'date',
            })}`}
            >
              업로드날짜
            </DropMenuItem>,
            <DropMenuItem to={`/results/${query}?${qs.stringify({
              ...queryParams,
              order: 'viewCount',
            })}`}
            >
              조회수
            </DropMenuItem>,
            <DropMenuItem to={`/results/${query}?${qs.stringify({
              ...queryParams,
              order: 'rating',
            })}`}
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
`;
export default Filter;
