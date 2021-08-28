import React from 'react';
import styled from 'styled-components';

import AvatarInfo from '../../../shared/components/AvatarInfo';
import CommentList from '../List/CommentList';

const Comments = ({ comments = [] }) => (
  <Container>
    {/* <AvatarInfo */}
    {/*  imageUrl={comment.authorProfileImageUrl} */}
    {/*  name={comment.authorDisplayName} */}
    {/*  comments={comment.textDisplay} */}
    {/* /> */}
  </Container>
)

const Container = styled.div`

`;
export default Comments;
