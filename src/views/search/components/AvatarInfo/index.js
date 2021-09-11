import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import 'moment/locale/ko'

import { formatNumber } from '../../../../lib/common';

const AvatarInfo = ({
  imageUrl,
  title,
  name,
  views,
  publishedAt,
  description,
}) => (
  <Container>
    <Desc>
      <Title>{title}</Title>
      <Details className="details">
        {
          views
          && (
            <Views>
              조회수
              {' '}
              {formatNumber(views)}
              <span />
            </Views>
          )
        }
        {
          publishedAt
          && (
            <Published>
              {moment(publishedAt)
                .fromNow()}
            </Published>
          )
        }
      </Details>
    </Desc>
    {
      imageUrl
      && (
        <Thumb>
          <img src={imageUrl} alt="" />
          <Name>{name}</Name>
        </Thumb>
      )
    }
    {
      description
      && (
        <Description>
          {
            description.length > 55 ? `${description.substr(0, 55)}...` : description
          }
        </Description>
      )
    }
  </Container>
)

const Container = styled.div`

`;

const Thumb = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 12px 0;

  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin: 0 8px 0 0;
    object-fit: cover;
  }
`;

const Desc = styled.div`
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  height: 52px;
  margin-right: 8px;
  font-size: 18px;
  font-weight: 400;
  color: #030303;
`;

const Name = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: rgb(96, 96, 96);
  transition: 0.3s;
  line-height: 18px;

  &:hover {
    color: #333;
  }
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  color: rgb(96, 96, 96);

  span {
    display: inline-block;
    position: relative;
    bottom: 3px;
    border-radius: 50%;
    width: 4px;
    height: 4px;
    margin: 0 4px;
    background: rgb(96, 96, 96);
  }

  @media screen and (max-width: 460px) {
    display: block;
  }

`;

const Views = styled.div`

`;

const Published = styled.div`

`;

const Description = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  font-weight: 400;
  color: #606060;
  text-transform: capitalize;
  margin-bottom: 8px;
`;
export default AvatarInfo;
