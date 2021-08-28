import React from 'react';
import styled from 'styled-components';

import { formatNumber } from '../../../lib/common';

const CommentAvatar = ({
  imageUrl,
  name,
  comment,
  like,
  published,
}) => (
  <Container>
    <Thumb>
      <img src={imageUrl} alt="" />
    </Thumb>
    <Desc>
      <Name>
        {name}
        <Published>
          {' '}
          {published}
          {' '}
          일전
        </Published>
      </Name>
      <Comment>{comment}</Comment>

    </Desc>
  </Container>
)

const Container = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const Thumb = styled.div`
  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 16px;
  }
`;

const Desc = styled.div`

`;

const Name = styled.div`
  display: flex;
  font-size: 13px;
  font-weight: 500;
  color: rgb(3,3,3);
  transition: 0.3s;
  line-height: 18px;


  &:hover {
    color: #333;
  }
`;

const Comment = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: rgb(3, 3, 3);
`;
const Published = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #606060;
  margin: 0 0 2px 4px;
`;
export default CommentAvatar;
