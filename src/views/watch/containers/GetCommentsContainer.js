import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { getComments } from '../redux/slice';
import CommentList from '../components/VideoDetail/List/CommentList';
import { useIntersection } from '../../../hooks/useIntersection';

const GetCommentsContainer = ({ videoId }) => {
  const dispatch = useDispatch()
  const comments = useSelector((state) => state.watch.comments.items)
  const nextPageToken = useSelector((state) => state.watch.comments.nextPageToken)

  const [sentinelRef, inView] = useIntersection()
  const [pageToken, setPageToken] = useState(nextPageToken)
  const displayComments = () => {
    dispatch(getComments({
      part: 'snippet, id',
      videoId,
      order: 'relevance',
      pageToken,
    }))
  }
  useEffect(() => {
    displayComments()
  }, [pageToken, videoId])
  useEffect(() => {
    if (inView) {
      setPageToken(nextPageToken)
    }
  }, [inView])
  return (
    <Container>
      <CommentList comments={comments} />
      <Sentinel ref={sentinelRef} />
    </Container>
  )
}

const Container = styled.div`

`;

const Sentinel = styled.div`
    height: 1px;
  pointer-events: none;
`;
export default GetCommentsContainer;
