import React from 'react';
import styled from 'styled-components';

import { formatNumber } from '../../../../lib/common';

const AvatarInfo = ({
  imageUrl,
  title,
  name,
  details,
}) => (
  <Container>
    <Thumb>
      <img src={imageUrl} alt="" />
    </Thumb>
    <Desc>
      <Title>{title}</Title>
      <Name>{name}</Name>
      <Details>
        조회수
        {formatNumber(details)}
      </Details>
    </Desc>
  </Container>
)

const Container = styled.div`
  display: flex;
`;

const Thumb = styled.div`
  img{
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin: 12px 12px 0 0;
  }
`;

const Desc = styled.div`

`;

const Title = styled.div`
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
`;
export default AvatarInfo;
