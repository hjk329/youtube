import React from 'react';
import styled from 'styled-components';
import { formatDistance } from 'date-fns';
import ko from 'date-fns/locale/ko';

import { formatThousandDigit1 } from '../../../../../lib/common';
import CommentAvatar from './CommentAvatar';

const Comments = ({ comments = [] }) => (
  <Container>
    {
      comments.length > 0
        ? comments.map((item) => {
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
        : (
          <Desc>
            댓글 사용이 중지되었습니다.
            <a href="https://support.google.com/youtube/answer/9706180?hl=ko">자세히 알아보기</a>
          </Desc>
        )
    }

  </Container>
)

const Container = styled.div`

`;

const Desc = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: rgb(3, 3, 3);

  a {
    color: rgb(6, 95, 212);
  }
`;
export default Comments;
