import React from 'react';
import styled from 'styled-components';

import { formatCommentsTime } from '../../../../lib/common';
import CommentAvatar from '../CommentAvatar';

const CommentList = ({ comments = [] }) => {
  console.log(comments)
  return (
    <Container>
      {
        comments.map((item) => (
          <CommentAvatar
            imageUrl={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
            name={item.snippet.topLevelComment.snippet.authorDisplayName}
            comment={item.snippet.topLevelComment.snippet.textDisplay}
            published={formatCommentsTime(item.snippet.topLevelComment.snippet.publishedAt)}
          />
        ))
      }
    </Container>
  )
}

const Container = styled.div`

`;
export default CommentList;
