import React from 'react';
import styled from 'styled-components';

import {
  MdExplore, MdHome, MdRestore, MdSubscriptions, MdVideoLibrary,
} from 'react-icons/all';

const Shortcuts = ({ show }) => (
  <Container>
    <IconBox>
      <Icon>
        {' '}
        <MdHome />
        {' '}
      </Icon>
      <Text>홈</Text>
    </IconBox>
    <IconBox>
      <Icon><MdExplore /></Icon>
      <Text>탐색</Text>
    </IconBox>
    <IconBox>
      <Icon><MdSubscriptions /></Icon>
      <Text>구독</Text>
    </IconBox>
    <IconBox>
      <Icon><MdVideoLibrary /></Icon>
      <Text>보관함</Text>
    </IconBox>
    <IconBox>
      <Icon><MdRestore /></Icon>
      <Text>시청기록</Text>
    </IconBox>
  </Container>
)

const Container = styled.div`
  position: fixed;
  left : 0;
  top: 56px;
  width: 72px;
  height: 100%;
  background: #fff;
`;

const IconBox = styled.div`
  padding: 16px 0 14px;

  svg {
    width: 24px;
    height: 24px;
    fill: rgb(96, 96, 96);
  }

  &:hover {
    background: rgba(0,0,0, 0.05);
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  font-weight: 500;
`;
export default Shortcuts;
