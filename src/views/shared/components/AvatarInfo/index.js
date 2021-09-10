import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import 'moment/locale/ko'
import cn from 'classnames';

import { formatNumber } from '../../../../lib/common';

const AvatarInfo = ({
  imageUrl,
  title,
  name,
  views,
  publishedAt,
  comments,
  component,
}) => (
  <Container>
    {
      imageUrl
      && (
        <Thumb>
          <img src={imageUrl} alt="" />
        </Thumb>
      )
    }

    <Desc>
      <Title className={cn(component)}>
        {
          title.length > 53 ? `${title.substr(0, 53)}...` : title
        }
      </Title>
      <Name>{name}</Name>

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
              {moment(publishedAt).fromNow()}
            </Published>
          )
        }

      </Details>

      {
        comments
        && (
          <Details>
            <p>{comments}</p>
          </Details>
        )

      }
    </Desc>
  </Container>
)

const Container = styled.div`
  display: flex;
`;

const Thumb = styled.div`
  flex-shrink: 0;

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin: 12px 12px 0 0;
    object-fit: cover;
  }
`;

const Desc = styled.div`

`;

const Title = styled.div`
  margin: 12px 0 6px;
  font-size: 14px;
  font-weight: 700;
  color: #333;
  
  &.relatedVideos {
   margin: 0 0 4px;
  }
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
  display: flex;
  align-items: center;
  font-size: 14px;
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
  
  @media screen and (max-width: 1030px){
    display: block;
  }
  
  
`;

const Views = styled.div`
    
`;

const Published = styled.div`

`;
export default AvatarInfo;
