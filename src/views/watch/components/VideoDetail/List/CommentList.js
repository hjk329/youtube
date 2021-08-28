import React from 'react';
import styled from 'styled-components';

import { formatCommentsTime, formatThousandDigit1 } from '../../../../../lib/common';
import CommentAvatar from '../../CommentAvatar';

const CommentList = ({ comments = [] }) => (
  <Container>
    {
      comments.map((item) => (
        <CommentAvatar
          imageUrl={item?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
          name={item?.snippet?.topLevelComment?.snippet?.authorDisplayName}
          comment={item?.snippet?.topLevelComment?.snippet?.textDisplay}
          published={formatCommentsTime(item?.snippet?.topLevelComment?.snippet?.publishedAt)}
          like={formatThousandDigit1(item?.snippet?.topLevelComment?.snippet?.likeCount)}
        />
      ))
    }
  </Container>
)

const Container = styled.div`

`;
export default CommentList;
