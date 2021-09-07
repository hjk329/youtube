import React, { useState } from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';

import ChannelAvatarInfo from './ChannelAvatarInfo';
import { StyledButton } from '../../../shared/components/Button/DefaultButton';

const ChannelInfo = () => {
  const channel = useSelector((state) => state.watch.result[0].channel)
  const description = useSelector((state) => state.watch.result[0].snippet.description)
  const descriptionArr = description.split('\n')
  const [more, setMore] = useState(false)

  return (

    <Container>
      <Top>
        <ChannelAvatarInfo
          imageUrl={channel.snippet?.thumbnails?.medium.url}
          name={channel.snippet.title}
          subscriptions={channel.statistics.subscriberCount}
          channel={channel}
        />
        <Button>구독</Button>
      </Top>
      <Bottom>
        <Desc>
          {descriptionArr.map((item, index) => {
            if (!more && index > 4) return null;
            return <p>{item}</p>
          })}
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div onClick={() => setMore((v) => !v)} className="clickDetail">
            {more ? '간략히' : '더보기'}
          </div>
        </Desc>
      </Bottom>
    </Container>
  )
}

const Container = styled.div`
  padding-bottom: 16px;
  margin-bottom: 24px;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  border-top: 1px solid rgba(0,0,0,0.1);
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
  margin-top: 20px;
`;

const Desc = styled.div`
  padding-left: 60px;
p {
  font-size: 14px;
  font-weight: 400;
  color: rgb(3,3,3);
  line-height: 20px;
}
  
  > .clickDetail {
    margin-top: 8px;
    font-size: 13px;
    font-weight: 500;
    color: #606060;
    cursor: pointer;
  }
`;
export default ChannelInfo;
