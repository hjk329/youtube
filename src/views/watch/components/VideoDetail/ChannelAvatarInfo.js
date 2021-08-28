import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ChannelAvatarInfo = ({
  imageUrl,
  title,
  name,
  subscriptions,
  channel,
}) => (
  <Container>
    <Thumb to={`/channel/${channel.id}`}>
      <img src={imageUrl} alt="" />
    </Thumb>
    <Desc>
      <Title>{title}</Title>
      <Name>{name}</Name>
      <Details>
        구독자
        {subscriptions / 10000}
        {' '}
        만명
      </Details>
    </Desc>
  </Container>
)

const Container = styled.div`
  display: flex;
`;

const Thumb = styled(Link)`
  display: block;
  img{
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin: 12px 12px 0 0;
  }
`;

const Desc = styled.div`

`;

const Title = styled(Link)`
  display: block;
  margin: 12px 0 6px;
  font-size: 14px;
  font-weight: 700;
  color: #333;
`;

const Name = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: rgb(96, 96, 96);
  transition: 0.3s;
  line-height: 18px;


  &:hover {
    color: #333;
  }
`;

const Details = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: rgb(96, 96, 96);
  
  span {
    display: inline-block;
    position: relative;
    bottom : 3px;
    border-radius: 50%;
    width: 4px;
    height: 4px;
    margin-left: 2px;
    background: rgb(96, 96, 96);
  }
`;
export default ChannelAvatarInfo;
