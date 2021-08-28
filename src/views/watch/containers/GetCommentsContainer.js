import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import Comments from '../components/VideoDetail/Comments';
import { getComments } from '../redux/slice';
import CommentList from '../components/List/CommentList';

const GetCommentsContainer = ({ videoId }) => {
  const dispatch = useDispatch()
  const comments = useSelector((state) => state.watch.comments.items)
  const displayComments = () => {
    dispatch(getComments({
      part: 'snippet, id',
      videoId,
      order: 'relevance',
    }))
  }
  useEffect(() => {
    displayComments()
  }, [])
  return (
    <Container>
      <CommentList comments={comments} />
    </Container>
  )
}

const Container = styled.div`

`;
export default GetCommentsContainer;
