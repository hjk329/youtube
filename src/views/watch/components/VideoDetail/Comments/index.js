import React from 'react';
import styled from 'styled-components';
import { formatDistance } from 'date-fns';
import ko from 'date-fns/locale/ko';

import { formatThousandDigit1 } from '../../../../../lib/common';
import CommentAvatar from './CommentAvatar';

const Comments = ({ comments = [] }) => (
  <Container>
    {
      comments.map((item) => {
        const {
          authorProfileImageUrl,
          authorDisplayName,
          textDisplay,
          publishedAt,
          likeCount,
        } = item?.snippet?.topLevelComment?.snippet;
        return (
          <CommentAvatar
            imageUrl={authorProfileImageUrl}
            name={authorDisplayName}
            comment={textDisplay}
            publishedAt={publishedAt}
            like={formatThousandDigit1(likeCount)}
          />
        )
      })
    }
  </Container>
)

const Container = styled.div`

`;
export default Comments;
