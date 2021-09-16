import React from 'react';
import styled from 'styled-components';

const ChannelAvatarInfo = ({
  imageUrl,
  title,
  subscriptions,
  posts,
  description,
}) => {
  const formatNumber = (num) => {
    if (num < 10000) {
      return `${(Number(num) / 1000).toFixed()}만명`
    }
    return `${(Number(num) / 10000).toFixed()}만명`
  }
  return (
    <Container>
      <ContentBox>
        <Thumb>
          <img src={imageUrl} alt="" />
        </Thumb>
        <Desc>
          <Title>{title}</Title>
          <Details>
            구독자
            {' '}
            {formatNumber(subscriptions)}
            <span />
            동영상
            {posts}
            개
          </Details>
          {
            description.length > 60 ? `${description.substr(0, 60)}...` : description
          }
        </Desc>
      </ContentBox>
    </Container>
  )
}

const Container = styled.div`

`;

const ContentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-right: none;
  border-left: none;
  padding: 20px 0;
  cursor: pointer;
`;

const Thumb = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  margin-right: 16px;

  img {
    border-radius: 50%;
    width: 136px;
    height: 136px;
  }
`;

const Desc = styled.div`
  margin-bottom: 4px;
  padding: 0 16px 16px;
  color: #606060;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  color: #030303;
  margin-bottom: 8px;
`;

const Details = styled.div`
  display: flex;
  span {
    position: relative;
    top:4px;
    margin: 0 4px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #606060;
  }
`;
export default ChannelAvatarInfo;
