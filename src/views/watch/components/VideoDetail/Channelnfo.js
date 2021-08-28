import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';

import ChannelAvatarInfo from './ChannelAvatarInfo';
import { StyledButton } from '../../../shared/components/Button/DefaultButton';

const ChannelInfo = () => {
  const channel = useSelector((state) => state.watch.result[0].channel)
  const vidInfo = useSelector((state) => state.watch.result[0].snippet.description)

  return (

    <Container>
      <Top>
        <ChannelAvatarInfo
          imageUrl={channel.snippet.thumbnails.medium}
          name={channel.snippet.title}
          subscriptions={channel.statistics.subscriberCount}
          channel={channel}
        />
        <Button>구독</Button>
      </Top>
      <Bottom>
        <Desc>
          {vidInfo}
        </Desc>
      </Bottom>
    </Container>
  )
}

const Container = styled.div`
  padding-bottom: 16px;
  margin-bottom: 24px;
  border-bottom: 1px solid rgba(0,0,0,0.1);
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled(StyledButton)`
  background: rgb(204, 0, 0);
  border: 1px solid rgb(204, 0, 0);
  border-radius: 2px;
  color: #fff;
  width: 70px;
  height: 37px;

`;
const Bottom = styled.div`
  height: 60px;
  margin-top: 20px;
`;

const Desc = styled.div`

`;
export default ChannelInfo;
