import React from 'react';
import styled from 'styled-components';

import { MdTune } from 'react-icons/all';

import IconButton from '../../../shared/components/Button/IconButton';

const Filter = () => {
  const ae = 1;
  return (
    <Container>
      <Content>
        <Icon><MdTune /></Icon>
        필터
      </Content>
    </Container>
  )
}

const Container = styled.div`
`;

const Content = styled.div`
  display: flex;
  align-items: center;
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

export default Filter;
