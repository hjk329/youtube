import React, { useState } from 'react';
import styled from 'styled-components';
import { MdTune } from 'react-icons/all';
import cn from 'classnames';
import { Link, useParams } from 'react-router-dom';
import qs from 'qs';

import FilterItem from './FilterItem';

const Filter = () => {
  const [open, setOpen] = useState(false)
  const { query } = useParams()

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
            <DropMenuItem>지난 1시간</DropMenuItem>,
            <DropMenuItem>오늘</DropMenuItem>,
            <DropMenuItem>이번 주 </DropMenuItem>,
            <DropMenuItem>이번 달</DropMenuItem>,
            <DropMenuItem>올해</DropMenuItem>,
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
              duration: 'short',
            })}`}
            >
              4분 미만
            </DropMenuItem>,
            <DropMenuItem to={`/results/${query}?${qs.stringify({
              duration: 'medium',
            })}`}
            >
              4분~20분
            </DropMenuItem>,
            <DropMenuItem to={`/results/${query}?${qs.stringify({
              duration: 'long',
            })}`}
            >
              20분 초과
            </DropMenuItem>,
          ]}
        />
        <FilterItem
          title="정렬 기준"
          dropmenu={[
            <DropMenuItem>관련성</DropMenuItem>,
            <DropMenuItem>업로드날짜</DropMenuItem>,
            <DropMenuItem>조회수</DropMenuItem>,
            <DropMenuItem>평점</DropMenuItem>,
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
