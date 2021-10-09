import React from 'react';
import styled from 'styled-components';

import { MdClose } from 'react-icons/all';

import { IconVisual, IconYoutubeMusic } from '../../../../icons';

const Visual = ({ onClose }) => (
  <Container>
    <VisualBox>
      <IconVisual />
      <Text>
        <Header>
          <IconYoutubeMusic />
        </Header>
        <Center>
          Music Premium으로 광고없이 감상하세요
        </Center>
        <Footer>
          <JoinButton>지금 가입하기</JoinButton>
        </Footer>
      </Text>
      <Button onClick={onClose}>
        <MdClose />
      </Button>
    </VisualBox>
  </Container>
)

const Container = styled.div`
  height: 260px;
  position: relative;
  top: 20px;
`;

const VisualBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

`;

const Text = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  padding: 60px 24px;
`;

const Header = styled.div`
  margin-bottom: 8px;
  height: 28px;
  img {
    width: 320px;
    height: 24px;
    object-fit: cover;
  }
  
`;

const Center = styled.div`
  margin-bottom: 20px;
  font-size: 26px;
  font-weight: 400;
  line-height: 30px;
  color: #fff;
  max-width: 440px;
  height: 80px;
  white-space: nowrap;
  
`;

const Footer = styled.div`
  margin-bottom: 10px;
`;

const JoinButton = styled.div`
  border: 1px solid #fff;
  padding: 10px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 113px;
  height: 37px;
  color: #fff;
  border-radius: 2px;
  font-size: 14px;
  font-weight: 500;
`;

const Button = styled.div`
  position: absolute;
  top: 50px;
  right: 20px;
  padding: 20px;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
    fill: #fff;
  }
`;
export default Visual;
