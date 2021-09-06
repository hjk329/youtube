import React from 'react';
import styled from 'styled-components';

import { MdClose } from 'react-icons/all';

import { IconVisual, IconYoutubeMusic } from '../../../../icons';

const Visual = ({ onClose }) => (
  <Container>
    <ImageBox>
      <IconVisual />
      <Text>
        <Header>
          <IconYoutubeMusic />
        </Header>
        <Center>
          Music Premium으로 끊김없이 음악을 즐기세요
        </Center>
        <Footer>
          <JoinButton>지금 가입하기</JoinButton>
        </Footer>
      </Text>
      <Button onClick={onClose}>
        <MdClose />
      </Button>
    </ImageBox>
  </Container>
)

const Container = styled.div`
  height: 260px;
  position: relative;
`;

const ImageBox = styled.div`
  position: relative;

`;

const Text = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Header = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 20px;
  margin-bottom: 20px;
`;

const Center = styled.div`
  position: absolute;
  top: 60px;
  left: 10px;
  padding: 20px;
  margin-bottom: 20px;
  max-width: 440px;
  color: #fff;
  font-size: 26px;
  font-weight: 500;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  left: 10px;
  padding: 20px;
  margin: 20px 0;
`;

const JoinButton = styled.div`
  border: 1px solid #fff;
  padding: 10px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 2px;
  font-size: 14px;
  font-weight: 500;
`;

const Button = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
    fill: #fff;
  }
`;
export default Visual;
